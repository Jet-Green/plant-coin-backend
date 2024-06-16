import { Injectable } from '@nestjs/common';
import { UserClass } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private UserModel: Model<UserClass>,) { }
  login(user: any) {
    return this.UserModel.create({ telegramId: user.id })
  }
}
