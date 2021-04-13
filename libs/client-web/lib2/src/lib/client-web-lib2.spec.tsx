import React from 'react';
import { render } from '@testing-library/react';

import ClientWebLib2 from './client-web-lib2';

describe('ClientWebLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientWebLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
