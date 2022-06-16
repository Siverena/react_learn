import { USERS } from '../../../../../../constants';
import { render, screen } from '@testing-library/react';
import { Message } from './Message';
import '@testing-library/jest-dom';

describe('Message', () => {
  it('render component', () => {
    render(<Message id="1" author={USERS.user} text="Привет" />);
  });
  it('render multiple components', () => {
    render(<Message id="2" author={USERS.user} text="Привет" />);
    render(<Message id="3" author={USERS.another} text="Привет, друг" />);
    render(<Message id="4" author={USERS.another} text="Привет" />);
    expect(screen.queryAllByRole('listitem').length).toBe(3);
  });
  it('has class message--my', () => {
    render(<Message id="5" author={USERS.user} text="Привет" />);
  });
});
