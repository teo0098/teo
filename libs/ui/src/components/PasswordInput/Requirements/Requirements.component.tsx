import React from 'react';

import { Box } from '~components/Box';
import { Text } from '~components/Text';

import { RequirementsProps } from './Requirements.types';

export const Requirements = ({
  requirements,
  renderTextColor,
}: RequirementsProps) => (
  <>
    {requirements.map((requirement) => (
      <Text
        key={requirement.label}
        color={renderTextColor(requirement)}
        sx={{ display: 'flex', alignItems: 'center' }}
        mt={7}
        size="sm"
      >
        <Box ml={10}>{requirement.label}</Box>
      </Text>
    ))}
  </>
);
