import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User first name',
    required: false,
  })
  firstName: string;
  lastName: string;
  email: string;
}
