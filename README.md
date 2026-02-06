# Landing Page - Contabilidade.com

Landing page institucional desenvolvida com React, Next.js e styled-components, seguindo as melhores práticas de desenvolvimento front-end.

## Seções Implementadas

1. **Hero Section** - Seção principal com chamada para ação
2. **Benefits Section** - Seção "O preço da contabilidade no Brasil"

Além disso, foram implementados o **Header** e **Footer** para completar a estrutura da página.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js 18.x ou superior (recomendado: 20.x)
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone git@github.com:isaqu3d/landing-page-contabilidade.git

# Entrar na pasta do projeto
cd landipage-contabilidade

# Instalar dependências
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
# Build de produção
npm run build

# Executar build de produção
npm start

# Executar linter
npm run lint

# Corrigir problemas de lint automaticamente
npm run lint:fix

# Verificar formatação
npm run format:check

# Formatar código
npm run format

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## Decisões Técnicas

### Por que styled-components?

Escolhi **styled-components** pelos seguintes motivos:

1. **CSS-in-JS**: Permite escrever CSS dentro do JavaScript, facilitando a componentização e evitando conflitos de classes
2. **Theming nativo**: Suporte integrado para temas, permitindo criar um design system consistente
3. **Props dinâmicas**: Facilita a criação de variantes de componentes (cores, tamanhos, estados)
4. **Escopo automático**: Classes geradas automaticamente evitam vazamento de estilos
5. **Experiência com a biblioteca**: Familiaridade prévia com a ferramenta

### Estrutura de Pastas

```
src/
├── __tests__/          # Testes unitários dos componentes
├── app/                # Páginas e layout (Next.js App Router)
├── components/         # Componentes reutilizáveis
│   ├── Button/
│   ├── Typography/
│   ├── Header/
│   ├── Footer/
│   ├── HeroSection/
│   └── BenefitsSection/
├── providers/          # Context providers (ThemeProvider)
├── styles/             # Estilos globais e design tokens
│   ├── theme.ts        # Design tokens (cores, fontes, espaçamentos)
│   ├── GlobalStyles.ts # Estilos globais da aplicação
│   └── styled.d.ts     # Tipagem do tema para TypeScript
├── utils/              # Utilitários (test-utils)
└── lib/                # Configurações de bibliotecas
```

### Design System

Foi criado um design system básico com tokens centralizados em `src/styles/theme.ts`:

- **Cores**: Primária (verde), secundária (azul), neutras e de texto
- **Tipografia**: Tamanhos de xs (12px) a 5xl (48px), pesos de 400 a 700
- **Espaçamentos**: Escala de xs (4px) a 4xl (64px)
- **Border Radius**: sm, md, lg, xl, full
- **Breakpoints**: mobile (360px), tablet (768px), desktop (1024px), wide (1440px)

### Componentização

Os componentes foram pensados para serem reutilizáveis:

- **Button**: Suporta variantes de cor (primary, secondary, danger), tamanho (sm, md, lg) e estilo (solid, outline, ghost)
- **Typography**: Suporta diferentes tags HTML (h1-h6, p, span), cores, tamanhos e pesos

## Pontos Não Especificados no Figma

Algumas decisões foram tomadas onde o Figma não especificava claramente:

1. **Menu Mobile**: Implementei um menu lateral (drawer) que desliza da direita, com overlay escuro e botão de fechar. O menu fecha também ao pressionar ESC ou clicar fora.

2. **Estados de Hover**:
   - Links do header mudam para cor primária (verde)
   - Botões têm leve escurecimento
   - Links do footer têm transição de opacidade

3. **Logo Responsiva**: Utilizei duas versões do logo - uma completa para desktop e uma compacta para mobile.

4. **Imagem da Benefits Section**: A imagem foi espelhada horizontalmente para melhor composição visual com o texto à direita.

5. **Footer**: Criei uma versão simplificada com logo, links de navegação, redes sociais e informações legais.

## Bibliotecas Externas

| Biblioteca | Versão | Justificativa |
|------------|--------|---------------|
| styled-components | 6.3.8 | Estilização CSS-in-JS (requisito do teste) |
| lucide-react | 0.563.0 | Ícones SVG otimizados e consistentes |

Ambas são bibliotecas leves e amplamente utilizadas no mercado.

## Acessibilidade

Foram implementadas práticas básicas de acessibilidade:

- Semântica HTML correta (`<header>`, `<nav>`, `<main>`, `<footer>`, `<button>`)
- Atributos ARIA (`aria-label`, `aria-expanded`, `aria-controls`, `role`)
- Estado de foco visível em elementos interativos
- Textos alternativos em imagens (`alt`)
- Navegação por teclado (ESC fecha menu mobile)
- Links de redes sociais com `target="_blank"` e `rel="noopener noreferrer"`

## Testes

O projeto inclui testes automatizados como diferencial:

- **34 testes** cobrindo os principais componentes
- **100% de cobertura** em statements, functions e lines
- Ferramentas: Jest + React Testing Library

```bash
# Executar testes
npm test

# Ver cobertura
npm run test:coverage
```

## Responsividade

O layout foi desenvolvido com abordagem mobile-first e testado nas seguintes larguras:

- **Mobile**: 360px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Wide**: 1440px

## Qualidade de Código

- **ESLint**: Configurado para TypeScript e React
- **Prettier**: Formatação consistente do código
- **TypeScript**: Tipagem estática em todo o projeto

---

Desenvolvido por Isaque
