import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #4c5157;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoDesktop = styled.img`
  display: none;
  height: 32px;
  width: auto;
  filter: brightness(0) invert(1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const LogoMobile = styled.img`
  display: block;
  height: 28px;
  width: auto;
  filter: brightness(0) invert(1);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
`;

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme }) => theme.colors.neutral.white};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.neutral.white};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const LegalLink = styled.a`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;
