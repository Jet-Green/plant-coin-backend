import { Injectable } from '@nestjs/common';
import { UserClass } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private UserModel: Model<UserClass>,) { }
  async login(user: any) {
    let candidate = await this.UserModel.findOne({ telegramId: user.id })
    if (!candidate) {
      return this.UserModel.create({ telegramId: user.id, name: user.username })
    }
    return candidate
  }
}
