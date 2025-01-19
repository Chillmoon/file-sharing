import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { FileService } from './services/file.service';
import { FileController } from './controllers/file.controller';
import { FolderService } from './services/folder.service';
import { FolderController } from './controllers/folder.controller';
import { FileSchema } from './schemas/file.schema';
import { FolderSchema } from './schemas/folder.schema';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@file-sharing.508vj.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`,
    ),
    MongooseModule.forFeature([
      { name: 'File', schema: FileSchema },
      { name: 'Folder', schema: FolderSchema },
    ]),
  ],
  controllers: [FileController, FolderController],
  providers: [FileService, FolderService],
})
export class AppModule {}
