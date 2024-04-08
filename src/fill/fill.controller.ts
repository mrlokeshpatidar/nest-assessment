import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FillService } from './fill.service';
import { FillDataDto } from '../dtos/fill-form-data.dto';

@Controller('fill_data')
export class FillController {
  constructor(private readonly fillService: FillService) {}

  @Get()
  async getFormData(@Query('form_title') formTitle: string) {
    return await this.fillService.getFormData(formTitle);
  }

  @Post()
  async fillFormData(@Query('form_title') formTitle: string, @Body() fillDataDto: FillDataDto) {
    return await this.fillService.fillFormData(formTitle, fillDataDto);
  }
}
