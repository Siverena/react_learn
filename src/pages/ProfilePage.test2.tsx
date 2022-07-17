import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { rootReducer } from 'src/store';
import userEvent from '@testing-library/user-event';
import { ProfilePage } from './ProfilePage';

import '@testing-library/jest-dom';

describe('ProfilePage.test', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </Provider>
    );
  });
  it('button click Изменить', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </Provider>
    );
    const mockHandler = jest.fn();
    screen.getByText('Изменить').onclick = mockHandler;
    await userEvent.click(screen.getByText('Изменить'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  it('button click chahge visible', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      </Provider>
    );
    const mockHandler = jest.fn();
    screen.getByText('chahge visible').onclick = mockHandler;
    await userEvent.click(screen.getByText('chahge visible'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
