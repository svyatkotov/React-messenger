import React, { Component } from "react";
import { IChatList } from "./types";
import { IChatListItem } from "../ChatListItem/types";
import ChatListItem from "../ChatListItem";
import "./ChatList.css";

export default class ChatList extends Component<IChatList> {
  sortedChatList: IChatListItem[] = this.props.chatListItems.sort((a: IChatListItem, b: IChatListItem) =>
      a.lastMessagePreview && b.lastMessagePreview ? b.date.getTime() - a.date.getTime() : 1
  );

  render() {
    return (
      <ul className="chat-list">
        {this.sortedChatList.map((item: IChatListItem) => {
          return (
            <ChatListItem 
              key={item.chatId.toString()}
              {...item}
            />  
          );
        })}
      </ul>
    );
  }
}