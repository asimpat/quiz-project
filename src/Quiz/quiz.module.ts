import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/questions';
import { Quiz } from 'src/entities/Quiz.entity';
import { QuestionController } from 'src/questions/question.controller';
import { QuestionService } from 'src/questions/question.service';
import { QuizController } from './quiz.controller';
// import { userProfile } from 'src/entities/profile';
// import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
