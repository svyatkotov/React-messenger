export interface IChatListItem {
  chatId: number;
  name: string;
  date: Date;
  lastMessageAuthor: string | null;
  lastMessagePreview: string | null;
}