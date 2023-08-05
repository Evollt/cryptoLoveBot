import { MessageInterface } from "../Interfaces/MessageInterface";
import { GetMessage } from "../Services/GetMessage";

export class MessageController implements MessageInterface {
  public constructor(
    private message: string | number
  ) { }

  public getMessage() {
    return GetMessage.getMessage(this.message)
  }
}