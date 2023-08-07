import 'dotenv/config'
import { Bot, Context, session } from "grammy";
import { StartCommandController } from "./Controllers/Commands/StartCommandController";
import { Callback } from "./Base/Callback";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";
import { MyContext } from './Types/ConversationTypes';
import { UserController } from './Controllers/UserController';
import { Keyboard } from './Base/Keyboard';

// инициализация бота
const bot: Bot<MyContext> = new Bot<MyContext>(process.env.TOKEN || '');

// выставляем меню команд
bot.api.setMyCommands([
  { command: '/start', description: 'Начальное приветствие' },
  { command: '/info', description: 'Информация о нас' }
])

// дополнительные плагины
// bot.use(conversations());
// не Удалять!!! Нужно для диалогов
// bot.use(createConversation(new UserController().createUser));


//await ctx.conversation.enter("createUser");
// команды и слушатели событий
bot.command("start", (ctx) => new StartCommandController(bot, ctx).start());
bot.callbackQuery('send_request', async ctx => { })
bot.callbackQuery('give_anket', async ctx => {
  console.log('user saved');
  console.log(Keyboard.description);

})


// запуск бота
bot.start();