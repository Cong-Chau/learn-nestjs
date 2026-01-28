import { PartialType } from '@nestjs/swagger';
import { CreateUserInforDto } from './create-user-infor.dto';

export class UpdateUserInforDto extends PartialType(CreateUserInforDto) {}
