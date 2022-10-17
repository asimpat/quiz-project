import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { Messages, Regex } from 'src/user/util.file';

export class UserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'Password@123',
  })
  @IsNotEmpty()
  @Length(6, 24)
  @Matches(Regex.password, { message: Messages.passwordMessage })
  password: string;

  @ApiProperty({
    description: 'Confirmed password',
    example: 'Password@123',
  })
  @IsNotEmpty()
  @Length(6, 24)
  @Matches(Regex.password, { message: Messages.passwordMessage })
  confirmPassword: string;
}
