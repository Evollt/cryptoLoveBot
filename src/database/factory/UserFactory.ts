import { Database } from "sqlite3";
import { UserTableType } from "../../Types/UserTableType";

export class UserFactory {
  static createUser(db: Database, user: UserTableType): void {
    db.run(`INSERT INTO users (
      name,
      role,
      userId,
      userName,
      status,
      sumWork,
      teacherId,
      procent,
      createdAt,
      ban
    ) VALUES (
        '${user.name}',
        '${user.role}',
        '${user.userId}',
        '${user.userName}',
        '${user.status}',
        ${user.sumWork},
        '${user.teacherId}',
        ${user.procent},
        ${user.createdAt},
        ${user.ban}
    )`)
  }
}