import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from 'src/entities/option.entity';
import { Question } from 'src/entities/questions';
import { CreateOptionsDto } from 'src/dto/option.dto';
import { Repository } from 'typeorm';

@Injectable()
export class OptionService {
    constructor(@InjectRepository(Option) private readonly optionRepository: Repository<Option>) { }
    

    async createOption(option: CreateOptionsDto, question: Question) {
        const newOption = await this.optionRepository.save({
            text: option.text,
            isCorrect:option.isCorrect
        })
        
        question.options = [...question.options, newOption]
        await question.save()

        return newOption
   }
}
