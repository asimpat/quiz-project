import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { CreateQuizDto } from 'src/dto/quiz.dto';



import { Quiz } from 'src/entities/Quiz.entity';
// import { Question } from 'src/entities/questions';
// import { userProfile } from 'src/entities/profile';
import { Repository } from 'typeorm';
// import {IPaginationOptions} from "@nestjs-typeorm-paginate"


@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
  ) {}

 async getAllQuiz():Promise<Quiz[]> {
   return await this.quizRepository.createQueryBuilder('q').leftJoinAndSelect('q.questions', 'qt').leftJoinAndSelect('qt.options', 'o').getMany() ///this will allow us make custom query
   

// return await this.quizRepository.createQueryBuilder('q').leftJoinAndSelect('q.questions','qt').leftJoinAndSelect('qt.options', 'o').take(1).getMany() ///this will allow us make custom query
 }
  
  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>>{
    const qb=this.quizRepository.createQueryBuilder('q')

    qb.orderBy('q.id', 'DESC');

    return paginate<Quiz>(qb, options)
   
 }

  async getQuizById(id: number):Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions', 'questions.options']
    })
  }

  async createQuiz(quiz:CreateQuizDto) {
    return await this.quizRepository.save(quiz)
  }

  
 
}
