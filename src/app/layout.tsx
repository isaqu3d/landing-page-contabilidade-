import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contabilidade",
  description: "Serviços de contabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
