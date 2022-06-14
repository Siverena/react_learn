import React, { useState, FC, useMemo, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Loader } from "./elements/Loader/Loader";
import style from "./index.module.scss";
import { nanoid } from "nanoid";
import { TSMessage, TSMessages } from "^src/common-types";
import { Provider } from "react-redux";
import { store } from "./store";

const ProfilePage = React.lazy(() =>
  import("./pages/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);
const ChatsPage = React.lazy(() =>
  import("./pages/ChatsPage").then(({ ChatsPage }) => ({
    default: ChatsPage,
  }))
);
const MainPage = React.lazy(() =>
  import("./pages/MainPage").then(({ MainPage }) => ({
    default: MainPage,
  }))
);

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
    <Provider store={store}>
      <div className={style["app-wrapper"]}>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </div>
    </Provider>
  );
};
