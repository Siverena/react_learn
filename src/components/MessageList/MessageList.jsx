import style from './messageList.module.scss';
import { Message } from './components/Message/Message';

export const MessageList = ({ messages }) => (
  <>
    {!messages?.length && <p>Напишите что-нибудь, а то котику скучно</p>}
    <ul className={style['messages']}>
      {messages?.map((message, id) => (
        <Message message={message} key={id} />
      ))}
    </ul>
  </>
);
