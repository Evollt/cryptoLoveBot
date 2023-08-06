import TelegramBot from "node-telegram-bot-api";

export class Keyboard {
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

  static chooseAnket() {
    return [
      [
        {
          text: 'Попробовать снова',
          callback_data: 'send_request'
        },
        {
          text: 'Продолжить',
          callback_data: 'give_anket'
        }
      ],
    ]
  }
}