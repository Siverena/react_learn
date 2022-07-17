import { render } from '@testing-library/react';
import { Loader } from './Loader';

import '@testing-library/jest-dom';

describe('Loader', () => {
  it('render component', () => {
    render(<Loader />);
  });
});
