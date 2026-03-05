import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'SUPER_SECRET_KEY',
      signOptions: { expiresIn: '1h' },
    }),
  ],
=======
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [JwtModule.register({})],
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
<<<<<<< HEAD

=======
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
