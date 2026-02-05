import styled, { css, DefaultTheme } from 'styled-components';

type ColorVariant = 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
type SizeVariant = 'sm' | 'md' | 'lg';
type StyleVariant = 'solid' | 'outline' | 'ghost';

interface StyledButtonProps {
  $color: ColorVariant;
  $size: SizeVariant;
  $variant: StyleVariant;
  $fullWidth: boolean;
}

const getColorValues = (color: ColorVariant, theme: DefaultTheme) => {
  const colorMap = {
    primary: {
      main: theme.colors.primary.main,
      hover: theme.colors.primary.light,
      text: theme.colors.text.inverse,
    },
    secondary: {
      main: theme.colors.secondary,
      hover: '#1a5cb8',
      text: theme.colors.text.inverse,
    },
    neutral: {
      main: theme.colors.neutral.medium,
      hover: theme.colors.neutral.light,
      text: theme.colors.text.dark,
    },
    success: {
      main: '#22c55e',
      hover: '#16a34a',
      text: theme.colors.text.inverse,
    },
    danger: {
      main: '#ef4444',
      hover: '#dc2626',
      text: theme.colors.text.inverse,
    },
  };

  return colorMap[color];
};

const getSizeStyles = (size: SizeVariant, theme: DefaultTheme) => {
  const sizeMap = {
    sm: css`
      padding: 0.5rem 1rem;
      font-size: ${theme.fonts.size.sm};
    `,
    md: css`
      padding: 0.75rem 1.5rem;
      font-size: ${theme.fonts.size.base};
    `,
    lg: css`
      padding: 1rem 2rem;
      font-size: ${theme.fonts.size.lg};
    `,
  };

  return sizeMap[size];
};

const getVariantStyles = (
  variant: StyleVariant,
  color: ColorVariant,
  theme: DefaultTheme
) => {
  const colors = getColorValues(color, theme);

  switch (variant) {
    case 'solid':
      return css`
        background-color: ${colors.main};
        color: ${colors.text};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background-color: ${colors.hover};
        }
      `;

    case 'outline':
      return css`
        background-color: transparent;
        color: ${colors.main};
        border: 1px solid ${colors.main};

        &:hover:not(:disabled) {
          background-color: ${colors.main};
          color: ${colors.text};
        }
      `;

    case 'ghost':
      return css`
        background-color: transparent;
        color: ${colors.main};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background-color: ${colors.main}15;
        }
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $size, theme }) => getSizeStyles($size, theme)}
  ${({ $variant, $color, theme }) => getVariantStyles($variant, $color, theme)}

  &:focus-visible {
    outline: 2px solid ${({ $color, theme }) => getColorValues($color, theme).main};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
