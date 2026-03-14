import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiUnauthorizedResponse, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';

@ApiTags('users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}

