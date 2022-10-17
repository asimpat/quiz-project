import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './questions';
// import { userProfile } from "./profile";

@Entity()
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'The quiz unique identifier' })
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: boolean;

  // @OneToOne(() => userProfile)
  // @JoinColumn()
  // profile: userProfile

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
