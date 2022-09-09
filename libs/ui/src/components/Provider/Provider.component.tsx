import { MantineProvider } from '@mantine/core';
import React from 'react';

import { ProviderProps } from './Provider.types';

export const Provider = ({
  children,
  emotionCache,
  inherit,
  theme,
  withCSSVariables,
  withGlobalStyles,
  withNormalizeCSS,
}: ProviderProps) => (
  <MantineProvider
    emotionCache={emotionCache}
    inherit={inherit}
    theme={theme}
    withCSSVariables={withCSSVariables}
    withGlobalStyles={withGlobalStyles}
    withNormalizeCSS={withNormalizeCSS}
  >
    {children}
  </MantineProvider>
);
