import { Bot, CallbackQueryContext } from "grammy";
import { MyContext } from "../Types/ConversationTypes";

export class Callback {
  constructor(private bot: Bot<MyContext>, private callbackQuery: CallbackQueryContext<MyContext>) { }
  // async sendRequest() {
  //   await this.;
  // }
}