import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, OneToMany } from 'typeorm';
import { Option } from './option.entity';
import { Quiz } from './Quiz.entity';


@Entity("questions")
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar'})
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz
  

  @OneToMany(()=>Option, (option) => option.question)
  options:Option[]
}
