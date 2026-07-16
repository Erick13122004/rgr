import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { empresa } from "@/lib/data/empresa";

const siteUrl = "https://rgrconstrutora.net.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${empresa.nome} | Construção residencial em Osório e litoral norte`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    "RGR Construtora em Osório - RS e Atlântida Sul: construção residencial, reformas, piscinas e acompanhamento de obras no litoral norte do Rio Grande do Sul.",
  keywords: [
    "RGR Construtora",
    "construtora Osório RS",
    "construtora Atlântida Sul",
    "construtora litoral norte RS",
    "construtora Rio Grande do Sul",
    "construção residencial",
    "execução de obras",
    "reformas residenciais",
    "construção de piscinas",
  ],
  authors: [{ name: empresa.nome }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: empresa.nome,
    title: `${empresa.nome} | Construção residencial em Osório e litoral norte`,
    description:
      "Conheça registros reais de obras residenciais, piscinas e etapas de execução da RGR Construtora em Osório, Atlântida Sul e litoral norte.",
    images: [
      {
        url: "/brand/og-logo-rgr.png",
        width: 1200,
        height: 630,
        alt: "Logo da RGR Construtora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${empresa.nome} | Construção residencial em Osório e litoral norte`,
    description: empresa.slogan,
    images: ["/brand/og-logo-rgr.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  name: empresa.nome,
  image: `${siteUrl}/brand/logo-rgr.png`,
  url: siteUrl,
  telephone: `+${empresa.whatsapp}`,
  email: empresa.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Osório",
    addressRegion: "RS",
    streetAddress: "Atlântida Sul",
    addressCountry: "BR",
  },
  areaServed: empresa.areaAtuacao,
  hasMap: "https://www.google.com/maps?q=Atl%C3%A2ntida+Sul,+Os%C3%B3rio+-+RS",
  sameAs: [empresa.instagram],
  description: empresa.missao,
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
