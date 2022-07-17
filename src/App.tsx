import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Loader } from './elements/Loader/Loader';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import style from './index.module.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

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
const SignInPage = React.lazy(() =>
  import('./pages/SignInPage').then(({ SignInPage }) => ({
    default: SignInPage,
  }))
);
const SignUpPage = React.lazy(() =>
  import('./pages/SignUpPage').then(({ SignUpPage }) => ({
    default: SignUpPage,
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
                <Route
                  path="profile"
                  element={<PrivateRoute component={<ProfilePage />} />}
                />
                <Route path="chats" element={<PrivateRoute />}>
                  <Route index element={<ChatsPage />} />
                  <Route path=":chatName" element={<ChatsPage />} />
                </Route>
                <Route
                  path="signin"
                  element={<PublicRoute component={<SignInPage />} />}
                />
                <Route path="signup" element={<SignUpPage />} />
              </Route>

              <Route path="*" element={<h2>404</h2>} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </PersistGate>
  </Provider>
);
