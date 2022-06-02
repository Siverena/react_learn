import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessagesList';

//import style from './index.module.css';

const msg = [
  {
    author: 'Вы',
    text: 'Привет',
  },
];

export const App = () => {
  const [messages, setMessages] = useState(msg);
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };
  useEffect(() => {
    if (messages[messages.length - 1].author === 'Вы') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'Boт',
          text: 'Добрый день! Я бот.',
        });
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);
  return (
    <>
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
