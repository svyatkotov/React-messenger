import { TChatId, THandleClick } from "../Messenger/types";

export interface IChatListItem {
  chatId: TChatId;
  name: string;
  date: Date;
  lastMessageAuthor: string | null;
  lastMessagePreview: string | null;
}

export interface IProps extends IChatListItem {
  isActive: boolean;
  handleClick: THandleClick;
}
