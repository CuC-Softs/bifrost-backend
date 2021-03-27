import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1615732030485 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'uid',
        type: 'varchar',
        isPrimary: true,
        length: '255',
        isUnique: true,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'is_public',
        type: 'boolean',
        isNullable: false,
        default: true,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
