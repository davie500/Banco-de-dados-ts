import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1748902679631 implements MigrationInterface {
    name = 'InitialMigration1748902679631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "usuarioId" integer`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_c9d8a1e413142a85d24fe8956ac" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_c9d8a1e413142a85d24fe8956ac"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "usuarioId"`);
    }

}