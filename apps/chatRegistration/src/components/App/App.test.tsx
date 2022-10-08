import { render, screen } from '@testing-library/react';
import React from 'react';

import { setupUserEvents } from '~tools/config/tests';

import { App } from './App.component';

describe('App', () => {
  it('should render successfully', () => {
    render(<App />);

    expect(
      screen.getByRole('textbox', { name: /E-mail/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
  });

  it('should have password requirements messages', async () => {
    const { user } = setupUserEvents(<App />);

    await user.click(screen.getByLabelText(/Password/i));

    expect(
      screen.getByText(/includes at least 6 characters/i)
    ).toBeInTheDocument();
  });
});
