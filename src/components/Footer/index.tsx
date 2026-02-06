'use client';

import { Instagram, Linkedin, Youtube } from 'lucide-react';
import * as S from './styles';

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Planos', href: '#' },
  { label: 'Sobre', href: '#' },
  { label: 'Contato', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/contabilidade.com.oficial', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@contabilidade.com.oficial', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/contabilidadeoficial', label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Container>
        <S.TopSection>
          <S.Logo>
            <S.LogoDesktop src="/logo.svg" alt="contabilidade.com" />
            <S.LogoMobile src="/logo-menu.svg" alt="contabilidade.com" />
          </S.Logo>

          <S.Nav>
            {navLinks.map((link) => (
              <S.NavLink key={link.label} href={link.href}>
                {link.label}
              </S.NavLink>
            ))}
          </S.Nav>

          <S.SocialLinks>
            {socialLinks.map((social) => (
              <S.SocialLink
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon />
              </S.SocialLink>
            ))}
          </S.SocialLinks>
        </S.TopSection>

        <S.Divider />

        <S.BottomSection>
          <S.Copyright>
            © {currentYear} contabilidade.com. Todos os direitos reservados.
          </S.Copyright>

          <S.LegalLinks>
            <S.LegalLink href="#">Termos de Uso</S.LegalLink>
            <S.LegalLink href="#">Política de Privacidade</S.LegalLink>
          </S.LegalLinks>
        </S.BottomSection>
      </S.Container>
    </S.Footer>
  );
}
