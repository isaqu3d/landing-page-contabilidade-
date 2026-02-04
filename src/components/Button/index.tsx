'use client';

import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  outline?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'secondary',
  outline = false,
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.StyledButton $variant={variant} $outline={outline} $fullWidth={fullWidth} {...props}>
      {children}
    </S.StyledButton>
  );
}
