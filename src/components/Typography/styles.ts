import styled, { DefaultTheme } from 'styled-components';

type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'textLight'
  | 'textInverse';

type SizeVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type WeightVariant = 'regular' | 'medium' | 'semibold' | 'bold';

interface TextProps {
  $color: ColorVariant;
  $size: SizeVariant;
  $weight: WeightVariant;
}

const getColor = (color: ColorVariant, theme: DefaultTheme): string => {
  const colorMap: Record<ColorVariant, string> = {
    primary: theme.colors.primary.main,
    secondary: theme.colors.secondary,
    textPrimary: theme.colors.text.primary,
    textSecondary: theme.colors.text.secondary,
    textLight: theme.colors.text.light,
    textInverse: theme.colors.text.inverse,
  };

  return colorMap[color];
};

const getSize = (size: SizeVariant, theme: DefaultTheme): string => {
  return theme.fonts.size[size];
};

const getWeight = (weight: WeightVariant, theme: DefaultTheme): number => {
  return theme.fonts.weight[weight];
};

export const Text = styled.p<TextProps>`
  color: ${({ $color, theme }) => getColor($color, theme)};
  font-size: ${({ $size, theme }) => getSize($size, theme)};
  font-weight: ${({ $weight, theme }) => getWeight($weight, theme)};
  font-family: ${({ theme }) => theme.fonts.family.primary};
  line-height: ${({ theme }) => theme.fonts.lineHeight.normal};
  margin: 0;
`;
