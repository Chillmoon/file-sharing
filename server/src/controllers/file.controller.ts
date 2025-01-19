import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from '../services/file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          callback(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: any) {
    return this.fileService.uploadFile(file);
  }

  @Get()
  async getFiles() {
    return this.fileService.getFiles();
  }
}
