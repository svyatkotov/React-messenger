import React, { Component } from "react";
import { IMessage } from "./types";
import "./Message.css";

export default class Message extends Component<IMessage> {
  render() {
    return (
      <li className="message">
        <div className="message__info">
          <div className="message__author">{this.props.author}</div>
          <div className="message__date">{this.props.date.toLocaleDateString()}</div>
        </div>
        <div className="message__text">{this.props.text}</div>
      </li>
    );
  }
}