import React, { FC, useState } from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import style from './form.module.scss';
import USERS from '../../../../constants';
// import USERS from "src/constants";
import { TSMessage } from 'src/common-types';

interface FormProps {
  addMessage: (msg: TSMessage) => void;
}

export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length) {
      addMessage({
        author: USERS.user,
        text,
      });
      setText('');
    }
  };
  const handleClickButton = () => {
    console.log('button click');
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input value={text} change={setText} />
      <Button label="Отправить" click={handleClickButton} />
    </form>
  );
};
