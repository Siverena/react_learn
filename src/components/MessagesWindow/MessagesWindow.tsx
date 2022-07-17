import { FC, useEffect, useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { useParams, useNavigate } from 'react-router-dom';
import style from './messages.module.scss';
import { TSChat, TSMessage } from 'src/common-types';
import { onValue } from 'firebase/database';
import { getChatByID } from 'src/services/firebase';
interface MessagesWindowProps {
  chats: TSChat[];
}

export const MessagesWindow: FC<MessagesWindowProps> = ({ chats }) => {
  const { chatName } = useParams();
  const [messages, setMessages] = useState<TSMessage[]>([]);
  let chatId = '';

  const nav = useNavigate();

  const selectedChat = chats.find((el) => el.name === chatName) ?? '';

  if (selectedChat) {
    chatId = selectedChat.id;
  }
  // else {
  //   nav('/chats', { replace: true });
  // }
  useEffect(() => {
    if (chatName && !messages) {
      nav('/chats', { replace: true });
    }
    // if (selectedChat) {
    //   chatId = selectedChat.id;
    // } else {
    //   nav('/chats', { replace: true });
    // }
    const unsubscribe = onValue(getChatByID(chatId), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(Object.values(data.messageList));
      }
    });
    return unsubscribe;
  }, [chatId]);
  if (chatId) {
    return (
      <>
        <section className={style['message-window']}>
          <MessageList messages={messages} />
          <Form chatId={chatId} />
        </section>
      </>
    );
  } else {
    return (
      <>
        <div className={style['message-window--no-chat']}>
          <p>Выберите чат</p>
        </div>
      </>
    );
  }
};
