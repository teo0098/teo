import { Box, PasswordInput, Text, TextInput } from '@teo0098/ui';
import React from 'react';

export const Registration = () => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.colors['gray'][0],
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
    })}
  >
    <Text size="lg" weight="bold">
      Create an account
    </Text>
    <TextInput
      placeholder="Your e-mail"
      label="E-mail"
      description="Your email will be used as a user name"
      withAsterisk
    />
    <PasswordInput />
  </Box>
);
