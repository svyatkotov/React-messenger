import { IChatListItem } from "../ChatListItem/types";

export const chatListItems: IChatListItem[] = [
  {
    chatId: 1,
    name: "Chat1",
    date: new Date(2020, 4, 6),
    author: "Author1",
    message: "Test message1"
  },
  {
    chatId: 2,
    name: "Chat2",
    date: new Date(2020, 4, 7),
    author: "Author2",
    message: "Test message2"
  },
  {
    chatId: 3,
    name: "Chat3",
    date: new Date(2020, 4, 4),
    author: "Author2",
    message: "Test message3"
  },
  {
    chatId: 4,
    name: "Chat4",
    date: new Date(2020, 4, 2),
    author: "Author2",
    message: "Test message4"
  }
];

//export const messages;