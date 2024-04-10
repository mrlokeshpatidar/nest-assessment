import { Controller, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async create(@Body() createFormDataDto: any) {
    // Insert data into form table
    await this.formService.insertFormData(createFormDataDto);

    return 'Form data inserted and table created successfully.';
  }
}
