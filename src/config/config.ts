

import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { Option } from 'src/entities/option.entity';
import { Question } from 'src/entities/questions';
import { Quiz } from 'src/entities/Quiz.entity';
import { User } from 'src/entities/user.entity';


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      dropSchema: false,
      logging: true,
      // autoLoadEntities: true,
      entities:[User, Question, Quiz, Option],
      migrations: [__dirname + '/../migration/*{.ts,.js}'],
      // cli: {
      //   migrationDir:__dirname + '/../migration'
      // },
      extra: {
        charset:'utf8',
      }
    };
  },
};
// export const typeOrmAsyncConfi: TypeOrmModuleAsyncOptions = {
  
    
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       synchronize: true,
//       dropSchema: false,
//       logging: true,
//       autoLoadEntities: true,
//       migrations: [__dirname + '/../migration/*{.ts,.js}'],
//       // cli: {
//       //   migrationDir:__dirname + '/../migration'
//       // },
//       extra: {
//         charset:'utf8',
//       }
    
  
// };



// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   useFactory: (): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions => {
//     return {
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT, 10),
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: [Quiz, Question, Option, User],
//       synchronize: true,
//       // migrations: [],
//       // cli: {
//       //   migrationsDir:__dirname + '/../migrations'
//       // },
//       // extra: {
        
//       // }
//     };
//   },
// };

