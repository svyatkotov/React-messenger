import React, { Component } from "react";
import ChatList from "../ChatList";
import MessageList from "../MessageList";
import { chatListItems, messages } from "./messengerData";
import "./Messenger.css";

export default class Messenger extends Component {
  render() {
    return (
      <div className="messenger">
        <ChatList chatListItems={chatListItems}/>
        <MessageList messages={messages}/>
      </div>
    );
  }
}
