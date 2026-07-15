# RGR Construtora — Site Institucional

Site institucional premium construído com **Next.js 15 (App Router)**, **React 19**,
**TypeScript**, **TailwindCSS v4**, **Framer Motion** e **Lucide Icons**.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a build de produção:

```bash
npm run build
npm run start
```

> O projeto foi construído e testado com `npm run build` — 100% das rotas
> compilam de forma estática (SSG), incluindo cada página individual de obra.

## Identidade visual

- **Cores** (`src/app/globals.css`, bloco `:root`): preto profundo (`--color-ink`),
  branco quente (`--color-paper`), vermelho de marca (`--color-bordeaux`) e
  vermelho vivo de ação (`--color-scarlet`).
- **Tipografia**: Fraunces (display/serifada, para títulos), Inter (texto) e
  IBM Plex Mono (dados técnicos, rótulos, números) — carregadas via Google
  Fonts em `src/app/layout.tsx`.
- **Assinatura visual**: em vez de fotografias de banco de imagens, o site usa
  uma linguagem de **ilustração arquitetônica em traço** ("blueprint"),
  desenhada especificamente para a marca:
  - `src/components/illustrations/SkylineDraw.tsx` — o skyline animado do Hero
  - `src/components/illustrations/ProjectArt.tsx` — ilustrações usadas nos
    cards de obra e galerias
  - `src/components/illustrations/BuildingMark.tsx` — marca gráfica (casas
    sobrepostas, inspirada na logo original)
  - `src/components/ui/MediaFrame.tsx` — moldura padrão com grid de blueprint,
    usada como substituto de `<img>` em todo o site

  **Para usar fotos reais**: basta trocar o conteúdo de `MediaFrame` (ou
  substituí-lo por `<Image>` do `next/image`) nos componentes de galeria,
  cards e hero das obras, apontando para os arquivos reais em `/public`.

## Estrutura de pastas

```
src/
  app/
    layout.tsx          # layout raiz, fontes, metadata, JSON-LD (Schema.org)
    page.tsx             # home — composição de todas as seções
    obras/
      page.tsx            # portfólio completo com filtros por categoria
      [slug]/page.tsx      # página individual da obra (SSG)
    sitemap.ts / robots.ts # SEO técnico
  components/
    layout/               # Header, Footer, botão flutuante do WhatsApp
    sections/              # Hero, Sobre, Números, Portfólio, Vídeos,
                            # Serviços, Diferenciais, Depoimentos, CTA, Contato
    ui/                    # Primitivos reutilizáveis (Button, Container,
                            # SectionHeading, Reveal, Counter, VideoModal…)
    illustrations/         # Ilustrações de marca (SVG)
  lib/
    data/                  # Camada de dados mockada — ver "Preparado para expansão"
  types/
    index.ts                # Modelo de dados (Obra, Depoimento, Serviço…)
```

## Preparado para expansão futura

Toda a camada de conteúdo vive em `src/lib/data/*.ts`, tipada por
`src/types/index.ts`, e é consumida pelos componentes via funções simples
(`getObraBySlug`, `obras`, `depoimentos`, etc.). Isso significa que, para
evoluir para um CMS ou painel administrativo, **a camada de apresentação não
precisa mudar** — apenas a origem dos dados:

- **Painel administrativo / upload de obras**: substitua as funções em
  `lib/data/obras.ts` por chamadas a uma API/banco de dados (ex: Postgres +
  Prisma, ou um headless CMS como Sanity/Strapi), mantendo o mesmo formato
  `Obra`.
- **Gerenciamento de imagens e vídeos**: o tipo `ImagemObra`/`VideoObra` já
  prevê metadados (legenda, tipo, duração); basta acrescentar um campo de URL
  quando o storage (S3, Cloudinary etc.) estiver definido.
- **Blog**: criar `app/blog/page.tsx` e `app/blog/[slug]/page.tsx` seguindo o
  mesmo padrão de `app/obras`.
- **Orçamento online / área do cliente**: o formulário em
  `components/sections/Contact.tsx` já isola o estado em React; trocar o
  `handleSubmit` (hoje redireciona ao WhatsApp) por uma chamada a uma API de
  orçamento é direto.
- **Autenticação da área do cliente**: a estrutura App Router já separa bem
  rotas públicas; um grupo de rotas `app/(admin)/` ou `app/area-cliente/` pode
  ser adicionado sem tocar no site público.

## SEO e performance

- Metadata completa (title template, description, Open Graph, Twitter Card)
  em `app/layout.tsx` e por página (`generateMetadata` em `obras/[slug]`).
- `Schema.org` (`GeneralContractor`) via JSON-LD no layout raiz.
- `sitemap.xml` e `robots.txt` gerados dinamicamente a partir dos dados reais
  de obras.
- Todas as páginas de obra são pré-renderizadas estaticamente
  (`generateStaticParams`).
- Animações respeitam `prefers-reduced-motion`.
- Foco visível (`:focus-visible`) e link "Pular para o conteúdo" para
  acessibilidade via teclado.

## Desenvolvido por InovaFlow
