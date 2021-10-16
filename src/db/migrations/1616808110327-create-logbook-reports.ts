import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createLogbookReports1616808110327 implements MigrationInterface {
  private table = new Table({
    name: 'log_book_reports',
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
        name: 'report_id',
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
  private foreignReportKey = new TableForeignKey({
    columnNames: ['report_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'reports',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(this.table, this.foreignLogBookrKey);
    await queryRunner.createForeignKey(this.table, this.foreignReportKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
