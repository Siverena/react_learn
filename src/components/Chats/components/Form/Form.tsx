import { FC, useState } from 'react';
// import { addChat } from 'src/store/messages/action';
// import { addChat } from 'src/store/messages/slice';
import { Button } from 'src/elements/Button/Button';
import { Input } from 'src/elements/Input/Input';
import style from './form.module.scss';
import { push } from 'firebase/database';
import { getMessagesByChatID, messagesRef } from 'src/services/firebase';

export const Form: FC = () => {
  const [name, setName] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let chatId = '';
    if (name.trim().length) {
      const ch = push(messagesRef, {
        name: name,
      });
      chatId = ch.key as string;
      push(getMessagesByChatID(chatId), {
        text: `Welcome to chat ${name}`,
        author: 'Admin',
        time: new Date().toISOString(),
      });
      setName('');
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input classnames={['input']} value={name} change={setName} />
      <Button label="Добавить" />
    </form>
  );
};
