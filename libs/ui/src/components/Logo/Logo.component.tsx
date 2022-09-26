import React from 'react';

import { LogoAltText, LogoHeight, LogoUrl, LogoWidth } from './Logo.constants';
import { LogoProps } from './Logo.types';

export const Logo = ({
  alt = LogoAltText,
  src = LogoUrl,
  loading = 'lazy',
  size = 'xxs',
  width,
  height,
  ...props
}: LogoProps) => {
  const imageWidth = width ?? LogoWidth[size];
  const imageHeight = height ?? LogoHeight[size];

  return (
    <img
      src={src}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      loading={loading}
      {...props}
    />
  );
};
