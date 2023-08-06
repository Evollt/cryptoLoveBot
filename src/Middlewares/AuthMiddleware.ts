import { Middleware } from "../Base/Middleware";
import { User } from "../Models/User";
import { StartCommandController } from "../Controllers/Commands/StartCommandController";
import TelegramBot from "node-telegram-bot-api";
import { Bot, CommandContext, Context } from "grammy";
import { MyContext } from "../Types/ConversationTypes";

export class AuthMiddleware extends Middleware {
  constructor(private bot: Bot<MyContext>, private ctx: CommandContext<Context>) { super() }

  // Прогоняем через посредника, чтобы понимать куда направить пользователя
  async checkAuth() {
    const user_data = await new User().getUser(this.ctx.update.message?.from.id)
      .then(data => data)
      .catch(console.log)

    // Проверяем зарегистирован ли пользователь
    const isAuth = await new Promise((resolve) => {
      if (user_data) {
        resolve(true)
      }
      resolve(false)
    }).then(data => data)

    // Перенаправляем пользователя
    if (isAuth == false) new StartCommandController(this.bot, this.ctx).userNotAuthorized()
    else if (isAuth == true) new StartCommandController(this.bot, this.ctx).userAlreadyAuthorized()
  }
}