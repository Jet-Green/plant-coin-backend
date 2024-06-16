import { Controller, Res, Get, Post, Body, Patch, Param, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  async create(@Body() user: any) {
    return this.authService.login(user)
  }
}