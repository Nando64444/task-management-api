<<<<<<< HEAD
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
    private users: User[] = [];
 

  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: Date.now(),
      email,
      password: hashedPassword,
    };

    this.users.push(user);
    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string) {
    const user = this.users.find(u => u.email === email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
=======
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    // generate the password hash
    const hash = await argon.hash(createAuthDto.password);
    // save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          name: createAuthDto.name,
          email: createAuthDto.email,
          hash,
        },
      });
      // return the saved user
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginAuthDto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');
    // compare password
    const pwMatches = await argon.verify(user.hash, loginAuthDto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    // send back the user
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '30d',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
    };
  }
}
