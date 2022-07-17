import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MessageList } from './MessageList';
import { Users, TSMessage } from 'src/common-types';
import { Provider } from 'react-redux';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';

describe('MessagesList', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MessageList messages={[]} />{' '}
      </Provider>
    );
  });

  it('messages list is empty', async () => {
    render(
      <Provider store={store}>
        <MessageList messages={[]} />{' '}
      </Provider>
    );

    expect(screen.queryAllByRole<HTMLLIElement>('li').length).toBe(0);
  });

  it('messages list length is 2', async () => {
    const messages: TSMessage[] = [
      {
        author: Users.USER,
        text: '1',
        time: new Date(),
      },
      {
        author: Users.USER,
        text: '2',

        time: new Date(),
      },
    ];
    render(
      <Provider store={store}>
        <MessageList messages={messages} />
      </Provider>
    );

    expect(screen.getAllByTestId<HTMLLIElement>('li')[0].innerHTML).toBe(
      '<p class="message__text">1</p>'
    );
    expect(screen.getAllByTestId<HTMLLIElement>('li').length).toBe(2);
  });
});
