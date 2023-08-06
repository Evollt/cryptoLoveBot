import TelegramBot from "node-telegram-bot-api";

export class Keyboards {
  constructor() { }

  static sendRequest() {
    return [
      [
        {
          text: 'Подать заявку',
          callback_data: 'send_request'
        }
      ],
    ]
  }
}