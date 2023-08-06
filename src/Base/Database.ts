import path from "path";
import sqlite3 from "sqlite3";
import { UsersTable } from "../database/migrations/UsersTable";
import { TeachersTable } from "../database/migrations/TeachersTable";
import { FilialsTable } from "../database/migrations/FilialsTable";

export class Database {
  protected db: sqlite3.Database

  constructor(databasePath = path.resolve(__dirname, '../../database.db')) {
    this.db = new sqlite3.Database(databasePath)
  }

  migrateTables() {
    UsersTable.createTable(this.db)
    TeachersTable.createTable(this.db)
    FilialsTable.createTable(this.db)


    return 'Все таблицы успешно созданы'
  }

  dropTables() {
    UsersTable.dropTable(this.db)
    TeachersTable.dropTable(this.db)
    FilialsTable.dropTable(this.db)

    return 'Все таблицы успешно удалены'
  }
}