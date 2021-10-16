import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createImageEntry1616817674865 implements MigrationInterface {
  private table = new Table({
    name: 'image_entry',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'media_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'entry_id',
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
        name: 'location',
        type: 'varchar',
        length: '255',
        isNullable: false,
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

  private foreignMediaKey = new TableForeignKey({
    columnNames: ['media_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'media',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  private foreigEntryKey = new TableForeignKey({
    columnNames: ['entry_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'entries',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(this.table, this.foreignMediaKey);
    await queryRunner.createForeignKey(this.table, this.foreigEntryKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
