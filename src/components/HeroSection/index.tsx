'use client';

import { Button } from '@/components/Button';
import Image from 'next/image';
import * as S from './styles';

export function HeroSection() {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Title>Quanto custa a contabilidade online em 2026?</S.Title>

          <S.Description>
            Descubra os preços médios do mercado e veja como a contabilidade.com oferece planos
            acessíveis, abertura grátis e suporte completo para o seu CNPJ.
          </S.Description>

          <S.ButtonGroup>
            <Button variant="secondary">Planos e Preços</Button>
            <Button variant="secondary" outline>
              Falar com Especialista
            </Button>
          </S.ButtonGroup>

          <S.Badge>CRC SP-2SP038830/O-1</S.Badge>
        </S.Content>

        <S.ImageWrapper>
          <Image
            src="/woman-working.png"
            alt="Profissional sorrindo enquanto trabalha no laptop"
            width={476}
            height={326}
          />
        </S.ImageWrapper>
      </S.Container>
    </S.Section>
  );
}
