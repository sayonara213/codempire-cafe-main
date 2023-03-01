import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import LocalAuthGuard from './localAuthGuard';
import { CreateUserDto } from '../user/dto/user.dto';
import { JwtAuthGuard } from './jwtAuthGuard';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() user: CreateUserDto): Promise<any> {
    return this.service.login(user);
  }

  @Post('/register')
  async register(@Body() user: CreateUserDto): Promise<any> {
    return this.service.register(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile() {
    return this.service.allUsers();
  }
}
