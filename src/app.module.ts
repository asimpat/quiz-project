import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionModule } from './option/option.module';
import { UserModule } from './user/user.module';
import { typeOrmAsyncConfig } from './config/config';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './Quiz/quiz.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    // TypeOrmModule.forFeature([Option, Question, Quiz]),
    OptionModule,
    UserModule,
    QuizModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],

  // amitavdevzone/ nest-js-quiz-manager
})
export class AppModule {}
