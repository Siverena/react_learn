import { useState, useEffect, FC } from 'react';
import { Form } from './components/Form/Form';
// import { Message } from "./components/MessageList/components/Message/Message";
import { MessageList } from './components/MessageList/MessageList';
import USERS from './constants';
import {TSMessage} from './types'
import style from './index.module.scss';

const msg = [];

export const App: FC = () => {
  const [messages, setMessages] = useState<TSMessage[]>(msg);
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author === USERS.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: USERS.bot,
          text: 'Добрый день! Я ботик котик. Почешите мне животик',
        });
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);
  return (
    <>
      <main>
        <div className={style.container}>
          <MessageList messages={messages} />

          <Form addMessage={addMessage} />
        </div>
      </main>
    </>
  );
};
