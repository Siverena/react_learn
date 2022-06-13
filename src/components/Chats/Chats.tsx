import { FC } from 'react';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Form } from './components/Form/Form';
import { TSChat } from '^src/common-types';
import style from './chats.module.scss';

interface ChatsProps {
  chats: TSChat[];
  addChat: (name: string) => void;
  deleteChat: (name: string) => void;
}

export const Chats: FC<ChatsProps> = ({ chats, addChat, deleteChat }) => {
  return (
    <section className={style['chats']}>
      <Form addChat={addChat} />
      <ChatsList chats={chats} deleteChat={deleteChat} />
    </section>
  );
};
