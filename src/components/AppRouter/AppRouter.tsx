import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'src/components/Header/Header';
import { PrivateRoute } from 'src/components/PrivateRoute';
import { PublicRoute } from 'src/components/PublicRoute';
import { firebaseAuth } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';

const ProfilePage = React.lazy(() =>
  import('src/pages/ProfilePage').then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);
const ChatsPage = React.lazy(() =>
  import('src/pages/ChatsPage').then(({ ChatsPage }) => ({
    default: ChatsPage,
  }))
);
const MainPage = React.lazy(() =>
  import('src/pages/MainPage').then(({ MainPage }) => ({
    default: MainPage,
  }))
);
const SignInPage = React.lazy(() =>
  import('src/pages/SignInPage').then(({ SignInPage }) => ({
    default: SignInPage,
  }))
);
const SignUpPage = React.lazy(() =>
  import('src/pages/SignUpPage').then(({ SignUpPage }) => ({
    default: SignUpPage,
  }))
);
export const AppRouter: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />}></Route>
        <Route path="recipes" element={<MainPage />}>
          <Route index element={<MainPage />} />
        </Route>
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
        <Route
          path="signup"
          element={<PublicRoute component={<SignUpPage />} />}
        />
      </Route>

      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  );
};
