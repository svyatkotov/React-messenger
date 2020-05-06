import React, { Component } from "react";
import ChatList from "../ChatList";
import { chatListItems } from "./messengerData";

export default class Messenger extends Component {
  render() {
    return (
      <ChatList chatListItems={chatListItems}/>
    );
  }
}
