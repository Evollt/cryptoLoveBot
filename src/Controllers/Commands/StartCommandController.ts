import { Controller } from "../../Base/Controller";
import { AuthMiddleware } from "../../Middlewares/AuthMiddleware";
import path from "path";
import TelegramBot from "node-telegram-bot-api";
import { Keyboards } from "../../Base/Keyboard";
import { Bot, CommandContext, Context, InlineKeyboard, InputFile } from "grammy";
import { MyContext } from "../../Types/ConversationTypes";

export class StartCommandController extends Controller {
  constructor(private bot: Bot<MyContext>, private ctx: CommandContext<Context>) { super() }

  async start() { new AuthMiddleware(this.bot, this.ctx).checkAuth() }

  // Если полльзователя есть в бд
  userAlreadyAuthorized() {
    this.bot.api.sendPhoto(
      this.ctx.chat.id,
      new InputFile(path.resolve(__dirname, '../../../assets/img/logo.jpg')),
      {
        caption: '🏮 Нам конечно приятно что вы хотите подать заявку еще раз, но мы вас предупреждали'
      }
    )
  }

  // Если полльзователя нет в бд
  userNotAuthorized() {
    this.bot.api.sendPhoto(
      this.ctx.chat.id,
      new InputFile(path.resolve(__dirname, '../../../assets/img/logo.jpg')),
      {
        caption: '🏮 Тебя приветсвует команда CryptoLove!\n\nПомни, что заявку можно подавать 1 раз, составь её корректно!',
        reply_markup: {
          inline_keyboard: Keyboards.sendRequest()
        }
      }
    )


  }
}


// // для зарегистрированных пользователей
// userAlreadyAuthorized() {
//   this.bot.sendPhoto(
//   )
// }

// // для новых пользователей
// userNotAuthorized() {
//   this.bot.sendPhoto(
//     this.msg.chat.id,
//     path.resolve(__dirname, '../../../assets/img/logo.jpg'),
//     {
//     }
//   )
// }