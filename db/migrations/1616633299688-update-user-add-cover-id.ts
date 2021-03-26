import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateUserAddCoverId1616633299688 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE users ADD cover_media integer ');
    await queryRunner.query(`ALTER TABLE users
      ADD CONSTRAINT FK_UserCover
      FOREIGN KEY (cover_media) REFERENCES media(id)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `users` DROP COLUMN `city`');
    await queryRunner.query(
      'ALTER TABLE `users` DROP FOREIGN KEY FK_UserCover',
    );
  }
}
