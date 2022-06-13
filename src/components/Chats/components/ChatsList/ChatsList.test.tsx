import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { ChatsList } from './ChatsList';

describe('ChatsList', () => {
  it('render component', () => {
    const mockHandler = jest.fn();
    render(<ChatsList chats={[]} deleteChat={mockHandler} />);
  });
});
