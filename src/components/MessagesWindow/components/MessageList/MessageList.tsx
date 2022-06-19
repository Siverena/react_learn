import style from './messageList.module.scss';
import { Message } from './components/Message/Message';
import { FC } from 'react';
import { TSMessage } from 'src/common-types';

interface MessageListProps {
  messages: TSMessage[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <>
    {!messages?.length && <p>Напишите что-нибудь, а то котику скучно</p>}
    <ul className={style['messages']}>
      {messages?.map((message, id) => (
        <Message author={message.author} text={message.text} key={id} />
      ))}
    </ul>
  </>
);
