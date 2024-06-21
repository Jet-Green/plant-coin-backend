import { Controller, Res, Get, Post, Body, Patch, Param, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  async login(@Body() user: {
    telegramId: String,
    username: String
  }) {
    return this.authService.login(user)
  }
  /**
   * accepts current count of tokens and user's telegram id
   * @param body 
   * @returns updated user doc
   */
  @Patch('token-count')
  async setTokenCount(@Body() body: {
    count: Number,
    telegramId: String
  }) {
    return this.authService.setTokenCount(body)
  }
  /**
   * accepts current level and user's telegram id
   * @param body 
   * @returns updated user doc
   */
  @Patch('level')
  async setLevel(@Body() body: {
    level: Number
    telegramId: String,
  }) {
    return this.authService.setLevel(body)
  }
}