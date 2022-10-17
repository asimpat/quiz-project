import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
// import { CreateQuestionDto } from 'src/dto/question';
import { CreateQuestionDto } from '../dto/question.dto';
import { QuestionService } from './question.service';
import { ApiTags } from '@nestjs/swagger';
import { QuizService } from 'src/Quiz/quiz.service';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
constructor(private questionService:QuestionService, private quizSerice:QuizService){}


  
  @Post()
    @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz=await this.quizSerice.getQuizById(question.quizId)
    return await this.questionService.createQuestion(question, quiz)
  }
     
}
