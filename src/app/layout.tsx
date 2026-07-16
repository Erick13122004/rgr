import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { empresa } from "@/lib/data/empresa";

const siteUrl = "https://www.rgrconstrutora.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${empresa.nome} | Construção civil e piscinas no RS`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    "Experiência construída desde 2010 em obras residenciais, reformas, projetos de maior porte e construção de piscinas no litoral gaúcho.",
  keywords: [
    "construtora Rio Grande do Sul",
    "construtora RS",
    "construção residencial",
    "construção de piscinas",
    "piscinas litoral gaúcho",
    "reformas RS",
    "RGR Construtora",
  ],
  authors: [{ name: empresa.nome }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: empresa.nome,
    title: `${empresa.nome} | Construção civil e piscinas no RS`,
    description:
      "Conheça a trajetória da RGR: experiência prática desde 2010, atuação independente iniciada em 2016 e presença no litoral gaúcho.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: empresa.nome }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${empresa.nome} | Construção civil e piscinas no RS`,
    description: "Experiência construída desde 2010 com trabalho, qualidade e confiança.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: empresa.nome,
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: `+${empresa.whatsapp}`,
  email: empresa.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  areaServed: "Rio Grande do Sul",
  sameAs: [empresa.instagram],
  description:
    "Construtora com atuação em obras residenciais, reformas, projetos de maior porte e construção de piscinas no litoral gaúcho.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="font-sans bg-ink text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-scarlet focus:text-paper focus:px-4 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
