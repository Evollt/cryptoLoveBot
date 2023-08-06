import { Controller } from "../Base/Controller";
import { Keyboard } from "../Base/Keyboard";
import { MyContext, MyConversation } from "../Types/ConversationTypes";

export class UserController extends Controller {
  constructor() { super() }

  async createUser(conversation: MyConversation, ctx: MyContext) {

    await ctx.reply(
      'Ты решил подать заявку? Отлично, начнем с твоего опыта. Напиши нам о нем!'
    )
    // записываем опыт
    const { message: description } = await conversation.wait();

    // @ts-ignore
    await ctx.reply('🔗 Хорошо, теперь скинь свою ссылку на профиль форума с которого ты пришёл!');
    // записываем ссылку
    const { message: forumLink } = await conversation.wait();

    // @ts-ignore
    await ctx.reply('⏱ Записал! сколько времени готов уделять работе?');
    // записываем ссылку
    const { message: workTime } = await conversation.wait();

    // Выводим анкету
    await ctx.reply(
      `🏮 Анкета:\n\n👨🏻 Пользователь: ${ctx.update.message?.from.id} ${ctx.update.message?.from.username}\n\n🔗 Ссылка: ${forumLink?.text}\n\n🧠 Опыт: ${description?.text}\n\n⌚️ Время работы: ${workTime?.text}\n\n⚠️ Пожалуйста оформите анкету как можно подробнее, это повлияет на получение повышенной привелегии. Например если вы указали ваш профиль и там будет привязан ваш телеграм это даст высокий шанс на попадание в основу.`,
      {
        reply_markup: {
          inline_keyboard: Keyboard.chooseAnket()
        }
      }
    )
  }
}