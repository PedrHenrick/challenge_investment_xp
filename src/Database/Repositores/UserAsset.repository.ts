import { AppDataSource } from "../data-source"
import { UserAsset } from "../Entities/UserAsset"

export const UserAssetRepository = AppDataSource.getRepository(UserAsset);
