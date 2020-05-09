import React from "react";
import { IMessageList } from "./types";
import { IMessage } from "../Message/types";
import { Message } from "../Message";
import "./MessageList.css";

export const MessageList: React.FC<IMessageList> = ({messages}) => {
  return (
    <ul className="message-list">
      {messages.map(({chatId, messageId, date, author, text}: IMessage) => {
        return (
          <Message
            key={messageId.toString()}
            chatId={chatId}
            messageId={messageId}
            date={date}
            author={author}
            text={text}
          />
        );
      })}
    </ul>
  );
}