import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button label="test" />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<Button label="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('button click with userEvent', async () => {
    const mockHandler = jest.fn();
    render(<Button label="test" click={mockHandler} />);
    await userEvent.click(screen.getByText('test'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  it('render component with text', () => {
    render(<Button label="test" />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
  it('button is disabled', () => {
    render(<Button label="test2" disabled />);
    expect(screen.getByText(/test2/)).toBeDisabled();
  });
});
