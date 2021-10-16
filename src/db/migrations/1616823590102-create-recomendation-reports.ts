import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createRecomendationReports1616823590102
  implements MigrationInterface {
  private table = new Table({
    name: 'recomendation_reports',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'recomendation_id',
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

  private foreignRecomendationKey = new TableForeignKey({
    columnNames: ['recomendation_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'recomendations',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  private foreignEntryKey = new TableForeignKey({
    columnNames: ['report_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'reports',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(
      this.table,
      this.foreignRecomendationKey,
    );
    await queryRunner.createForeignKey(this.table, this.foreignEntryKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
