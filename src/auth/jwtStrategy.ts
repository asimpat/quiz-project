import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy } from "passport-jwt";
import appConfig from "src/config/appConfig";
// import { AuthService } from "./auth.service";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: appConfig().appSecret,
    });
  }

  async validate(payload:any) {
    
     const { password, ...result }=payload
      return result
  }
}