import { PasswordInputProps as MantinePasswordInputProps } from '@mantine/core';

export type PasswordRequirement = {
  condition: RegExp;
  label: string;
};

export type PasswordInputBaseProps = {
  requirements?: PasswordRequirement[];
  disableRequirements?: boolean;
};

export type PasswordInputProps = MantinePasswordInputProps &
  PasswordInputBaseProps;
