import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { ChatsList } from './ChatsList';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { TSChat } from 'src/common-types';

describe('ChatsList', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  const chats: TSChat[] = [
    { id: '1', name: 'chat1' },
    { id: '2', name: 'chat2' },
  ];
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChatsList chats={chats} />
        </MemoryRouter>
      </Provider>
    );
  });
});
