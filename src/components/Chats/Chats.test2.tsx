import { render } from '@testing-library/react';
import { Chats } from './Chats';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('render component', () => {
    render(<Chats />);
  });
});
