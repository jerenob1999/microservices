import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1734284436433 implements MigrationInterface {
    name = 'Migration1734284436433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "form" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "form" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "form" ADD "title" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "user_pkey"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "form" DROP CONSTRAINT "form_pkey"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "form" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "form" ADD CONSTRAINT "PK_8f72b95aa2f8ba82cf95dc7579e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "form" ADD CONSTRAINT "FK_6555e3b729b4c23e71726286e7a" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" DROP CONSTRAINT "FK_6555e3b729b4c23e71726286e7a"`);
        await queryRunner.query(`ALTER TABLE "form" DROP CONSTRAINT "PK_8f72b95aa2f8ba82cf95dc7579e"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "form" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "form" ADD CONSTRAINT "form_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "form" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "form" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "form" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
