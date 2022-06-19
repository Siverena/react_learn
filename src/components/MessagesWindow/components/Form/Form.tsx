import { FC, memo, useState } from 'react';
import { Button } from '../../../../elements/Button/Button';
import { Input } from '../../../../elements/Input/Input';
import style from './form.module.scss';
import { useDispatch } from 'react-redux';
import { addMessage } from 'src/store/messages/slice';
import { useParams } from 'react-router-dom';
import { Users } from 'src/common-types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const Form: FC = memo(() => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<ThunkDispatch<any, void, AnyAction>>();
  const { chatName } = useParams();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatName && text.trim().length) {
      dispatch(addMessage({ [chatName]: [{ author: Users.USER, text }] }));
      setText('');
    }
  };

  return (
    <form data-testid='form' className={style.form} onSubmit={submitHandler}>
      <Input
        classnames={['input']}
        value={text}
        placeholder='Введите сообщение'
        change={setText}
      />
      <Button label='Отправить' />
    </form>
  );
});
