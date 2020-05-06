import React, { Component } from "react";
import { IChatListItem } from "./types";
import icon from '../../assets/images/icon.svg';
import "./ChatListItem.css";

export default class ChatListItem extends Component<IChatListItem> {
  render() {
    return (
      <li className="chat-list-item">
        <div className="chat-list-item__icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="chat-list-item__info">
          <div className="chat-list-item__title">
            <span className="chat-list-item__name">{this.props.name}</span>
            <span className="chat-list-item__date">{this.props.date.toLocaleDateString()}</span>
          </div>
          <div className="chat-list-item__content">
            <span className="chat-list-item__author">{`${this.props.author}:`}</span>
            <span className="chat-list-item__message">{this.props.message}</span>
          </div>
        </div>
      </li>
    );
  }
}