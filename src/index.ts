import TelegramBot from 'node-telegram-bot-api'
import { MessageController } from './Controllers/MessageController';
import 'dotenv/config'
import { Database } from './database/Database';
import { DatabaseSeeder } from './database/seeders/DatabaseSeeder';

const bot = new TelegramBot(process.env.TOKEN || '', { polling: true });

const db = new Database()
const seed = new DatabaseSeeder()
db.migrateTables()
seed.seed()

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  const newMessage: MessageController = new MessageController('Привет')

  bot.sendMessage(chatId, newMessage.getMessage());
});