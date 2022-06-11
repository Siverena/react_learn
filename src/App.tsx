import React, { FC } from 'react';
import { Chats } from './components/Chats/Chats';
import { MessagesWindow } from './components/MessagesWindow/MessagesWindow';
import style from './index.module.scss';

export const App: FC = () => {
  return (
    <>
      <main>
        <div className={style.container}>
          <Chats />
          <MessagesWindow />
        </div>
      </main>
    </>
  );
};
