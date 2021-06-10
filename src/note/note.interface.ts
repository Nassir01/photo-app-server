import { Document } from 'mongoose';

export interface Note extends Document{
    note: string;
    userId: string;
    image: string;
}