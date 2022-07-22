import { MigrationInterface, QueryRunner } from "typeorm";

export class create_tables_and_relations1658501384849 implements MigrationInterface {
    name = 'create_tables_and_relations1658501384849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_assets" ("client_code" SERIAL NOT NULL, "asset_code" SERIAL NOT NULL, CONSTRAINT "PK_8976bac0dc6c08e2a6618ac665b" PRIMARY KEY ("client_code", "asset_code"))`);
        await queryRunner.query(`CREATE TABLE "financial_assets" ("asset_code" SERIAL NOT NULL, "name" character varying NOT NULL, "value" numeric NOT NULL, "amount_assets" integer NOT NULL, CONSTRAINT "UQ_91f3be094412baffe873fa6b7d1" UNIQUE ("name"), CONSTRAINT "PK_55a73f0a7f0f799e5ca56086de3" PRIMARY KEY ("asset_code"))`);
        await queryRunner.query(`CREATE TABLE "users" ("client_code" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "balance" numeric NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" UNIQUE ("password"), CONSTRAINT "PK_ba4251b9c1795115a73e9040116" PRIMARY KEY ("client_code"))`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "client_code" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_assets_client_code_seq"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "asset_code" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_assets_asset_code_seq"`);
        await queryRunner.query(`CREATE INDEX "IDX_f5c14ca1844bbe4b5b9dc36d8b" ON "users_assets" ("client_code") `);
        await queryRunner.query(`CREATE INDEX "IDX_ebbbd7edc825f63fe51b9221f6" ON "users_assets" ("asset_code") `);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD CONSTRAINT "FK_f5c14ca1844bbe4b5b9dc36d8b5" FOREIGN KEY ("client_code") REFERENCES "users"("client_code") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD CONSTRAINT "FK_ebbbd7edc825f63fe51b9221f6d" FOREIGN KEY ("asset_code") REFERENCES "financial_assets"("asset_code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_assets" DROP CONSTRAINT "FK_ebbbd7edc825f63fe51b9221f6d"`);
        await queryRunner.query(`ALTER TABLE "users_assets" DROP CONSTRAINT "FK_f5c14ca1844bbe4b5b9dc36d8b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ebbbd7edc825f63fe51b9221f6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f5c14ca1844bbe4b5b9dc36d8b"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_assets_asset_code_seq" OWNED BY "users_assets"."asset_code"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "asset_code" SET DEFAULT nextval('"users_assets_asset_code_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_assets_client_code_seq" OWNED BY "users_assets"."client_code"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "client_code" SET DEFAULT nextval('"users_assets_client_code_seq"')`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "financial_assets"`);
        await queryRunner.query(`DROP TABLE "users_assets"`);
    }

}
