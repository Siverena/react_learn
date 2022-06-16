import React from 'react';
import style from './message.module.scss';
import { USERS } from '../../../../../../constants';
import { TSMessage } from 'src/common-types';
import { FC } from 'react';

const isMyMessage = (author: string) => (author === USERS.user ? true : false);

export const Message: FC<TSMessage> = ({ author, text }) => {
  return (
    <>
      <li
        className={
          style['message'] +
          (isMyMessage(author) ? ' ' + style['message--my'] : '')
        }
      >
        {!isMyMessage(author) && (
          <>
            <p className={style['message__author']}>{author}</p>
            <hr className={style['message__line']} />
          </>
        )}
        <p className={style['message__text']}>{text}</p>
      </li>
    </>
  );
};
