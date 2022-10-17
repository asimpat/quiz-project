import { IsNotEmpty, Length } from 'class-validator';
import { Question } from 'src/entities/questions';

export class CreateQuestionDto {
  @IsNotEmpty()
  @Length(3,255)
  question: string;

 
    @IsNotEmpty()
    quizId: number
    


}
