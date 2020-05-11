import React from "react";
import { IMessageListItem } from "./types";
import "./MessageListItem.css";

export const MessageListItem: React.FC<IMessageListItem> = ({
  time,
  author,
  text
}) => {
  return (
    <li className="message">
      <div className="message__info">
        <div className="message__author">{author}</div>
        <div className="message__time">
          {`${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""}${time.getMinutes()}:${time.getSeconds() < 10 ? "0" : ""}${time.getSeconds()}`}
        </div>
      </div>
      <div className="message__text">{text}</div>
    </li>
  );
}
