import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { FormData } from '../entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormData])], // Import the repository for FormData
  controllers: [FormController],
  providers: [FormService],

})
export class FormModule {}
