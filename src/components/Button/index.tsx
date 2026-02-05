'use client';

import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ColorVariant = 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
type SizeVariant = 'sm' | 'md' | 'lg';
type StyleVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorVariant;
  size?: SizeVariant;
  variant?: StyleVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  color = 'primary',
  size = 'md',
  variant = 'solid',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.StyledButton
      $color={color}
      $size={size}
      $variant={variant}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </S.StyledButton>
  );
}
