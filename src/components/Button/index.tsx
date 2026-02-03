'use client';

import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'secondary',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.StyledButton $variant={variant} $fullWidth={fullWidth} {...props}>
      {children}
    </S.StyledButton>
  );
}
