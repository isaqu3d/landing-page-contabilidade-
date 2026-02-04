'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/Button';
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

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Logo href="/">
          contabilidade<span>.com</span>
        </S.Logo>

        <S.Nav $isOpen={isMenuOpen}>
          <S.CloseButton onClick={closeMenu} aria-label="Fechar menu">
            <X size={24} />
          </S.CloseButton>

          <S.NavList>
            {navItems.map((item) => (
              <S.NavItem key={item.label}>
                <S.NavLink href={item.href} onClick={closeMenu}>
                  {item.label}
                </S.NavLink>
              </S.NavItem>
            ))}
          </S.NavList>

          <S.NavActions>
            <S.LoginButton href="#login">Entrar</S.LoginButton>
            <Button variant="primary">Abrir CNPJ grátis</Button>
          </S.NavActions>
        </S.Nav>

        <S.MenuButton $isOpen={isMenuOpen} onClick={toggleMenu} aria-label="Abrir menu">
          <Menu size={24} />
        </S.MenuButton>

        <S.Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
      </S.Container>
    </S.HeaderWrapper>
  );
}
