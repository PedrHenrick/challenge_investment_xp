import { DatabaseModel } from "../Models/database.model";

export class DatabaseService {
  async all() {
    const Database = new DatabaseModel();
    const allAssets = await Database.all();
    return allAssets;
  }
}