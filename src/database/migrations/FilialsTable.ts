import { Database } from "sqlite3";

export class FilialsTable {
  static createTable(db: Database) {
    db.run(`CREATE TABLE IF NOT EXISTS filials (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name varchar(150),
      description TEXT,
      limitBalance FLOAT default 0,
      userId varchar(150),
      chatId varchar(150),
      procent INT
      ownerId varchar(150),
      img varchar(255),
      ownerProcent INT
      visibility INT
    )`);
  }

  static dropTable(db: Database) {
    db.run('DROP TABLE IF EXISTS filials')
  }
}