import React from "react";
import { IChatList } from "./types";
import { IChatListItem } from "../ChatListItem/types";
import { ChatListItem } from "../ChatListItem";
import "./ChatList.css";

export const ChatList: React.FC<IChatList> = ({chatListItems, activeChatId, handleClick}) => {
  return (
    <ul className="chat-list">
      {chatListItems.map(({chatId, name, date, lastMessageAuthor, lastMessagePreview}: IChatListItem) => {
        return (
          <ChatListItem 
            key={chatId.toString()}
            chatId={chatId}
            name={name}
            date={date}
            lastMessageAuthor={lastMessageAuthor}
            lastMessagePreview={lastMessagePreview}
            isActive={activeChatId === chatId}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};