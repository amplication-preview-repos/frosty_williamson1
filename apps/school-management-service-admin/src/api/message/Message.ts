export type Message = {
  createdAt: Date;
  id: string;
  messageContent: string | null;
  receiver: string | null;
  sender: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
