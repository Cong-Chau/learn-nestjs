import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserResponse } from './dto/response/user-response.dto';
import { toUserResponseDto } from './user.mapper';
import { CreateUserDto } from './dto/request/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Lấy tất cả
  async findAll(): Promise<UserResponse[]> {
    const users = await this.userRepository.find();
    return users.map(toUserResponseDto);
  }

  // Tìm theo id
  async findById(id: number): Promise<UserResponse> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Không tìm thấy UserId: ${id}`);
    }

    return toUserResponseDto(user);
  }

  // Cập nhật theo Id
  async update(id: number, userData: UpdateUserDto): Promise<UserResponse> {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const result = await this.userRepository.update(id, {
      email: userData.email,
      password: hashedPassword,
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Không tìm thấy User ${id}`);
    }

    const user = await this.userRepository.findOneBy({ id });
    return toUserResponseDto(user!);
  }

  // Tạo mới
  async create(userData: CreateUserDto): Promise<UserResponse> {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const user = this.userRepository.create({
      email: userData.email,
      password: hashedPassword,
      isActive: true, // optional (đã default ở entity)
    });

    const savedUser = await this.userRepository.save(user);
    return toUserResponseDto(savedUser);
  }

  // Xóa mềm
  async delete(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User not found with id:${id}`);
    }

    user.isActive = false;
    await this.userRepository.save(user);
  }
}
