import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { rootReducer } from 'src/store';

import { ChatsPage } from './ChatsPage';
describe('ChatPage.test', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChatsPage />
        </MemoryRouter>
      </Provider>
    );
  });
});
