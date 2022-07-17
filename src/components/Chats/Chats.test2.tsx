import { render } from '@testing-library/react';
import { Chats } from './Chats';
import '@testing-library/jest-dom';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { TSChat } from 'src/common-types';

describe('MessageList', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  const chats: TSChat[] = [
    { id: '1', name: 'chat1' },
    { id: '2', name: 'chat2' },
  ];
  it('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Chats chats={chats} />
        </MemoryRouter>
      </Provider>
    );
  });
});
