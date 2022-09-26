import type { Size } from '@teo0098/types';

export type LogoProps = JSX.IntrinsicElements['img'] & { size?: Size };

export type LogoSizeType = Record<Size, number>;
