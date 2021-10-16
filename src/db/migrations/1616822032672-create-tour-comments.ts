import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTourComments1616822032672 implements MigrationInterface {
  private table = new Table({
    name: 'tour_comments',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'tour_id',
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

  private foreignTourKey = new TableForeignKey({
    columnNames: ['tour_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'tours',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  private foreignEntryKey = new TableForeignKey({
    columnNames: ['comment_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'comments',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(this.table, this.foreignTourKey);
    await queryRunner.createForeignKey(this.table, this.foreignEntryKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
