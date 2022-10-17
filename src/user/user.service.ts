import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto/authDto';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    async registration(dto: UserDto): Promise<User> {
      

        const user = new User()
       user.name = dto.name;
       user.email = dto.email;
       user.password = dto.password;
       return await user.save();
        
    }
    async getUserByEmail(dto:AuthDto):Promise<User> {
        return await User.findOne({where:{email:dto.email}})
    }
}
