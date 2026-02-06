import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2BBE41',
};

export const metadata: Metadata = {
  title: {
    default: 'Contabilidade Online | contabilidade.com',
    template: '%s | contabilidade.com',
  },
  description:
    'Contabilidade online a partir de R$ 159/mês. Abertura de empresa grátis, certificado digital incluso e atendimento personalizado. Simplifique sua contabilidade.',
  keywords: [
    'contabilidade online',
    'contador online',
    'abrir empresa',
    'abrir CNPJ',
    'MEI',
    'contabilidade digital',
    'contador digital',
    'contabilidade para empresas',
  ],
  authors: [{ name: 'contabilidade.com' }],
  creator: 'contabilidade.com',
  publisher: 'contabilidade.com',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://contabilidade.com',
    siteName: 'contabilidade.com',
    title: 'Contabilidade Online a partir de R$ 159/mês | contabilidade.com',
    description:
      'Contabilidade online completa com abertura de empresa grátis, certificado digital incluso e atendimento personalizado.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'contabilidade.com - Contabilidade Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contabilidade Online a partir de R$ 159/mês',
    description:
      'Contabilidade online completa com abertura de empresa grátis e certificado digital incluso.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
