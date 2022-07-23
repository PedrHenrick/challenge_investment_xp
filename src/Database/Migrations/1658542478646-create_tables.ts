import { MigrationInterface, QueryRunner } from "typeorm";

export class create_tables1658542478646 implements MigrationInterface {
    name = 'create_tables1658542478646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("client_code" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "balance" numeric NOT NULL DEFAULT '0', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_ba4251b9c1795115a73e9040116" PRIMARY KEY ("client_code"))`);
        await queryRunner.query(`CREATE TABLE "financial_assets" ("asset_code" SERIAL NOT NULL, "name" character varying NOT NULL, "unit_value" numeric NOT NULL, "amount_assets" integer NOT NULL, CONSTRAINT "UQ_91f3be094412baffe873fa6b7d1" UNIQUE ("name"), CONSTRAINT "PK_55a73f0a7f0f799e5ca56086de3" PRIMARY KEY ("asset_code"))`);
        await queryRunner.query(`CREATE TABLE "users_assets" ("id" SERIAL NOT NULL, "client_code" integer NOT NULL, "asset_code" integer NOT NULL, "amount_asset" integer NOT NULL, "unit_value" numeric NOT NULL, CONSTRAINT "PK_bf2be1f90194fe3278e99ca5232" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_assets"`);
        await queryRunner.query(`DROP TABLE "financial_assets"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
