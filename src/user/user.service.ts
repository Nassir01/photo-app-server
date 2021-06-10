import { Model } from 'mongoose';
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}
  create(createUserDto: CreateUserDto) {
    return this.user.create(createUserDto);
  }

  async login(payload) {
    let user = await this.user.findOne({username:payload.username});
    if (!user) throw new NotFoundException('User doesnt exist')
    if (user.password !== payload.password) throw new ForbiddenException('Password is incorrect')
    return user
  }

  findAll() {
    return this.user.find({})
  }

  findOne(_id: string) {
    return this.user.findOne({_id})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.user.findOne({_id:id}).updateOne(updateUserDto);
  }

  remove(id: string) {
    return this.user.deleteOne({_id:id}); 
  }
}
