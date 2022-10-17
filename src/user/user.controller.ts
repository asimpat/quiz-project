import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  
  @ApiCreatedResponse({
    description: "Created User Object as response",
    type:User,
  })//how to the responses
  @ApiBadRequestResponse({
      description:"user can not register. Try Again"
    })
  @UsePipes(ValidationPipe)
 async registration(@Body() dto: UserDto):Promise<User> {
    return await this.userService.registration(dto);
  }
}
