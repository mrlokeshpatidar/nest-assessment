import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormData } from '../entities/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormData)
    private readonly formDataRepository: Repository<FormData>,
  ) {}

  async create(formData: FormData): Promise<FormData> {
    return await this.formDataRepository.save(formData);
  }
}
