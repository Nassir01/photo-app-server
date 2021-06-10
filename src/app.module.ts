import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [NoteModule, UserModule,MongooseModule.forRoot('mongodb+srv://nassir:nassir@cluster0.htrhr.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
