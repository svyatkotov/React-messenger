import React from "react";
import { IMessageList } from "./types";
import { IMessageListItem } from "../MessageListItem/types";
import { MessageListItem } from "../MessageListItem";
import "./MessageList.css";

export const MessageList: React.FC<IMessageList> = ({messages}) => {
  return (
    <ul className="message-list">
      {messages.map(({messageId, time, author, text}: IMessageListItem) => {
        return (
          <MessageListItem
            key={messageId.toString()}
            messageId={messageId}
            time={time}
            author={author}
            text={text}
          />
        );
      })}
    </ul>
  );
}