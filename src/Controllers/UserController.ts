import { Controller } from "../Base/Controller";
import { Bot, CallbackQueryContext, Context } from "grammy";
import { MyContext, MyConversation } from "../Types/ConversationTypes";

export class UserController extends Controller {
  private description: string | undefined = ''
  private forumLink: string | undefined = ''
  private workTime: string | undefined = ''
  constructor() { super() }

  async createUser(conversation: MyConversation, ctx: MyContext) {

    await ctx.reply(
      'Ты решил подать заявку? Отлично, начнем с твоего опыта. Напиши нам о нем!'
    )
    const { message: description } = await conversation.wait();
    // записываем опыт
    // this.description = description?.text

    // @ts-ignore
    await ctx.reply('🔗 Хорошо, теперь скинь свою ссылку на профиль форума с которого ты пришёл!');
    const { message: forumLink } = await conversation.wait();
    // записываем ссылку
    // this.forumLink = await forumLink?.text

    // @ts-ignore
    await ctx.reply('⏱ Записал! сколько времени готов уделять работе?');
    const { message: workTime } = await conversation.wait();
    // записываем ссылку
    // this.workTime = await workTime?.text

    await ctx.reply(`
    🏮 Анкета:\n\n👨🏻 Пользователь: ${ctx.update.message?.from.id} ${ctx.update.message?.from.username}\n\n🔗 Ссылка: ${forumLink?.text}\n\n🧠 Опыт: ${description?.text}\n\n⌚️ Время работы: ${workTime?.text}\n\n⚠️ Пожалуйста оформите анкету как можно подробнее, это повлияет на получение повышенной привелегии. Например если вы указали ваш профиль и там будет привязан ваш телеграм это даст высокий шанс на попадание в основу.
    `)
  }

}