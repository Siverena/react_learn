import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TSMessage } from 'src/common-types';
import { USERS } from 'src/constants';

type MessageWithId = { id?: string } & TSMessage;

export interface MessagesState {
  [key: string]: MessageWithId[];
}

const initialState: MessagesState = {
  default: [
    {
      id: '1',
      author: USERS.bot,
      text: 'Добрый день! Я ботик котик. Почешите мне животик',
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
    addMessage: (state, action: PayloadAction<MessagesState>) => {
      const chatName = Object.keys(action.payload)[0];
      state[chatName] = [
        ...state[chatName],
        {
          id: nanoid(),
          author: action.payload[chatName][0].author,
          text: action.payload[chatName][0].text,
        },
      ];
    },
  },
});

// let timeout: NodeJS.Timeout;
// export const addMessageWithReply = (state, action: PayloadAction<MessagesState>) => {
//   console.log(action);
//   console.log(action.payload);
//   addMessage(action.payload);
//   let chatName = Object.keys(action.payload)[0];
//   addMessage({
//     [chatName]: [
//       {
//         author: Users.BOT,
//         text: 'Добрый день! Я ботик котик. Почешите мне животик',
//       },
//     ],
//   });

//   if (action.payload[chatName][0].author !== Users.BOT) {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       // console.log('addMessage бот');
//       addMessage({
//         [chatName]: [
//           {
//             author: Users.BOT,
//             text: 'Добрый день! Я ботик котик. Почешите мне животик',
//           },
//         ],
//       });
//     }, 1000);
//   }

// }

export const { addChat, addMessage, deleteChat } = messageSlice.actions;
export const messageReducer = messageSlice.reducer;
