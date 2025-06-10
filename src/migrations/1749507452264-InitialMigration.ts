import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1749507452264 implements MigrationInterface {
    name = 'InitialMigration1749507452264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "usuarioId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" ADD "postId" integer`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_a1af3288bb5edcdb4d4870a9273" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_cdc670193be6ca43f590dbabcee" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_cdc670193be6ca43f590dbabcee"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_a1af3288bb5edcdb4d4870a9273"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "postId"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}