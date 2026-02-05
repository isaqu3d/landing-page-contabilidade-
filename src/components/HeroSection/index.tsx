'use client';

import { Button } from '@/components/Button';

import { Typography } from '../Typography';
import * as S from './styles';

export function HeroSection() {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <Typography size="3xl" weight="semibold" as="h1" color="textDark">
            Quanto custa a contabilidade online em 2026?
          </Typography>

          <Typography color="textTertiary" weight="medium">
            Descubra os preços médios do mercado e veja como a contabilidade.com oferece planos
            acessíveis, abertura grátis e suporte completo para o seu CNPJ.
          </Typography>

          <S.ButtonGroup>
            <Button variant="secondary">Planos e Preços</Button>
            <Button variant="secondary" outline>
              Falar com Especialista
            </Button>
          </S.ButtonGroup>

          <S.Badge>CRC SP-2SP038830/O-1</S.Badge>
        </S.Content>

        <S.VideoWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2RnnraJoW4w?si=5vfabZuIKmCd7PjA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </S.VideoWrapper>
      </S.Container>
    </S.Section>
  );
}
