import 'dotenv/config';

import { join } from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE,
  migrations: [join(__dirname, '..', '..', 'migrations', '*.ts')],
});
