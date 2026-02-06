import { Footer } from '@/components/Footer';
import { render, screen } from '@/utils/test-utils';

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />);
    expect(screen.getAllByAltText('contabilidade.com').length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Planos')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  it('renders social links with correct attributes', () => {
    render(<Footer />);
    const instagramLink = screen.getByLabelText('Instagram');
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Termos de Uso')).toBeInTheDocument();
    expect(screen.getByText('Política de Privacidade')).toBeInTheDocument();
  });
});
