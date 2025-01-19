import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Folder } from '../schemas/folder.schema';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel('Folder') private readonly folderModel: Model<Folder>,
  ) {}

  async createFolder(name: string, parentId: string): Promise<Folder> {
    const newFolder = new this.folderModel({
      name,
      parent: parentId ? parentId : null,
    });
    return newFolder.save();
  }

  async getFolders(): Promise<Folder[]> {
    return this.folderModel.find().exec();
  }

  async updateFolder(folderId: string, newData: any): Promise<Folder> {
    return this.folderModel
      .findByIdAndUpdate(folderId, newData, { new: true })
      .exec();
  }
}
