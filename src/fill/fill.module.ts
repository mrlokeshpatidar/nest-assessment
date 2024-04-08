import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FillController } from './fill.controller';
import { FillService } from './fill.service';
import { FormData } from '../entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormData])],
  controllers: [FillController],
  providers: [FillService],
})
export class FillModule {}
