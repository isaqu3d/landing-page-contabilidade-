'use client';

import Image from 'next/image';
import { Typography } from '../Typography';
import * as S from './styles';

export function BenefitsSection() {
  return (
    <S.Section>
      <S.Container>
        <S.ImageWrapper>
          <Image
            src="/woman-notebook.png"
            alt="Profissional sorrindo enquanto trabalha no laptop"
            width={376}
            height={309}
          />
        </S.ImageWrapper>

        <S.Content>
          <Typography
            weight="medium"
            size="3xl"
            as="h1"
            style={{ marginBottom: 32 }}
            color="textDark"
          >
            O preço da contabilidade no Brasil
          </Typography>

          <Typography weight="medium" size="base" style={{ marginBottom: 16 }} color="textTertiary">
            Um contador tradicional costuma cobrar entre <S.Highlight>R$ 600</S.Highlight> e{' '}
            <S.Highlight>R$ 1.200</S.Highlight> por mês para empresas de serviços de pequeno porte.
            Esse valor varia de acordo com o regime tributário, quantidade de notas fiscais emitidas
            e folha de pagamento.
          </Typography>
          <Typography color="textTertiary" weight="medium" size="base" style={{ marginBottom: 16 }}>
            O problema é que, além do preço mais alto, a contabilidade tradicional geralmente
            envolve mais burocracia, digitação e processos manuais.
          </Typography>
        </S.Content>
      </S.Container>
    </S.Section>
  );
}
