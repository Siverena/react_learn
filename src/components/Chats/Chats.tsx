import { FC } from 'react';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Form } from './components/Form/Form';
import style from './chats.module.scss';
import { TSChat } from 'src/common-types';

interface ChatsProps {
  chats: TSChat[];
}

export const Chats: FC<ChatsProps> = ({ chats }) => (
  <section className={style['chats']}>
    <Form />
    <ChatsList chats={chats} />
  </section>
);
