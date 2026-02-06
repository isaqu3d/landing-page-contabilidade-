import { Typography } from '@/components/Typography';
import { render, screen } from '@/utils/test-utils';

describe('Typography', () => {
  it('renders text content', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders as paragraph by default', () => {
    render(<Typography>Paragraph text</Typography>);
    const element = screen.getByText('Paragraph text');
    expect(element.tagName).toBe('P');
  });

  it('renders as different HTML elements using "as" prop', () => {
    const { rerender } = render(<Typography as="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Typography as="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Typography as="span">Span text</Typography>);
    expect(screen.getByText('Span text').tagName).toBe('SPAN');
  });

  it('renders with different color variants', () => {
    const { rerender } = render(<Typography color="primary">Primary</Typography>);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<Typography color="secondary">Secondary</Typography>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();

    rerender(<Typography color="textPrimary">Text Primary</Typography>);
    expect(screen.getByText('Text Primary')).toBeInTheDocument();

    rerender(<Typography color="textTertiary">Text Tertiary</Typography>);
    expect(screen.getByText('Text Tertiary')).toBeInTheDocument();

    rerender(<Typography color="textDark">Text Dark</Typography>);
    expect(screen.getByText('Text Dark')).toBeInTheDocument();
  });

  it('renders with different size variants', () => {
    const { rerender } = render(<Typography size="xs">Extra Small</Typography>);
    expect(screen.getByText('Extra Small')).toBeInTheDocument();

    rerender(<Typography size="base">Base</Typography>);
    expect(screen.getByText('Base')).toBeInTheDocument();

    rerender(<Typography size="3xl">3XL</Typography>);
    expect(screen.getByText('3XL')).toBeInTheDocument();
  });

  it('renders with different weight variants', () => {
    const { rerender } = render(<Typography weight="regular">Regular</Typography>);
    expect(screen.getByText('Regular')).toBeInTheDocument();

    rerender(<Typography weight="medium">Medium</Typography>);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<Typography weight="bold">Bold</Typography>);
    expect(screen.getByText('Bold')).toBeInTheDocument();
  });

  it('passes additional props to the element', () => {
    render(<Typography data-testid="custom-typography">With data attr</Typography>);
    expect(screen.getByTestId('custom-typography')).toBeInTheDocument();
  });
});
