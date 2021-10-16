import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createRecomendationVote1616824452111
  implements MigrationInterface {
  private table = new Table({
    name: 'recomendation_votes',
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
        name: 'vote_id',
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
    columnNames: ['vote_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'votes',
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
