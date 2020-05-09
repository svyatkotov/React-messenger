import React from "react";
import { IChatListItem } from "./types";
import { THandleClick } from "../Messenger/types";
import icon from '../../assets/images/icon.svg';
import "./ChatListItem.css";

interface IProps extends IChatListItem {
  isActive: boolean;
  handleClick: THandleClick;
}

export const ChatListItem: React.FC<IProps> = ({
  chatId,
  name,
  date,
  lastMessageAuthor,
  lastMessagePreview,
  isActive,
  handleClick
}) => {
  return (
    <li className={`chat-list-item ${isActive && "active"}`} onClick={handleClick(chatId)}>
      <div className="chat-list-item__icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="chat-list-item__info">
        <div className="chat-list-item__title">
          <span className="chat-list-item__name">{name}</span>
          <span className="chat-list-item__date">{date.toLocaleDateString()}</span>
        </div>
        <div className="chat-list-item__content">
          <span className="chat-list-item__author">{`${lastMessageAuthor}:`}</span>
          <span className="chat-list-item__message">{lastMessagePreview}</span>
        </div>
      </div>
    </li>
  );
}
