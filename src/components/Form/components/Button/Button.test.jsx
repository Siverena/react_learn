import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
  it('render component', () => {
    render(<Button label="test" />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button label="test" />);
    expect(asFragment()).toMatchSnapshot();
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
