//проверить что добавляются сообщения
// в ul отрисовываются li = messages.length
import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('render component', () => {
    render(<MessageList messages={[]} key={1} />);
  });
});
