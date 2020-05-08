import React, { Component } from "react";
import { IState, TChatId, THandleClick } from "./types";
import { IMessage } from "../Message/types";
import { IChatListItem } from "../ChatListItem/types";
import ChatList from "../ChatList";
import MessageList from "../MessageList";
import { chatListItems, messages } from "./messengerData";
import "./Messenger.css";

const getChatListItems = (chatListItems: IChatListItem[]): IChatListItem[] => {
  const sortByDate = (a: IChatListItem, b: IChatListItem): number => {
    const aDate = a.date.getTime();
    const bDate = b.date.getTime();
    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
  };

  chatListItems.map((item: IChatListItem): IChatListItem => {
    const messages: IMessage[] = getMessages(item.chatId);
    const lastMessage: IMessage = messages[messages.length - 1];
    
    if (lastMessage) {
      item.lastMessageAuthor = lastMessage.author;
      item.lastMessagePreview = lastMessage.text;
    }

    return item;
  });

  return chatListItems.sort(sortByDate);
};

const getMessages = (chatId: TChatId): IMessage[] => {
  const sortByDate = (a: IMessage, b: IMessage): number => {
    const aDate = a.date.getTime();
    const bDate = b.date.getTime();
    return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
  };

  const chatMessages: IMessage[] = messages
    .filter((message) => message.chatId === chatId)
    .sort(sortByDate);

  return chatMessages;
};

export default class Messenger extends Component {
  readonly state: IState = {
    activeChatId: null,
    chatListItems: [],
    messages: []
  };
  
  componentDidMount() {
    this.setState({
      chatListItems: getChatListItems(chatListItems)
    });
  }

  private handleClick: THandleClick = (chatId) => {
    const messages: IMessage[] = getMessages(chatId);
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
