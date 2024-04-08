import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { FormData } from '../entities/form.entity';
import { CreateFormDataDto } from '../dtos/create-form-data.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Body() createFormDataDto: CreateFormDataDto): Promise<FormData> {
    const formData = new FormData();
    formData.title = createFormDataDto.title;
    formData.name = createFormDataDto.name;
    formData.email = createFormDataDto.email;
    formData.phoneNumber = createFormDataDto.phoneNumber;
    formData.isGraduate = createFormDataDto.isGraduate;
    
    return await this.formService.create(formData);
  }
}
