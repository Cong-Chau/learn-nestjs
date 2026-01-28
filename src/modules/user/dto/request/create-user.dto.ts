import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email đăng nhập',
  })
  @IsEmail({}, { message: 'Phải đúng định dạng example@domain.com' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Mật khẩu (tối thiểu 6 ký tự)',
  })
  @IsString({ message: 'Mật khẩu phải là chuỗi ký tự' })
  @MinLength(6, { message: 'Mật khẩu phải tối thiếu 6 ký tự' })
  password: string;
}
