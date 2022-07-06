import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TSMessage, Users } from 'src/common-types';
import { FACTS_API, USERS } from 'src/constants';

type MessageWithId = { id?: string } & TSMessage;

type AddMessage = { chatName: string; message: MessageWithId };
//type MessageState = Record<string,MessageWithId[]>;
export interface MessagesState {
  [key: string]: MessageWithId[];
}
const defaulChatName = 'Ботик-котик';
const initialState: MessagesState = {
  [defaulChatName]: [
    {
      id: '1',
      author: USERS.bot,
      text: 'Добрый день! Я ботик котик. Почешите мне животик (Введите команду: /почесать)',
    },
  ],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      if ({ ...state }[action.payload]) {
        return state;
      }
      return {
        ...state,
        [action.payload]: [],
      };
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      const chats = { ...state };
      if (chats[action.payload]) {
        delete chats[action.payload];
      }
      return chats;
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      state[action.payload.chatName].push({
        id: nanoid(),
        author: action.payload.message.author,
        text: action.payload.message.text,
      });
    },
  },
});

const getFact = async () => {
  try {
    const fact = await fetch(FACTS_API);
    const data = await fact.json();
    return await data.text;
  } catch (err) {
    console.log((err as Error).message);
  }
};

const getReply = async (command: string) => {
  switch (command) {
    case '/почесать':
      return `ММррррр!! Смотри, что я умею: 
      /факт`;
    case '/факт':
      return await getFact();
    default:
      return `Я еще не выучил такую команду.
    Список доступных команд:
    /факт;
    /почесать`;
  }
};
let timeout: NodeJS.Timeout;
export const addMessageWithReply = createAsyncThunk(
  'messages/addMessageWithReply',
  async ({ chatName, message }: AddMessage, { dispatch }) => {
    dispatch(addMessage({ chatName, message }));

    if (chatName === defaulChatName) {
      if (message.author !== Users.BOT) {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(async () => {
          dispatch(
            addMessage({
              chatName,
              message: {
                id: nanoid(),
                author: Users.BOT,
                text: await getReply(message.text),
              },
            })
          );
        }, 500);
      }
    }
  }
);

export const { addChat, addMessage, deleteChat } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
