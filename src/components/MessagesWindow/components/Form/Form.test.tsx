import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Form } from './Form';
import { rootReducer } from 'src/store';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

describe('Form', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });
  it('form submited', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const mockHandler = jest.fn();
    screen.getByTestId('form').onsubmit = mockHandler;
    await userEvent.click(screen.getByText('Отправить'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
