import styled, { css, DefaultTheme } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary';
  $outline: boolean;
  $fullWidth: boolean;
}

const getButtonStyles = (
  variant: 'primary' | 'secondary',
  outline: boolean,
  theme: DefaultTheme
) => {
  const color = variant === 'primary' ? theme.colors.primary.main : theme.colors.secondary;
  const hoverColor = variant === 'primary' ? theme.colors.primary.light : '#1d5bb8';

  if (outline) {
    return css`
      background-color: transparent;
      border: 1px solid ${color};
      color: ${color};

      &:hover {
        border-color: ${hoverColor};
        color: ${hoverColor};
      }

      &:focus-visible {
        outline: 2px solid ${color};
        outline-offset: 2px;
      }
    `;
  }

  return css`
    background-color: ${color};
    color: ${theme.colors.text.inverse};
    border: 1px solid transparent;

    &:hover {
      background-color: ${hoverColor};
    }

    &:focus-visible {
      outline: 2px solid ${color};
      outline-offset: 2px;
    }
  `;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, $outline, theme }) => getButtonStyles($variant, $outline, theme)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
