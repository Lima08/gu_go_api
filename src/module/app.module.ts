import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/database/typeorm/ormconfig';
import { BooksModule } from './books.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BooksModule],
})
export class AppModule {}
