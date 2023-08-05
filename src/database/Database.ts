import path from "path";
import sqlite3 from "sqlite3";
import { UsersTable } from "./migrations/UsersTable";
import { TeachersTable } from "./migrations/TeachersTable";
import { FilialsTable } from "./migrations/FilialsTable";

export class Database {
  protected db: sqlite3.Database

  constructor(databasePath = path.resolve(__dirname, 'database.db')) {
    this.db = new sqlite3.Database(databasePath)
  }

  migrateTables() {
    UsersTable.createTable(this.db)
    TeachersTable.createTable(this.db)
    FilialsTable.createTable(this.db)
  }

  dropTables() {
    UsersTable.dropTable(this.db)
    TeachersTable.dropTable(this.db)
    FilialsTable.dropTable(this.db)
  }
}