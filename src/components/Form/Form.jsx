import { useState } from 'react';
import { Button } from './components/Button/Button';
import style from './form.module.scss';

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage({
      author: 'Вы',
      text,
    });
    setText('');
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <input
        className={style['form__input']}
        type="text"
        placeholder="Введите сообщение"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button label={'Отправить'} />
    </form>
  );
};
