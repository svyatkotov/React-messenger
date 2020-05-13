import React from "react";
import { IMessageListItem } from "./types";
import icon from '../../assets/images/icon.svg';
import "./MessageListItem.css";

export const MessageListItem: React.FC<IMessageListItem> = ({
  time,
  author,
  text
}) => {
  return (
    <li className="message-list-item">
      <div className="message-list-item__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="message-list-item__info">
        <div className="message-list-item__title">
          <div className="message-list-item__author">{author}</div>
          <div className="message-list-item__time">
            {`${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""}${time.getMinutes()}`}
          </div>
        </div>
        <div className="message-list-item__content">{text}</div>
      </div>
    </li>
  );
}
