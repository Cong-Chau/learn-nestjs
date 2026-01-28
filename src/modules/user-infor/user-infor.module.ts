import { Module } from '@nestjs/common';
import { UserInforService } from './user-infor.service';
import { UserInforController } from './user-infor.controller';

@Module({
  controllers: [UserInforController],
  providers: [UserInforService],
})
export class UserInforModule {}
