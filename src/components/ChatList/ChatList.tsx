import React, { Component } from "react";

import ChatListItem from "../ChatListItem";
import "./ChatList.css";

const testData = [
  {
    name: "Chat",
    date: "06/05/2020",
    author: "Author",
    message: "Test message"
  },
  {
    name: "Chat1",
    date: "07/05/2020",
    author: "Author1",
    message: "Test message1"
  }
];

export default class ChatList extends Component {
  render() {
    return (
      <ul className="chat-list">
        <ChatListItem {...testData[0]} />
        <ChatListItem {...testData[1]} />
      </ul>
    );
  }
}