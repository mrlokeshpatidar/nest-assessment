import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormModule } from './form/form.module';
import { FillController } from './fill/fill.controller';
import { FillModule } from './fill/fill.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    // TypeORM configuration options
    // This will automatically load config from ormconfig.json
  }),FormModule, FillModule],
  controllers: [AppController, FormController, FillController],
  providers: [AppService],
})
export class AppModule {}
