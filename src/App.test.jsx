import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { App } from './App';

describe('App', () => {
  it('Bot`s response', async () => {
    render(<App />);

    // render(<Form addMessage={() => {}} />);

    fireEvent.input(screen.getByPlaceholderText('Введите сообщение'), {
      target: { value: 'TestMessage' },
    });
    fireEvent.click(screen.getByTestId('submitbutton'));
    // render(<MessageList {...[{ author: "Вы", text: "TestMessage" }]} />);
    await waitFor(
      () =>
        expect(
          screen.getByText('Добрый день! Я ботик котик. Почешите мне животик')
        ).toBeInTheDocument(),
      { timeout: 1200 }
    );
  });
});
