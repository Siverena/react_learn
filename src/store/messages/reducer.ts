// import { nanoid } from 'nanoid';
// import { Reducer } from 'redux';
// import { TSMessage, Users } from 'src/common-types';
// import { USERS } from 'src/constants';
// import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action';
// import { MessagesAction } from './types';

// type MessageWithId = { id: string } & TSMessage;

// export interface MessagesState {
//   [key: string]: MessageWithId[];
// }

// const initialMessages: MessagesState = {
//   default: [
//     {
//       id: '1',
//       author: USERS.bot,
//       text: 'Добрый день! Я ботик котик. Почешите мне животик',
//     },
//   ],
// };

// export const messageReducer: Reducer<MessagesState, MessagesAction> = (
//   state = initialMessages,
//   action
// ) => {
//   switch (action.type) {
//     case ADD_CHAT: {
//       if ({ ...state }[action.newChat]) {
//         return state;
//       }
//       return {
//         ...state,
//         [action.newChat]: [],
//       };
//     }
//     case DELETE_CHAT: {
//       const chats = { ...state };
//       if (chats[action.chatName]) {
//         delete chats[action.chatName];
//       }
//       return chats;
//     }
//     case ADD_MESSAGE: {
//       return {
//         ...state,
//         [action.chatName]: [
//           ...state[action.chatName],
//           {
//             id: nanoid(),
//             author: action.message.author,
//             text: action.message.text,
//           },
//         ],
//       };
//     }
//     default:
//       return state;
//   }
// };
