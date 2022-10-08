import { MantineColor } from '@mantine/core';

import { defaultRequirements } from './PasswordInput.constants';

export function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  defaultRequirements.forEach((requirement) => {
    if (!requirement.condition.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(
    100 - (100 / (defaultRequirements.length + 1)) * multiplier,
    10
  );
}

export function getStrengthColor(strength: number): MantineColor {
  if (strength === 100) {
    return 'teal';
  }

  if (strength > 50) {
    return 'yellow';
  }

  return 'red';
}
