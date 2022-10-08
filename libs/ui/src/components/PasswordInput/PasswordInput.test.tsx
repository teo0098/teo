/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { PasswordInput } from './PasswordInput.component';
import { getStrength, getStrengthColor } from './PasswordInput.tools';

describe('PasswordInput', () => {
  it('should render successfully', () => {
    render(<PasswordInput />);

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should have messages on what the password should look like', async () => {
    const user = userEvent.setup();
    render(<PasswordInput />);

    await user.click(screen.getByLabelText(/Password/i));

    expect(
      screen.getByText(/includes at least 6 characters/i)
    ).toBeInTheDocument();
  });

  it("shouldn't have messages on what the password should look like", async () => {
    const user = userEvent.setup();
    render(<PasswordInput disableRequirements />);

    await user.click(screen.getByLabelText(/Password/i));

    expect(
      screen.queryByText(/includes at least 6 characters/i)
    ).not.toBeInTheDocument();
  });

  it('can have custom requirements', async () => {
    const user = userEvent.setup();
    render(
      <PasswordInput
        requirements={[
          {
            condition: /./,
            label: 'Custom requirement',
          },
        ]}
      />
    );

    await user.click(screen.getByLabelText(/Password/i));

    expect(screen.getByText(/custom requirement/i)).toBeInTheDocument();
  });
});

describe('Password getStrength function', () => {
  it("should return proper percentage for '123456'", () => {
    expect(getStrength('123456')).toEqual(50);
  });
});

describe('Password getStrengthColor function', () => {
  it('should return red color for value less than 50', () => {
    expect(getStrengthColor(50)).toEqual('red');
  });

  it('should return yellow color for value more than 50 but less than 100', () => {
    expect(getStrengthColor(51)).toEqual('yellow');
  });

  it('should return teal color for value equal to 100', () => {
    expect(getStrengthColor(100)).toEqual('teal');
  });
});
