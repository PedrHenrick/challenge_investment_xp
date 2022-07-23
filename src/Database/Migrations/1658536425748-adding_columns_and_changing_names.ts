import { MigrationInterface, QueryRunner } from "typeorm";

export class adding_columns_and_changing_names1658536425748 implements MigrationInterface {
    name = 'adding_columns_and_changing_names1658536425748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_assets" DROP CONSTRAINT "FK_ebbbd7edc825f63fe51b9221f6d"`);
        await queryRunner.query(`ALTER TABLE "users_assets" DROP CONSTRAINT "FK_f5c14ca1844bbe4b5b9dc36d8b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f5c14ca1844bbe4b5b9dc36d8b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ebbbd7edc825f63fe51b9221f6"`);
        await queryRunner.query(`ALTER TABLE "financial_assets" RENAME COLUMN "value" TO "unit_value"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD "amount_asset" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD "unit_value" numeric NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_assets_client_code_seq" OWNED BY "users_assets"."client_code"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "client_code" SET DEFAULT nextval('"users_assets_client_code_seq"')`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_assets_asset_code_seq" OWNED BY "users_assets"."asset_code"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "asset_code" SET DEFAULT nextval('"users_assets_asset_code_seq"')`);
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
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "asset_code" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_assets_asset_code_seq"`);
        await queryRunner.query(`ALTER TABLE "users_assets" ALTER COLUMN "client_code" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_assets_client_code_seq"`);
        await queryRunner.query(`ALTER TABLE "users_assets" DROP COLUMN "unit_value"`);
        await queryRunner.query(`ALTER TABLE "users_assets" DROP COLUMN "amount_asset"`);
        await queryRunner.query(`ALTER TABLE "financial_assets" RENAME COLUMN "unit_value" TO "value"`);
        await queryRunner.query(`CREATE INDEX "IDX_ebbbd7edc825f63fe51b9221f6" ON "users_assets" ("asset_code") `);
        await queryRunner.query(`CREATE INDEX "IDX_f5c14ca1844bbe4b5b9dc36d8b" ON "users_assets" ("client_code") `);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD CONSTRAINT "FK_f5c14ca1844bbe4b5b9dc36d8b5" FOREIGN KEY ("client_code") REFERENCES "users"("client_code") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_assets" ADD CONSTRAINT "FK_ebbbd7edc825f63fe51b9221f6d" FOREIGN KEY ("asset_code") REFERENCES "financial_assets"("asset_code") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
