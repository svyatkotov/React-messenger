import React, { Component } from "react";
import { IState, TChatId, THandleClick } from "./types";
import { IMessageListItem } from "../MessageListItem/types";
import { IChatListItem } from "../ChatListItem/types";
import { ChatList } from "../ChatList";
import { MessageList } from "../MessageList";
import { chatListItems, messages } from "./messengerData";
import "./Messenger.css";

export class Messenger extends Component {
  readonly state: IState = {
    activeChatId: null,
    chatListItems: [],
    messages: []
  };

  private getChatListItems = (chatListItems: IChatListItem[]): IChatListItem[] => {
    chatListItems.map((item: IChatListItem): IChatListItem => {
      if (item.chatId) {
        const messages: IMessageListItem[] = this.getMessages(item.chatId);
        const lastMessage: IMessageListItem = messages[messages.length - 1];

        if (lastMessage) {
          item.lastMessageTime = lastMessage.time;
          item.lastMessageAuthor = lastMessage.author;
          item.lastMessagePreview = lastMessage.text;
        }
      }

      return item;
    });
    return chatListItems.sort((aDate, bDate) => bDate.lastMessageTime.getTime() - aDate.lastMessageTime.getTime());
  };
  
  private getMessages = (chatId: TChatId): IMessageListItem[] => {
    return messages[chatId - 1].messageListItems
      .sort((aDate, bDate) => aDate.time.getTime() - bDate.time.getTime());
  };

  componentDidMount() {
    this.setState({
      chatListItems: this.getChatListItems(chatListItems)
    });
  }

  private handleClick: THandleClick = (chatId) => {
    return () => {
      this.setState({
        activeChatId: chatId,
        messages: this.getMessages(chatId)
      });
    };
  };

  render() {
    return (
      <div className="messenger">
        <ChatList 
          chatListItems={this.state.chatListItems}
          activeChatId={this.state.activeChatId}
          handleClick={this.handleClick}
        />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
