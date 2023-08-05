import { Database } from "sqlite3";

export class TeachersTable {
  static createTable(db: Database) {
    db.run(`CREATE TABLE IF NOT EXISTS teachers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name varchar(150),
      img varchar(255),
      description TEXT NOT NULL,
      userId varchar(150),
      isInvite INT,
      visibility INT
    )`);
  }

  static dropTable(db: Database) {
    db.run('DROP TABLE IF EXISTS teachers')
  }
}