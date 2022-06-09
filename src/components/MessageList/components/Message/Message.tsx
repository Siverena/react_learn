import style from './message.module.scss';
import USERS from '../../../../constants';

 import {TSMessage} from '../../../../types';
import { FC } from 'react';

 interface MessageProps{
  message: TSMessage
 }


const isMyMessage = (message) => (message.author === USERS.user ? true : false);

export const Message:FC<MessageProps> = ({ message }) => {
  return (
    <>
      <li
        className={
          style['message'] +
          (isMyMessage(message) ? ' ' + style['message--my'] : '')
        }
      >
        {!isMyMessage(message) && (
          <>
            <p className={style['message__author']}>{message.author}</p>
            <hr className={style['message__line']} />
          </>
        )}
        <p className={style['message__text']}>{message.text}</p>
      </li>
    </>
  );
};
