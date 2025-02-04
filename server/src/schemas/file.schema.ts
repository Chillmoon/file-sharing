import { Schema, Document } from 'mongoose';

export const FileSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  contentType: { type: String, required: true },
  path: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface File extends Document {
  name: string;
  size: number;
  contentType: string;
  path: string;
  createdAt: Date;
}
