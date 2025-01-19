import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://ChillmoonAdmin:Marci123@file-sharing.508vj.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
