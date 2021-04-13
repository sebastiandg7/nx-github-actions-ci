import React from 'react';
import { render } from '@testing-library/react';

import ClientWebLib4 from './client-web-lib4';

describe('ClientWebLib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientWebLib4 />);
    expect(baseElement).toBeTruthy();
  });
});
