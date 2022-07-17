import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

import '@testing-library/jest-dom';
import { AnyAction, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

describe('Pagination', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  it('render component', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
  });
});
