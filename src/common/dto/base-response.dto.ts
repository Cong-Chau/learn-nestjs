import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<T> {
  @ApiProperty({ example: 200 })
  statsCode: number;

  @ApiProperty({ example: 'success' })
  status: string;

  @ApiProperty({ example: 'Get user successfully' })
  message: string;

  @ApiProperty()
  data: T;
}
