import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { rootReducer } from 'src/store';

import { Header } from './Header';
describe('Header.test', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });
});
