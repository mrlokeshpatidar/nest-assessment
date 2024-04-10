// form.service.ts

import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { FormData } from '../entities/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormData)
    private readonly formDataRepository: Repository<FormData>,
  ) {}

  async insertFormData(createFormDataDto: any): Promise<void> {
    // Check if UUID already exists in form table
    const existingData = await this.formDataRepository.findOne({
      where: { uniqueId: createFormDataDto.uniqueId },
    });

    if (existingData) {
      throw new ConflictException('UUID already exists in the form table.');
    }

    // Insert data into form table
    const formData = this.formDataRepository.create(createFormDataDto);
    await this.formDataRepository.save(formData);

    // Create table with dynamic columns
    await this.createTable(createFormDataDto);
  }

  async createTable(formData: any): Promise<void> {
    const tableName = formData.title.toLowerCase(); // Convert title to lowercase for table name
    let columns = '';

    // Iterate over properties of formData
    for (const [columnName, columnType] of Object.entries(formData)) {
      // Skip 'title' property
      if (columnName !== 'title') {
        columns += `${columnName} ${columnType}, `;
      }
    }

    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      ${columns}
    )`;

    // Execute SQL query to create table
    const connection = getConnection();
    await connection.query(createTableQuery);
  }
}
