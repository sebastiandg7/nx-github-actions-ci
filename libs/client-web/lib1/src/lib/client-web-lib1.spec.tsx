import React from 'react';
import { render } from '@testing-library/react';

import ClientWebLib1 from './client-web-lib1';

describe('ClientWebLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientWebLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
