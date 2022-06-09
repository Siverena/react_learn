import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Message } from './Message';

describe('Message', () => {
  it('render component', () => {
    render(<Message {...{ message: { author: 'Вы', text: 'Привет' } }} />);
  });
  it('render multiple components', () => {
    render(<Message {...{ message: { author: 'Вы', text: 'Привет' } }} />);
    render(
      <Message {...{ message: { author: 'Не вы ', text: 'Привет, друг' } }} />
    );
    render(<Message {...{ message: { author: 'Не вы ', text: 'Привет' } }} />);
    expect(screen.queryAllByRole('listitem').length).toBe(3);
  });
  it('has class message--my', () => {
    render(<Message {...{ message: { author: 'Вы', text: 'Привет' } }} />);
    expect(screen.queryByRole('listitem')).toHaveClass('message--my');
  });
});
