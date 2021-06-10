import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import {User} from '../user/user.schema';
// export type NoteDocument = Note & Document;
@Schema()
export class Note {
  @Prop()
  note: string;

  @Prop()
  userId: string;

  @Prop()
  image: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);