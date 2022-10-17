import {Post, Body, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptionsDto } from 'src/dto/option.dto';
import { QuestionService } from 'src/questions/question.service';
import { OptionService } from './option.service';

@ApiTags('Option')
@Controller('question/option')
export class OptionController {
    constructor(private optionService: OptionService, private questionService: QuestionService) { }
    
    @Post()
        @UsePipes(ValidationPipe)
   async saveOptionToQuestion(@Body() createOption: CreateOptionsDto) {
        const question = await this.questionService.findQuestionById(createOption.questionId)
        
     const option=  await this.optionService.createOption(createOption, question)
        return { question, createOption, option }

    }
}
