import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host-name',
      port: 3306,
      username: 'username',
      password:'password',
      database: 'database-name',
      entities: [FormData],
      synchronize: false
    }),
    FormModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}