import { FC } from 'react';
import { ChatsList } from './components/ChatsList/ChatsList';
import style from './chats.module.scss';

const chatsTmp = [
  {
    id: 'fgrwsgedrg',
    name: 'Чат 1',
  },
  {
    id: 'dfdfgdfgdf',
    name: 'Чат 2',
  },
];
export const Chats: FC = () => (
  <section className={style['chats']}>
    <ChatsList chats={chatsTmp} />
  </section>
);
