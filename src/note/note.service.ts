import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import {Note} from './note.interface'
@Injectable()
export class NoteService {
 constructor(@InjectModel("Note") private readonly note: Model<Note>) {}


  

  create(createNoteDto: CreateNoteDto) {
    return this.note.create(createNoteDto);
  }

  findAll() {
    return this.note.find({});
  }

  findOne(id: string) {
    return this.note.findOne({_id:id});
  }
  findOneByUserId(userId: string) {
    return this.note.findOne({userId:userId});
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return  this.note.findOneAndUpdate({_id:id}, updateNoteDto, {new: true, useFindAndModify: true})
  }

  remove(id: string) {
    return this.note.deleteOne({_id:id});
  }
}
