import { IChatListItem } from "../ChatListItem/types";
import { TChatId, THandleClick } from "../Messenger/types";

export interface IChatList {
  chatListItems: IChatListItem[];
  activeChatId: TChatId | null;
  handleClick: THandleClick;
}