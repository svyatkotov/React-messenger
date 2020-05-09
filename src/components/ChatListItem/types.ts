import { TChatId } from "../Messenger/types";

export interface IChatListItem {
  chatId: TChatId;
  name: string;
  date: Date;
  lastMessageAuthor: string | null;
  lastMessagePreview: string | null;
}
