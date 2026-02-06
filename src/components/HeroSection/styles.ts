import styled from 'styled-components';

export const Section = styled.section`
  background: radial-gradient(
    circle at top left,
    #d4ffd1 10%,
    ${({ theme }) => theme.colors.background} 40%
  );

  width: 100vw;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.xl};
    gap: 1.75rem;
  }
`;

export const Content = styled.div`
  width: 473px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    max-width: 473px;
    padding-top: ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size['3xl']};
  line-height: ${({ theme }) => theme.fonts.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.base};
  line-height: ${({ theme }) => theme.fonts.lineHeight.normal};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Badge = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.text.light};
  margin-top: ${({ theme }) => theme.spacing.md};
  display: block;
`;

export const VideoWrapper = styled.div`
  width: 476px;
  height: 326px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    max-width: 476px;
    height: 268px;
  }
`;
