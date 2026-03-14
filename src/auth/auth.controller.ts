import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

type AuthTokenResponse = { access_token: string };

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateAuthDto })
  @ApiCreatedResponse({ description: 'User registered successfully' })
  @ApiBadRequestResponse({ description: 'Invalid payload' })
  @ApiForbiddenResponse({ description: 'Credentials taken' })
  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto): Promise<AuthTokenResponse> {
    return this.authService.register(createAuthDto);
  }

  @ApiOperation({ summary: 'Login with email and password' })
  @ApiBody({ type: LoginAuthDto })
  @ApiOkResponse({ description: 'Login successful' })
  @ApiBadRequestResponse({ description: 'Invalid payload' })
  @ApiForbiddenResponse({ description: 'Credentials incorrect' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto): Promise<AuthTokenResponse> {
    return this.authService.login(loginAuthDto);
  }
}
