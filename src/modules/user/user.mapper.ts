// user.mapper.ts
import { UserResponse } from './dto/response/user-response.dto';
import { User } from './user.entity';

export function toUserResponseDto(user: User): UserResponse {
  return {
    id: user.id,
    email: user.email,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
