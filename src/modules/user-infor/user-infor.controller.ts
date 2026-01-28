import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserInforService } from './user-infor.service';
import { CreateUserInforDto } from './dto/create-user-infor.dto';
import { UpdateUserInforDto } from './dto/update-user-infor.dto';

@Controller('user-infor')
export class UserInforController {
  constructor(private readonly userInforService: UserInforService) {}

  @Post()
  create(@Body() createUserInforDto: CreateUserInforDto) {
    return this.userInforService.create(createUserInforDto);
  }

  @Get()
  findAll() {
    return this.userInforService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInforService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInforDto: UpdateUserInforDto) {
    return this.userInforService.update(+id, updateUserInforDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInforService.remove(+id);
  }
}
