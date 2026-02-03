import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary';
  $fullWidth: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.text.inverse};

          &:hover {
            background-color: ${theme.colors.primary.light};
          }

          &:focus-visible {
            outline: 2px solid ${theme.colors.primary.main};
            outline-offset: 2px;
          }
        `
      : css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.inverse};

          &:hover {
            opacity: 0.9;
          }

          &:focus-visible {
            outline: 2px solid ${theme.colors.secondary};
            outline-offset: 2px;
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
