import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createCommentReports1616820731249 implements MigrationInterface {
  private table = new Table({
    name: 'comment_reports',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'report_id',
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

  private foreignReportKey = new TableForeignKey({
    columnNames: ['report_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'reports',
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
    await queryRunner.createForeignKey(this.table, this.foreignReportKey);
    await queryRunner.createForeignKey(this.table, this.foreignCommentKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
