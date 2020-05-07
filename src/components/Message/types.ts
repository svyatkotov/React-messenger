export interface IMessage {
  chatId: number;
  messageId: number;
  date: Date;
  author: string;
  text: string;
}