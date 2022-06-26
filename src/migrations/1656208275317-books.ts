import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class books1656208275317 implements MigrationInterface {
  private table = new Table({
    name: 'books',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'title',
        type: 'varchar(80)',
      },
      {
        name: 'description',
        type: 'varchar(255)',
        isNullable: true,
      },
      {
        name: 'authorId',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'ISBN',
        type: 'varchar(30)',
        isNullable: true,
        isUnique: true,
      },
      {
        name: 'publisherId',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'releaseYear',
        type: 'int',
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
        isNullable: true,
      },
    ],
    // TODO: Adicionar as foreingKeys
    // foreignKeys: [
    //   {
    //     name: 'providerUser',
    //     referencedTableName: 'profiles',
    //     referencedColumnNames: ['id'],
    //     columnNames: ['profile_id'],
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE',
    //   },
    // ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
