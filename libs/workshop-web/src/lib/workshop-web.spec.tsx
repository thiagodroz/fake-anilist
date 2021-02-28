import React from 'react';
import { render } from '@testing-library/react';

import WorkshopWeb from './workshop-web';

describe('WorkshopWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkshopWeb />);
    expect(baseElement).toBeTruthy();
  });
});
