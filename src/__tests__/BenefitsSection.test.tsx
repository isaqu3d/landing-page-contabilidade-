import { BenefitsSection } from '@/components/BenefitsSection';
import { render, screen } from '@/utils/test-utils';

describe('BenefitsSection', () => {
  it('renders the section title', () => {
    render(<BenefitsSection />);
    expect(screen.getByText('O preço da contabilidade no Brasil')).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<BenefitsSection />);
    expect(
      screen.getByAltText('Profissional sorrindo enquanto trabalha no laptop')
    ).toBeInTheDocument();
  });

  it('renders the price range highlighted', () => {
    render(<BenefitsSection />);
    expect(screen.getByText('R$ 600')).toBeInTheDocument();
    expect(screen.getByText('R$ 1.200')).toBeInTheDocument();
  });

  it('renders the description paragraphs', () => {
    render(<BenefitsSection />);
    expect(
      screen.getByText(/Um contador tradicional costuma cobrar entre/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/O problema é que, além do preço mais alto/i)
    ).toBeInTheDocument();
  });
});
