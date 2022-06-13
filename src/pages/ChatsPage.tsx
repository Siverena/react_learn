import { FC } from 'react';
import { Chats } from '../components/Chats/Chats';
import { MessagesWindow } from '../components/MessagesWindow/MessagesWindow';
import style from '../index.module.scss';
import { TSChat, TSMessage, TSMessages } from '^src/common-types';

interface ChatsPageProps {
  chats: TSChat[];
  addChat: (name: string) => void;
  deleteChat: (name: string) => void;
  messages: TSMessages;
  addMessage: (id: string, message: TSMessage) => void;
}
export const ChatsPage: FC<ChatsPageProps> = ({
  chats,
  addChat,
  deleteChat,
  messages,
  addMessage,
}) => {
  return (
    <>
      <div className={style['chats-page__container']}>
        <Chats chats={chats} addChat={addChat} deleteChat={deleteChat} />
        <MessagesWindow messages={messages} addMessage={addMessage} />
      </div>
    </>
  );
};
