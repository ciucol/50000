import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Mate',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'Naran',
    description: 'The lastname',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'mate@anran.com',
  })
  @IsString()
  email: string;
}
