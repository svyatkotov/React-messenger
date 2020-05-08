import { IChatListItem } from "../ChatListItem/types";
import { IMessage } from "../Message/types";

export interface IState {
  activeChatId: number | null;
  chatListItems: IChatListItem[];
  messages: IMessage[];
}

export type TChatId = number;

export type THandleClick = (chatId: TChatId) => () => void;