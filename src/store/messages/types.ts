import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action';

export type MessagesAction =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMessage>;

export type AddChat = (newChat: string) => {
  type: typeof ADD_CHAT;
  newChat: string;
};

export type DeleteChat = (chatName: string) => {
  type: typeof DELETE_CHAT;
  chatName: string;
};
export type AddMessage = (
  chatName: string,
  text: string
) => {
  type: typeof ADD_MESSAGE;
  chatName: string;
  text: string;
};
