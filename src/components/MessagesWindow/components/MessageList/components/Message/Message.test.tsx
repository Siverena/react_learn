// import { USERS } from '../../../../../../constants';
import { USERS } from 'src/constants';
import { render, screen } from '@testing-library/react';
import { Message } from './Message';
import '@testing-library/jest-dom';

describe('Message', () => {
  it('render component', () => {
    render(<Message author={USERS.user} text="Привет" time={new Date()} />);
  });
  it('render multiple components', () => {
    render(<Message author={USERS.user} text="Привет" time={new Date()} />);
    render(
      <Message author={USERS.another} text="Привет, друг" time={new Date()} />
    );
    render(<Message author={USERS.another} text="Привет" time={new Date()} />);
    expect(screen.queryAllByRole('listitem').length).toBe(3);
  });
  it('has class message--my', () => {
    render(<Message author={USERS.user} text="Привет" time={new Date()} />);
  });
});
