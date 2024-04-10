import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your TypeORM configuration
    }),
    FormModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}