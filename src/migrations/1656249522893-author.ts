import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class author1656249522893 implements MigrationInterface {
  private table = new Table({
    name: 'Authors',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
      },
      {
        name: 'Name',
        type: 'varchar(80)',
      },
      {
        name: 'description',
        type: 'varchar(255)',
        isNullable: true,
      },
      {
        name: 'nacionality',
        type: 'varchar(80)',
        isNullable: true,
      },
      {
        name: 'born',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'died',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'deletedAt',
        type: 'timestamp',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
