import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateQuestionDto } from 'src/dto/question';
// import { Quiz } from 'src/entities/entity';
import { Question } from 'src/entities/questions';
import { Quiz } from 'src/entities/Quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    //map the quiz with the new qeueston
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id: id },
      relations: ['quiz','options'],
    });
  }
}
