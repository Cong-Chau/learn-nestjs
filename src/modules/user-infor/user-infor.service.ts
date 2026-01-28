import { Injectable } from '@nestjs/common';
import { CreateUserInforDto } from './dto/create-user-infor.dto';
import { UpdateUserInforDto } from './dto/update-user-infor.dto';

@Injectable()
export class UserInforService {
  create(createUserInforDto: CreateUserInforDto) {
    return 'This action adds a new userInfor';
  }

  findAll() {
    return `This action returns all userInfor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfor`;
  }

  update(id: number, updateUserInforDto: UpdateUserInforDto) {
    return `This action updates a #${id} userInfor`;
  }

  remove(id: number) {
    return `This action removes a #${id} userInfor`;
  }
}
