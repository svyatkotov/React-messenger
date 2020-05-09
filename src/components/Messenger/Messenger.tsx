import React, { Component } from "react";
import { IState, TChatId, THandleClick } from "./types";
import { IMessage } from "../Message/types";
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
        const messages: IMessage[] = this.getMessages(item.chatId);
        const lastMessage: IMessage = messages[messages.length - 1];

        if (lastMessage) {
          item.lastMessageAuthor = lastMessage.author;
          item.lastMessagePreview = lastMessage.text;
        }
      }

      return item;
    });
    return chatListItems.sort((aDate, bDate) => bDate.date.getTime() - aDate.date.getTime());
  };
  
  private getMessages = (chatId: TChatId): IMessage[] => {
    return messages
      .filter((message) => message.chatId === chatId)
      .sort((aDate, bDate) => aDate.date.getTime() - bDate.date.getTime());
  };

  componentDidMount() {
    this.setState({
      chatListItems: this.getChatListItems(chatListItems)
    });
  }

  private handleClick: THandleClick = (chatId) => {
    const messages: IMessage[] = this.getMessages(chatId);
    return () => {
      this.setState({
        activeChatId: chatId,
        messages: messages
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
