import { IChatListItem } from "../ChatListItem/types";
import { IMessage } from "../Message/types";

export const chatListItems: IChatListItem[] = [
  {
    chatId: 1,
    name: "First chat",
    date: new Date(2020, 4, 6),
    lastMessageAuthor: null,
    lastMessagePreview: null
  },
  {
    chatId: 2,
    name: "Second chat",
    date: new Date(2020, 4, 7),
    lastMessageAuthor: null,
    lastMessagePreview: null
  },
  {
    chatId: 3,
    name: "Third chat",
    date: new Date(2020, 4, 4),
    lastMessageAuthor: null,
    lastMessagePreview: null
  },
  {
    chatId: 4,
    name: "Fourth chat",
    date: new Date(2020, 4, 2),
    lastMessageAuthor: null,
    lastMessagePreview: null
  }
];

export const messages: IMessage[] = [
  {
    chatId: 1,
    messageId: 1,
    date: new Date(2020, 4, 6),
    author: "Slava",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 1,
    messageId: 2,
    date: new Date(2020, 4, 1),
    author: "Slava",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 1,
    messageId: 3,
    date: new Date(2020, 4, 3),
    author: "Slava",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 2,
    messageId: 1,
    date: new Date(2020, 4, 6),
    author: "Artem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 2,
    messageId: 2,
    date: new Date(2020, 4, 7),
    author: "Artem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 3,
    messageId: 1,
    date: new Date(2020, 4, 4),
    author: "Noel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 3,
    messageId: 2,
    date: new Date(2020, 4, 3),
    author: "Noel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 3,
    messageId: 3,
    date: new Date(2020, 4, 2),
    author: "Noel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 3,
    messageId: 4,
    date: new Date(2020, 4, 1),
    author: "Noel",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  },
  {
    chatId: 4,
    messageId: 1,
    date: new Date(2020, 4, 2),
    author: "Vika",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
  }
];