import React, { Component } from "react";
import { IMessageList } from "./types";
import { IMessage } from "../Message/types";
import Message from "../Message";
import "./MessageList.css";

export default class MessageList extends Component<IMessageList> {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map((message: IMessage) => {
          return (
            <Message
              key={message.messageId.toString()}
              {...message}
            />
          );
        })}
      </ul>
    );
  }
}