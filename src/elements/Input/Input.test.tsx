import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input classnames={['input']} />);
  });

  it('input change with fireevent', async () => {
    render(<Input classnames={['input']} />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    await fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });
  it('input change with userEvent', async () => {
    render(<Input classnames={['input']} />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, World!');
    expect(input.value).toBe('Hello, World!');
  });
  it('input  with placeholder', async () => {
    render(<Input classnames={['input']} placeholder="Введите текст" />);
    const input = screen.getByPlaceholderText('Введите текст');
    expect(input).toBeInTheDocument;
  });
  it('input change with func', async () => {
    const mockHandler = jest.fn();
    render(<Input classnames={['input']} change={mockHandler} />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    await fireEvent.change(input, { target: { value: 'new value' } });
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
