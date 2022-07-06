import { render } from '@testing-library/react';
import { MessagesWindow } from './MessagesWindow';

import '@testing-library/jest-dom';
import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { rootReducer } from 'src/store';
import { Provider } from 'react-redux';

describe('MessageList', () => {
  let store: EnhancedStore<any, AnyAction, any>;
  beforeEach(() => {
    store = configureStore({ reducer: rootReducer });
  });
  it('render component', () => {
    render(
      <Provider store={store}>
        <MessagesWindow />
      </Provider>
    );
  });
  // it('Bot`s response', async () => {
  //   render(<MessagesWindow />);
  //   fireEvent.input(screen.getByPlaceholderText('Введите сообщение'), {
  //     target: { value: 'TestMessage' },
  //   });
  //   fireEvent.click(screen.getByTestId('submitbutton'));

  //   await waitFor(
  //     () =>
  //       expect(
  //         screen.getByText('Добрый день! Я ботик котик. Почешите мне животик')
  //       ).toBeInTheDocument(),
  //     { timeout: 1200 }
  //   );
  // });
});
