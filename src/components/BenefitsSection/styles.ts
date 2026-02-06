import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 376px;
  aspect-ratio: 376 / 309;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  order: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    display: block;
    transform: scaleX(-1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1;
    flex-shrink: 0;
    width: 376px;
  }
`;

export const Content = styled.div`
  order: 1;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
    text-align: left;
    margin-bottom: 0;
    flex: 1;
  }
`;

export const Highlight = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;
