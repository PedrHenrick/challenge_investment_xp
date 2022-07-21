import { AppDataSource } from "../data-source"
import { FinanceAsset } from "../Entities/FinanceAsset"

export const FinanceAssetRepository = AppDataSource.getRepository(FinanceAsset);
