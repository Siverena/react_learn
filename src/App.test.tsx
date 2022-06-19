import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { ChatsPage } from './pages/ChatsPage';

describe('App', () => {
  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong_url']}>
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
      </MemoryRouter>
    );

    screen.getByText('404');
  });
});
