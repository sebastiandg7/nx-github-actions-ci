import React from 'react';
import { render } from '@testing-library/react';

import ClientWebLib5 from './client-web-lib5';

describe('ClientWebLib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientWebLib5 />);
    expect(baseElement).toBeTruthy();
  });
});
