import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserClass>

@Schema()
export class UserClass {
  @Prop({
    type: String, 
  })
  name: string

  @Prop({
    type: String, 
  })
  telegramId: string
}
export const UserSchema = SchemaFactory.createForClass(UserClass)