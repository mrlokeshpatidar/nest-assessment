import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class FillService {
  constructor() {}

  async getFormData(tableName: string) {
    const connection = getConnection();
    const exists = await connection.query(`SHOW TABLES LIKE '${tableName}'`);
    if (exists.length === 0) {
      return `Table '${tableName}' does not exist.`;
    }
    return await connection.query(`SELECT * FROM ${tableName}`);
  }

  async fillFormData(tableName: string, fillDataDto: any) {
    const connection = getConnection();
    const exists = await connection.query(`SHOW TABLES LIKE '${tableName}'`);
    if (exists.length === 0) {
      return `Table '${tableName}' does not exist.`;
    }

    // Check if uniqueId already exists in the table
    const duplicate = await connection.query(`SELECT COUNT(*) AS count FROM ${tableName} WHERE uniqueid = '${fillDataDto.uniqueid}'`);
    if (duplicate[0].count > 0) {
      return `Duplicate uniqueId '${fillDataDto.uniqueid}' found in the table '${tableName}'.`;
    }

    // Perform data type validation
    for (const [columnName, value] of Object.entries(fillDataDto)) {
      const columnDataType = await connection.query(`SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}' AND COLUMN_NAME = '${columnName}'`);
      if (columnDataType.length === 0) {
        return `Column '${columnName}' does not exist in the table '${tableName}'.`;
      }
      const expectedDataType = columnDataType[0].DATA_TYPE;
      if (typeof value !== expectedDataType) {
        return `Invalid data type for column '${columnName}' in the table '${tableName}'. Expected '${expectedDataType}', got '${typeof value}'.`;
      }
    }

    // Insert data into the table
    const columns = Object.keys(fillDataDto).join(', ');
    const values = Object.values(fillDataDto).map(val => typeof val === 'string' ? `'${val}'` : val).join(', ');
    await connection.query(`INSERT INTO ${tableName} (${columns}) VALUES (${values})`);

    return 'Data inserted successfully.';
  }

}
