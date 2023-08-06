import { Model } from "../Base/Model";
import { UserTableType } from "../Types/UserTableType";

export class User extends Model {
  constructor() {
    super()
  }
  createNewUser() {
    console.log(this.db);
  }

  async getUser(userid: number | undefined) {
    return new Promise((resolve, reject) => {
      this.db.get("SELECT * FROM users WHERE userId=?", userid, (err, row: UserTableType) => {
        if (err) return reject(err)
        resolve(row)
      });
    })
  }
}