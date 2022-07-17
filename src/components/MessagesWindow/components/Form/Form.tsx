import { FC, memo, useState } from 'react';
import { Button } from 'src/elements/Button/Button';
import { Input } from 'src/elements/Input/Input';
import style from './form.module.scss';
import { useParams } from 'react-router-dom';
import { Users } from 'src/common-types';
import { getMessagesByChatID } from 'src/services/firebase';
import { push } from 'firebase/database';

interface FormProps {
  chatId: string;
}
export const Form: FC<FormProps> = memo(({ chatId }) => {
  const [text, setText] = useState('');
  const { chatName } = useParams();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatName && text.trim().length) {
      push(getMessagesByChatID(chatId), {
        text: text,
        author: Users.USER,
        time: new Date().toISOString(),
      });
      setText('');
    }
  };

  return (
    <form data-testid="form" className={style.form} onSubmit={submitHandler}>
      <Input
        classnames={['input']}
        value={text}
        placeholder="Введите сообщение"
        change={setText}
      />
      <Button label="Отправить" />
    </form>
  );
});
