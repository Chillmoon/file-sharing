import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from '../schemas/file.schema';

@Injectable()
export class FileService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

  async uploadFile(file: Express.Multer.File): Promise<File> {
    const newFile = new this.fileModel({
      name: file.originalname,
      size: file.size,
      contentType: file.mimetype,
      content: file.buffer,
    });
    return newFile.save();
  }

  async getFiles(): Promise<File[]> {
    return this.fileModel.find().exec();
  }

  async updateFile(fileId: string, newData: any): Promise<File> {
    return this.fileModel
      .findByIdAndUpdate(fileId, newData, { new: true })
      .exec();
  }
}
