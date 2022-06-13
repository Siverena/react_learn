import { useState, FC, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ChatsPage } from './pages/ChatsPage';
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import style from './index.module.scss';
import { nanoid } from 'nanoid';
import { TSMessage, TSMessages } from '^src/common-types';

const messagesTmp: TSMessages = {
  defaultChatName: [],
};

export const App: FC = () => {
  const [messages, setMessages] = useState<TSMessages>(messagesTmp);
  const chats = useMemo(() => {
    return Object.keys(messages).map((chatName) => ({
      id: nanoid(),
      name: chatName,
    }));
  }, [Object.keys(messages).length]);

  const addChat = (chatName: string) => {
    setMessages({ ...messages, [chatName]: [] });
  };

  const deleteChat = (chatName: string) => {
    const mes = { ...messages };
    if (mes[chatName]) {
      delete mes[chatName];
      setMessages(mes);
    }
  };

  const addMessage = (chatName: string, newMessage: TSMessage) => {
    setMessages({
      ...messages,
      [chatName]: [...messages[chatName], newMessage],
    });
  };

  return (
    <div className={style['app-wrapper']}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chats">
              <Route
                index
                element={
                  <ChatsPage
                    chats={chats}
                    addChat={addChat}
                    deleteChat={deleteChat}
                    messages={messages}
                    addMessage={addMessage}
                  />
                }
              />
              <Route
                path=":chatId"
                element={
                  <ChatsPage
                    chats={chats}
                    addChat={addChat}
                    deleteChat={deleteChat}
                    messages={messages}
                    addMessage={addMessage}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
