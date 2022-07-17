import { onValue } from 'firebase/database';
import { FC, useEffect, useState } from 'react';
import { TSChat } from 'src/common-types';
import { messagesRef } from 'src/services/firebase';
import { Chats } from 'src/components/Chats/Chats';
import { MessagesWindow } from 'src/components/MessagesWindow/MessagesWindow';
import style from '../index.module.scss';

export const ChatsPage: FC = () => {
  const [chats, setChats] = useState<TSChat[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // console.log(data);
        const newChats = Object.entries(data).map((item: any) => {
          return {
            id: item[0],
            name: item[1].name,
          };
        });
        setChats(newChats);
      } else setChats([]);
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <div className={style['chats-page__container']}>
        <Chats chats={chats} />
        <MessagesWindow chats={chats} />
      </div>
    </>
  );
};
