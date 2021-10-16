import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createLogbookComments1616811330892 implements MigrationInterface {
  private table = new Table({
    name: 'log_book_comments',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'log_book_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'comment_id',
        type: 'INTEGER',
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

  private foreignLogBookrKey = new TableForeignKey({
    columnNames: ['log_book_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'log_books',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  private foreignCommentKey = new TableForeignKey({
    columnNames: ['comment_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'comments',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(this.table, this.foreignLogBookrKey);
    await queryRunner.createForeignKey(this.table, this.foreignCommentKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
