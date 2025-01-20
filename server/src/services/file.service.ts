import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from '../schemas/file.schema';

@Injectable()
export class FileService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

  async uploadFile(file: any): Promise<File> {
    const newFile = new this.fileModel({
      name: file.originalname,
      size: file.size,
      contentType: file.mimetype,
      path: file.path,
    });
    return newFile.save();
  }

  async getFiles(): Promise<File[]> {
    return this.fileModel.find().exec();
  }
}
