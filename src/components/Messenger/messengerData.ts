import { IChatListItem } from "../ChatListItem/types";
import { IMessages } from "../Messenger/types";

export const chatListItems: IChatListItem[] = [
  {
    chatId: 1,
    name: "First chat",
    lastMessageTime: new Date(0),
  },
  {
    chatId: 2,
    name: "Second chat",
    lastMessageTime: new Date(0),
  },
  {
    chatId: 3,
    name: "Third chat",
    lastMessageTime: new Date(0),
  },
];

export const messages: IMessages[] = [
  {
    chatId: 1,
    messageListItems: [
      {
        messageId: 1,
        time: new Date(2020, 4, 12, 14, 36, 17),
        author: "Slava",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
      {
        messageId: 2,
        time: new Date(2020, 4, 12, 14, 5, 55),
        author: "Slava",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
      {
        messageId: 3,
        time: new Date(2020, 4, 12, 22, 15, 1),
        author: "Slava",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
    ],
  },
  {
    chatId: 2,
    messageListItems: [
      {
        messageId: 1,
        time: new Date(2020, 4, 12, 8, 44, 33),
        author: "Noel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
      {
        messageId: 2,
        time: new Date(2020, 4, 12, 11, 59, 17),
        author: "Noel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
      {
        messageId: 3,
        time: new Date(2020, 4, 12, 6, 12, 34),
        author: "Noel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
      {
        messageId: 4,
        time: new Date(2020, 4, 12, 14, 14, 59),
        author: "Noel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      },
    ],
  },
  {
    chatId: 3,
    messageListItems: [
      {
        messageId: 1,
        time: new Date(2020, 4, 12, 23, 59, 45),
        author: "Vika",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a egestas risus, eget ultricies nibh. Aliquam efficitur libero dictum, sollicitudin sapien eget, hendrerit lectus."
      }
    ],
  },
];
