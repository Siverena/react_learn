// import { Dispatch } from 'redux';
// import { TSMessage, Users } from 'src/common-types';
// import { AddChat, DeleteChat, AddMessage } from './types';

// export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
// export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
// export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

// export const addChat: AddChat = (newChat) => ({
//   type: ADD_CHAT,
//   newChat,
// });
// export const deleteChat: DeleteChat = (chatName) => ({
//   type: DELETE_CHAT,
//   chatName,
// });
// export const addMessage: AddMessage = (chatName, message) => ({
//   type: ADD_MESSAGE,
//   chatName,
//   message,
// });
// let timeout: NodeJS.Timeout;
// export const addMessageWithReply =
//   (chatName: string, message: TSMessage) => (dispatch: Dispatch) => {
//     dispatch(addMessage(chatName, message));
//     if (message.author !== Users.BOT) {
//       if (timeout) {
//         clearTimeout(timeout);
//       }
//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage(chatName, {
//             author: Users.BOT,
//             text: 'Добрый день! Я ботик котик. Почешите мне животик',
//           })
//         );
//       }, 1000);
//     }
//   };

// useEffect(() => {
//   if (
//     chatId &&
//     messages[chatId]?.length &&
//     messages[chatId][messages[chatId].length - 1].author === USERS.user
//   ) {
//     const timeout = setTimeout(() => {
//       addMessage(chatId, {
//         author: USERS.bot,
//         text: 'Добрый день! Я ботик котик. Почешите мне животик',
//       });
//     }, 1000);
//     return () => {
//       clearTimeout(timeout);
//     };
//   }
// }, [chatId, messages]);
