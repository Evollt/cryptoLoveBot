import TelegramBot from 'node-telegram-bot-api'
import { MessageController } from './Controllers/MessageController';
import 'dotenv/config'

const bot = new TelegramBot(process.env.TOKEN || '', { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const newMessage: MessageController = new MessageController('Привет')

  bot.sendMessage(chatId, newMessage.getMessage());
});