// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Logo } from './Logo.component';
import { LogoAltText, LogoHeight, LogoWidth } from './Logo.constants';

describe('Logo', () => {
  it('should render successfully', () => {
    render(<Logo />);

    expect(screen.getByAltText(LogoAltText)).toBeInTheDocument();
  });

  it('should render with custom alt text', () => {
    const customAltText = 'Custom alt text';

    render(<Logo alt={customAltText} />);

    expect(screen.getByAltText(customAltText)).toBeInTheDocument();
  });

  it('should render with custom src', () => {
    const customSrc = 'https://custom.src';

    render(<Logo src={customSrc} />);

    expect(screen.getByAltText(LogoAltText)).toHaveAttribute('src', customSrc);
  });

  it('should render with custom size', () => {
    render(<Logo size="xl" />);

    const logo = screen.getByAltText(LogoAltText);

    expect(logo).toHaveAttribute('width', LogoWidth.xl.toString());
    expect(logo).toHaveAttribute('height', LogoHeight.xl.toString());
  });

  it('should render with custom width and height', () => {
    const customWidth = 100;
    const customHeight = 200;

    render(<Logo width={customWidth} height={customHeight} />);

    const logo = screen.getByAltText(LogoAltText);

    expect(logo).toHaveAttribute('width', customWidth.toString());
    expect(logo).toHaveAttribute('height', customHeight.toString());
  });

  it('should render with custom loading', () => {
    const customLoading = 'eager';

    render(<Logo loading={customLoading} />);

    expect(screen.getByAltText(LogoAltText)).toHaveAttribute(
      'loading',
      customLoading
    );
  });

  it('should render with custom width and height when size is also provided', () => {
    const customWidth = 100;
    const customHeight = 200;

    render(<Logo size="xl" width={customWidth} height={customHeight} />);

    const logo = screen.getByAltText(LogoAltText);

    expect(logo).toHaveAttribute('width', customWidth.toString());
    expect(logo).toHaveAttribute('height', customHeight.toString());
  });
});
