import React, { FC, useState } from 'react';
import { Button } from './components/Button/Button';
import style from './form.module.scss';


import {TSMessage} from '../../types'


interface FormProps{
  addMessage: (msg:TSMessage) =>void
}


export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');

  const submitHandler = (e: React.formEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage({
      author: 'Вы',
      text,
    });
    setText('');
  };
const handleClickButton =()=>{
  console.log('button click')
}
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <input
        className={style['form__input']}
        type="text"
        placeholder="Введите сообщение"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button label='Отправить' click={handleClickButton}/>
    </form>
  );
};
