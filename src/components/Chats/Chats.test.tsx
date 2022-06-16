import React from 'react';
import { render } from '@testing-library/react';
import { Chats } from './Chats';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('render component', () => {
    const mockHandler = jest.fn();
    render(<Chats chats={[]} addChat={mockHandler} deleteChat={mockHandler} />);
  });
});
