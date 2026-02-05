'use client';

import { ElementType, HTMLAttributes } from 'react';
import * as S from './styles';

type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'textLight'
  | 'textInverse';

type SizeVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type WeightVariant = 'regular' | 'medium' | 'semibold' | 'bold';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  color?: ColorVariant;
  size?: SizeVariant;
  weight?: WeightVariant;
  children: React.ReactNode;
}

export function Typography({
  as = 'p',
  color = 'textPrimary',
  size = 'base',
  weight = 'regular',
  children,
  ...props
}: TypographyProps) {
  return (
    <S.Text as={as} $color={color} $size={size} $weight={weight} {...props}>
      {children}
    </S.Text>
  );
}
