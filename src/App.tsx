import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Loader } from './elements/Loader/Loader';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import style from './index.module.scss';
import { PersistGate } from 'redux-persist/integration/react';

const ProfilePage = React.lazy(() =>
  import('./pages/ProfilePage').then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);
const ChatsPage = React.lazy(() =>
  import('./pages/ChatsPage').then(({ ChatsPage }) => ({
    default: ChatsPage,
  }))
);
const MainPage = React.lazy(() =>
  import('./pages/MainPage').then(({ MainPage }) => ({
    default: MainPage,
  }))
);

export const App: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className={style['app-wrapper']}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<MainPage />}></Route>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/chats">
                  <Route index element={<ChatsPage />} />
                  <Route path=":chatName" element={<ChatsPage />} />
                </Route>
              </Route>
              <Route path="*" element={<h2>404</h2>} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </PersistGate>
  </Provider>
);
