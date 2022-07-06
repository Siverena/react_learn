import { render } from '@testing-library/react';
import { Recipes } from './Recipes';

import '@testing-library/jest-dom';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';
import { Provider } from 'react-redux';

describe('Recipes', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <Recipes />
      </Provider>
    );
  });
});
