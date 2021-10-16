import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createFollows1616638297647 implements MigrationInterface {
  private table = new Table({
    name: 'follows',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'followed_id',
        type: 'varchar',
        length: '255',
        isNullable: false,
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

  private foreignUserKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['uid'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  private foreignOtherUserKey = new TableForeignKey({
    columnNames: ['followed_id'],
    referencedColumnNames: ['uid'],
    referencedTableName: 'users',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKeys(this.table, [
      this.foreignUserKey,
      this.foreignOtherUserKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
