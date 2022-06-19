import { FC } from 'react';
import { Chats } from '../components/Chats/Chats';
import { MessagesWindow } from '../components/MessagesWindow/MessagesWindow';
import style from '../index.module.scss';

export const ChatsPage: FC = () => (
  <>
    <div className={style['chats-page__container']}>
      <Chats />
      <MessagesWindow />
    </div>
  </>
);
