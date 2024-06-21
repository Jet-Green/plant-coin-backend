import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserClass>

@Schema()
export class UserClass {
  @Prop({
    type: String,
  })
  username: string

  @Prop({
    type: String,
  })
  telegramId: string
  
  @Prop({
    type: Number
  })
  tokenCount: number
}
export const UserSchema = SchemaFactory.createForClass(UserClass)