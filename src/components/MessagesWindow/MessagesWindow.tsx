import { useState, useEffect, FC } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { TSMessage } from '../../common-types';
import USERS from '../../constants';
import style from './messages.module.scss';

const msg: Array<TSMessage> = [];

export const MessagesWindow: FC = () => {
  const [messages, setMessages] = useState<TSMessage[]>(msg);
  const addMessage = (newMessage: TSMessage) => {
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
      <section className={style['chat-window']}>
        <MessageList messages={messages} />
        <Form addMessage={addMessage} />
      </section>
    </>
  );
};
