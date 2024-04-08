import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormData } from '../entities/form.entity';
import { FillDataDto } from '../dtos/fill-form-data.dto';

@Injectable()
export class FillService {
  constructor(
    @InjectRepository(FormData)
    private readonly formDataRepository: Repository<FormData>,
  ) {}

  async getFormData(formTitle: string): Promise<FormData[]> {
    return await this.formDataRepository.find({ where: { title: formTitle } });
  }

  async fillFormData(formTitle: string, fillDataDto: FillDataDto): Promise<FormData> {
    const formData = new FormData();
    formData.title = formTitle;
    formData.uniqueId = fillDataDto.uniqueId;
    formData.name = fillDataDto.name;
    formData.email = fillDataDto.email;
    formData.phoneNumber = fillDataDto.phoneNumber;
    formData.isGraduate = fillDataDto.isGraduate;

    return await this.formDataRepository.save(formData);
  }
}
