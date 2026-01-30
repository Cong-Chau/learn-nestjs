import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/request/create-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserResponse } from './dto/response/user-response.dto';

@ApiTags('users')
@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() // /users
  @ApiOperation({ summary: 'Lấy danh sách user' })
  @ApiResponse({ status: 200, description: 'Success' })
  index() {
    return this.userService.findAll();
  }

  // Find By id
  @Get('/:id')
  @ApiOperation({ summary: 'Lấy user theo ID' })
  @ApiParam({
    name: 'id',
    example: 1,
    description: 'ID của user',
  })
  @ApiOkResponse({
    description: 'Lấy user thành công',
    type: UserResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Không tìm thấy user',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }

  // Tạo mới
  @Post()
  @ApiOperation({ summary: 'Tạp user mới' })
  create(
    @Body(new ValidationPipe()) userData: CreateUserDto,
  ): Promise<UserResponse> {
    return this.userService.create(userData);
  }

  // Cập nhật theo id
  @Patch('/:id')
  @ApiOperation({ summary: 'Cập nhật user theo ID' })
  update(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return this.userService.update(+id, userData);
  }

  // Xóa mềm
  @Delete('/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Xóa mềm user' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
