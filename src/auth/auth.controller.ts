import { Controller, Post, UseGuards,Request, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from 'src/dto/authDto';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() dto: AuthDto): Promise<any> {
    return await this.authService.login(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getUsers(@Request() req): Promise<any> {
      return req.user;
  }
}
// 08103862432