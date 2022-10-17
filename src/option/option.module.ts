import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { Option } from 'src/entities/option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/questions';
import { QuestionService } from 'src/questions/question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Question])],
  providers: [OptionService, QuestionService],
  controllers: [OptionController],
})
export class OptionModule {}
