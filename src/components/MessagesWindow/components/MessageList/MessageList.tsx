import style from './messageList.module.scss';
import { Message } from './components/Message/Message';
import { FC } from 'react';
import { TSMessage } from 'src/store/messages/reducer';

interface MessageListProps {
  messages: TSMessage[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <>
    {!messages?.length && <p>Напишите что-нибудь, а то котику скучно</p>}
    <ul className={style['messages']}>
      {messages?.map((message, id) => (
        <Message id="4" author={message.author} text={message.text} key={id} />
      ))}
    </ul>
  </>
);
