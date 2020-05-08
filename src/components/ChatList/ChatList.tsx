import React, { Component } from "react";
import { IChatList } from "./types";
import { IChatListItem } from "../ChatListItem/types";
import ChatListItem from "../ChatListItem";
import "./ChatList.css";

export default class ChatList extends Component<IChatList> {
  render() {
    return (
      <ul className="chat-list">
        {this.props.chatListItems.map((item: IChatListItem) => {
          return (
            <ChatListItem 
              key={item.chatId.toString()}
              {...item}
              isActive={this.props.activeChatId === item.chatId}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </ul>
    );
  }
}