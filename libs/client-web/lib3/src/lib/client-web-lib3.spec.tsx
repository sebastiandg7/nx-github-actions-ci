import React from 'react';
import { render } from '@testing-library/react';

import ClientWebLib3 from './client-web-lib3';

describe('ClientWebLib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientWebLib3 />);
    expect(baseElement).toBeTruthy();
  });
});
