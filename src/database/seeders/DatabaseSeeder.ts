import { Database } from "../Database";
import { UserFactory } from "../factory/UserFactory";

export class DatabaseSeeder extends Database {

  constructor() {
    super()
  }

  seed() {
    UserFactory.createUser(
      this.db,
      {
        name: 'Evollt',
        role: 'admin',
        userId: '1055283224',
        userName: 'Evollt',
        status: 'worker',
        sumWork: 340000.0,
        teacherId: '0',
        procent: 100,
        createdAt: 4,
        ban: false,
      }
    )
  }
}