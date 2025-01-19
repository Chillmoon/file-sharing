import { Controller, Post, Get, Body } from '@nestjs/common';
import { FolderService } from '../services/folder.service';

@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  async createFolder(@Body() body: { name: string; parentId: string }) {
    return this.folderService.createFolder(body.name, body.parentId);
  }

  @Get()
  async getFolders() {
    return this.folderService.getFolders();
  }
}
