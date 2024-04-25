import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UsersDocument>,

    private readonly config: ConfigService,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.userModel.create(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    console.log(this.config.get<string>('ACCESS_KEY'));
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
