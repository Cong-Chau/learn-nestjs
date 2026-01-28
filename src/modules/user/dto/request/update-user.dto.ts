import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'user@gmail.com',
    description: 'Email đăng nhập',
  })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Mật khẩu (tối thiểu 6 ký tự)',
  })
  password: string;
}
