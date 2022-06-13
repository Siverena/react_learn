import { FC, memo, useState } from 'react';
import { Button } from '../../../../elements/Button/Button';
import { Input } from '../../../../elements/Input/Input';
import style from './form.module.scss';
import { USERS } from '../../../../constants';
import { TSMessage } from 'src/common-types';

interface FormProps {
  addMessage: (msg: TSMessage) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
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
      <Input
        classnames={['input', 'input--green', 'input__asdfas']}
        value={text}
        placeholder="Введите сообщение"
        change={setText}
      />
      <Button label="Отправить" click={handleClickButton} />
    </form>
  );
});
