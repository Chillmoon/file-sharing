import { Schema, Document } from 'mongoose';

export const FolderSchema = new Schema({
  name: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Folder', default: null },
  createdAt: { type: Date, default: Date.now },
});

export interface Folder extends Document {
  name: string;
  parent: Folder | null;
  createdAt: Date;
}
