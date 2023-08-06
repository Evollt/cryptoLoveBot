import { Database } from "sqlite3";

export class UsersTable {
  static createTable(db: Database): void {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
      name varchar(150) UNIQUE,
      role varchar(150) DEFAULT 'user',
      userId varchar(150) NOT NULL UNIQUE,
      userName varchar(150) NOT NULL,
      status varchar(150),
      sumWork FLOAT default 0,
      teacherId varchar(150) default 0,
      procent INT default '60',
      createdAt BIGINT,
      ban TINYINT
    )`);
  }

  static dropTable(db: Database): void {
    db.run('DROP TABLE IF EXISTS users')
  }
}

//       id INT AUTO_INCREMENT PRIMARY KEY,