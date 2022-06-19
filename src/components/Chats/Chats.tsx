import { FC } from 'react';
import { ChatsList } from './components/ChatsList/ChatsList';
import { Form } from './components/Form/Form';
import style from './chats.module.scss';

export const Chats: FC = () => (
  <section className={style['chats']}>
    <Form />
    <ChatsList />
  </section>
);
