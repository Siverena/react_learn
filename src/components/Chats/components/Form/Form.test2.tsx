import { render, screen, fireEvent } from '@testing-library/react';
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

  it('input change with fireevent', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByTestId<HTMLInputElement>('input');
    await fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('input change with userEvent', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');
    expect(input.value).toBe('Hello, World!');
  });
  it('button click with userEvent', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const mockHandler = jest.fn();
    screen.getByText('Добавить').onclick = mockHandler;
    await userEvent.click(screen.getByText('Добавить'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
