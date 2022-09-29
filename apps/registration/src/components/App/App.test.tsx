import { render, screen } from '@testing-library/react';
import React from 'react';

import { App } from './App.component';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    render(<App />);

    expect(screen.getByText(/Registration/gi)).toBeInTheDocument();
  });
});
