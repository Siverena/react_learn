import { nanoid } from 'nanoid';
import { Reducer } from 'redux';
import { Users } from 'src/common-types';
import { USERS } from 'src/constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action';
import { MessagesAction } from './types';

export interface TSMessage {
  id: string;
  author: Users;
  text: string;
}

export interface MessageState {
  [key: string]: TSMessage[];
}

const initialMessages: MessageState = {
  default: [
    {
      id: '1',
      author: USERS.bot,
      text: 'Добрый день! Я ботик котик. Почешите мне животик',
    },
  ],
};

export const messageReducer: Reducer<MessageState, MessagesAction> = (
  state = initialMessages,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      //без этой проверки при добавлении нового чата с существующим именем старый чат затирается новым(пустым)
      //либо связывать по id и хранить сущность chat {id, name}
      if ({ ...state }[action.newChat]) {
        return state;
      }
      return {
        ...state,
        [action.newChat]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      if (chats[action.chatName]) {
        delete chats[action.chatName];
      }
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [
          ...state[action.chatName],
          {
            id: nanoid(),
            author: USERS.user,
            text: action.text,
          },
        ],
      };
    }
    default:
      return state;
  }
};
