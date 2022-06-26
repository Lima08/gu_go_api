import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Book } from 'src/models/entities/book.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  database: process.env.DATABASE,
  type: 'sqlite',
  entities: [Book],
  migrations: [join(__dirname, 'src', 'migrations', '*.ts')],
  // synchronize: true,
  // autoLoadEntities: true,
};
