import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createTourTags1616820613487 implements MigrationInterface {
  private table = new Table({
    name: 'tour_tags',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'tag_id',
        type: 'varchar',
        length: '50',
        isNullable: false,
      },
      {
        name: 'tour_id',
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
    columnNames: ['tag_id'],
    referencedColumnNames: ['name'],
    referencedTableName: 'tags',
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
