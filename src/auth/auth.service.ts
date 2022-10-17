import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthDto } from 'src/dto/authDto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
constructor(private userService:UserService, private jwtSerVice:JwtService){}

    async login(dto: AuthDto): Promise<User|Object> {
        const user = await this.userService.getUserByEmail(dto )
        
        if (!user) {
            throw new UnauthorizedException()
        }
        if (!(await bcrypt.compare(dto.password, user.password))) { throw new BadRequestException() }
        
        const jwt=this.generateToken(dto.email, dto.password)
        return jwt
        
    }
     generateToken(email:string, password:string) {
        return {
            access_Token: this.jwtSerVice.sign({
                
                email:email,
                password:password
                
                
            })
        }
    }
}

