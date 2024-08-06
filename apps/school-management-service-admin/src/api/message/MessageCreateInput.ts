export type MessageCreateInput = {
  messageContent?: string | null;
  receiver?: string | null;
  sender?: string | null;
  sentAt?: Date | null;
};
