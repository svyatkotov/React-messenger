import { TChatId } from "../Messenger/types";

export interface IChatListItem {
  chatId: TChatId;
  name: string;
  lastMessageTime: Date;
  lastMessageAuthor?: string;
  lastMessagePreview?: string;
}
