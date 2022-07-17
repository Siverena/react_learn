import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

import '@testing-library/jest-dom';

describe('Pagination', () => {
  it('render component', () => {
    render(<Pagination />);
  });
});
