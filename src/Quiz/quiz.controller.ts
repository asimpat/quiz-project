import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreateQuizDto } from 'src/dto/quiz.dto';
import { Quiz } from 'src/entities/Quiz.entity';
import { QuizService } from './quiz.service';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/all')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async CreateQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createQuiz(quizData);
  }

  @Get('/')
  // @ApiPaginatedResponse({ model: Quiz, description: 'list of quizes' })
  async getQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }
}
