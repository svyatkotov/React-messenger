import React, { Component } from "react";
import { IProps } from "./types";
import icon from '../../assets/images/icon.svg';
import "./ChatListItem.css";

export default class ChatListItem extends Component<IProps> {
  private className: string[] = ["chat-list-item"];

  private pushClass = () => {
    if (this.props.isActive) {
      this.className.push("active");
      return this.className.join(" ");
    }

    return this.className[0];
  };

  render() {
    return (
      <li className={this.pushClass()} onClick={this.props.handleClick(this.props.chatId)}>
        <div className="chat-list-item__icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="chat-list-item__info">
          <div className="chat-list-item__title">
            <span className="chat-list-item__name">{this.props.name}</span>
            <span className="chat-list-item__date">{this.props.date.toLocaleDateString()}</span>
          </div>
          <div className="chat-list-item__content">
            <span className="chat-list-item__author">{`${this.props.lastMessageAuthor}:`}</span>
            <span className="chat-list-item__message">{this.props.lastMessagePreview}</span>
          </div>
        </div>
      </li>
    );
  }
}