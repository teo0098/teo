import { ArrayElement, NotNullishObj } from '@teo0098/types';

import { TextProps } from '~components/Text';

import { PasswordInputBaseProps } from '../PasswordInput.types';

type Requirements = NotNullishObj<Pick<PasswordInputBaseProps, 'requirements'>>;

export type RequirementsProps = Requirements & {
  renderTextColor: (
    requirement: ArrayElement<Requirements['requirements']>
  ) => TextProps['color'];
};
