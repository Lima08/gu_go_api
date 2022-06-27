import 'dotenv/config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Book } from 'src/models/entities/book.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: process.env.DATABASE,
  migrations: [join(__dirname, '..', '..', 'migrations', '*.ts')],
  entities: [Book],
  // synchronize: true,
  // autoLoadEntities: true,
};
