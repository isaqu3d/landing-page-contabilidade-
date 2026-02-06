import { Header } from '@/components/Header';
import { render, screen } from '@/utils/test-utils';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByLabelText(/ir para página inicial/i)).toBeInTheDocument();
    expect(screen.getAllByAltText('contabilidade.com').length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Planos e Preços')).toBeInTheDocument();
    expect(screen.getByText('Abrir CNPJ')).toBeInTheDocument();
    expect(screen.getByText('Trocar de Contador')).toBeInTheDocument();
    expect(screen.getByText('Conteúdos')).toBeInTheDocument();
  });

  it('renders login button and CTA', () => {
    render(<Header />);
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /abrir cnpj grátis/i })).toBeInTheDocument();
  });

  it('renders mobile menu button with correct aria attributes', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText(/abrir menu de navegação/i);
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles aria-expanded when menu button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByLabelText(/abrir menu de navegação/i);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders close button for mobile menu', () => {
    render(<Header />);
    expect(screen.getByLabelText(/fechar menu de navegação/i)).toBeInTheDocument();
  });

  it('closes menu when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByLabelText(/abrir menu de navegação/i);
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const closeButton = screen.getByLabelText(/fechar menu de navegação/i);
    await user.click(closeButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when Escape key is pressed', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByLabelText(/abrir menu de navegação/i);
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Escape}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('has accessible navigation landmark', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: /menu principal/i })).toBeInTheDocument();
  });
});
