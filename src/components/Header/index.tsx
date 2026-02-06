'use client';

import { Button } from '@/components/Button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import * as S from './styles';

const navItems = [
  { label: 'Planos e Preços', href: '#planos' },
  { label: 'Abrir CNPJ', href: '#abrir-cnpj' },
  { label: 'Trocar de Contador', href: '#trocar-contador' },
  { label: 'Conteúdos', href: '#conteudos' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Logo href="/" aria-label="Ir para página inicial - contabilidade.com">
          <S.LogoDesktop src="/logo.svg" alt="contabilidade.com" />
          <S.LogoMobile src="/logo-menu.svg" alt="contabilidade.com" />
        </S.Logo>

        <S.Nav $isOpen={isMenuOpen} aria-label="Menu principal" role="navigation">
          <S.CloseButton onClick={closeMenu} aria-label="Fechar menu de navegação">
            <X size={24} aria-hidden="true" />
          </S.CloseButton>

          <S.NavList role="list">
            {navItems.map((item) => (
              <S.NavItem key={item.label} role="listitem">
                <S.NavLink href={item.href} onClick={closeMenu}>
                  {item.label}
                </S.NavLink>
              </S.NavItem>
            ))}
          </S.NavList>

          <S.NavActions>
            <S.LoginButton href="#login">Entrar</S.LoginButton>
            <Button color="primary">Abrir CNPJ grátis</Button>
          </S.NavActions>
        </S.Nav>

        <S.MenuButton
          $isOpen={isMenuOpen}
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <Menu size={24} aria-hidden="true" />
        </S.MenuButton>

        <S.Overlay
          $isOpen={isMenuOpen}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </S.Container>
    </S.HeaderWrapper>
  );
}
