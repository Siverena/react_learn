import { render, screen } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import { MessagesWindow } from './MessagesWindow';

import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('render component', () => {
    render(<MessagesWindow />);
  });
  it('Bot`s response', async () => {
    render(<MessagesWindow />);
    fireEvent.input(screen.getByPlaceholderText('Введите сообщение'), {
      target: { value: 'TestMessage' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));

    await waitFor(
      () =>
        expect(
          screen.getByText('Добрый день! Я ботик котик. Почешите мне животик')
        ).toBeInTheDocument(),
      { timeout: 1200 }
    );
  });
});
