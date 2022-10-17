import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 200)
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description' })
  @Length(5)
    description: string;
    
  
}
