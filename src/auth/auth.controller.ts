import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService ) {}

  @Post()
  create(@Body() user: any) {
    return this.authService.login(user);
  }
}
