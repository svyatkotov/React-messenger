import React from "react";
import { IMessage } from "./types";
import "./Message.css";

export const Message: React.FC<IMessage> = ({
  date,
  author,
  text
}) => {
  return (
    <li className="message">
      <div className="message__info">
        <div className="message__author">{author}</div>
        <div className="message__date">{date.toLocaleDateString()}</div>
      </div>
      <div className="message__text">{text}</div>
    </li>
  );
}
