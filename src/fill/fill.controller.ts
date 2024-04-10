import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FillService } from './fill.service';
@Controller('fill_data')
export class FillController {
  constructor(private readonly fillService: FillService) {}

  @Get()
  async getFormData(@Query('form_title') tableName: string) {
    return await this.fillService.getFormData(tableName);
  }

  @Post()
  async fillFormData(@Query('form_title') tableName: string, @Body() fillDataDto: any) {
    return await this.fillService.fillFormData(tableName, fillDataDto);
  }
}
