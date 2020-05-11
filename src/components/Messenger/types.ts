import { IChatListItem } from "../ChatListItem/types";
import { IMessageListItem } from "../MessageListItem/types";

export interface IState {
  activeChatId: number | null;
  chatListItems: IChatListItem[];
  messages: IMessageListItem[];
}

export interface IMessages {
  chatId: TChatId;
  messageListItems: IMessageListItem[];
}

export type TChatId = number;

export type THandleClick = (chatId: TChatId) => () => void;