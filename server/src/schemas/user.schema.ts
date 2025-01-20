import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface User extends Document {
  googleId: string;
  email: string;
  name: string;
  createdAt: Date;
}
