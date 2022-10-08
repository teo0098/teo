import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import React, { useState } from 'react';

import { Popover } from '~components/Popover';
import { Progress } from '~components/Progress';

import { defaultRequirements } from './PasswordInput.constants';
import { getStrength, getStrengthColor } from './PasswordInput.tools';
import { PasswordInputProps } from './PasswordInput.types';
import { Requirements } from './Requirements';

export const PasswordInput = ({
  requirements = defaultRequirements,
  disableRequirements = false,
  ...props
}: PasswordInputProps) => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');

  if (disableRequirements) {
    return (
      <MantinePasswordInput
        placeholder="Password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        withAsterisk
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        {...props}
      />
    );
  }

  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      width="target"
      transition="pop"
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <MantinePasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            {...props}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb={10} />
        <Requirements
          requirements={requirements}
          renderTextColor={(requirement) => {
            if (requirement.condition.test(value)) {
              return 'teal';
            }

            return 'red';
          }}
        />
      </Popover.Dropdown>
    </Popover>
  );
};
