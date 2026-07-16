import { Obra } from "@/types";

export const obras: Obra[] = [
  {
    slug: "residencia-contemporanea",
    nome: "Residência contemporânea",
    cidade: "Litoral norte do RS",
    categoria: "Residencial",
    status: "Concluída",
    ano: "",
    areaConstruida: "",
    descricaoResumo:
      "Registro real de uma residência com fachada contemporânea, execução residencial e acabamento externo concluído.",
    descricaoCompleta: [
      "Projeto residencial registrado em fase finalizada, com atenção à fachada, aos volumes da construção e à integração dos espaços externos.",
      "A apresentação do projeto prioriza o material real disponível, sem acrescentar dados não confirmados sobre metragem, prazo, endereço ou cliente.",
    ],
    localizacao: "Osório, Atlântida Sul e litoral norte do RS",
    diferenciais: [
      "Fachada contemporânea",
      "Execução residencial",
      "Acabamento externo",
      "Atenção aos detalhes visíveis da obra",
    ],
    infoTecnica: [
      { label: "Categoria", valor: "Residencial" },
      { label: "Status", valor: "Concluída" },
    ],
    linhaDoTempo: [
      {
        id: "1",
        mes: "Registro real",
        titulo: "Obra documentada",
        descricao: "Fotos reais mostram a construção em diferentes momentos da execução.",
      },
      {
        id: "2",
        mes: "Entrega",
        titulo: "Fachada concluída",
        descricao: "A fachada finalizada foi selecionada como imagem principal do site.",
      },
    ],
    galeria: [
      {
        id: "g1",
        src: "/obras/residencia-contemporanea/fotos/fachada-concluida.webp",
        alt: "Fachada concluída de residência contemporânea executada pela RGR Construtora",
        legenda: "Fachada concluída",
        tipo: "entrega",
      },
      {
        id: "g2",
        src: "/obras/residencia-contemporanea/fotos/fachada-em-obra-ampliada.webp",
        alt: "Fachada residencial em execução",
        legenda: "Fachada em execução",
        tipo: "obra",
      },
      {
        id: "g3",
        src: "/obras/residencia-contemporanea/fotos/estrutura-em-andamento.webp",
        alt: "Estrutura de obra residencial em andamento",
        legenda: "Estrutura em andamento",
        tipo: "obra",
      },
      {
        id: "g4",
        src: "/obras/residencia-contemporanea/fotos/fachada-dia.webp",
        alt: "Fachada de residência contemporânea durante a finalização externa",
        legenda: "Fachada em finalização",
        tipo: "obra",
      },
      {
        id: "g5",
        src: "/obras/residencia-contemporanea/fotos/fachada-noite.webp",
        alt: "Fachada concluída de residência contemporânea iluminada ao entardecer",
        legenda: "Fachada concluída",
        tipo: "entrega",
      },
      {
        id: "g6",
        src: "/obras/residencia-contemporanea/fotos/area-externa-em-preparacao.webp",
        alt: "Área externa de residência em preparação durante a obra",
        legenda: "Área externa em preparação",
        tipo: "obra",
      },
    ],
    videos: [
      {
        id: "v1",
        titulo: "Do projeto à realização",
        duracao: "00:55",
        src: "/videos/obra-residencial.mp4",
        poster: "/videos/obra-residencial-poster.webp",
        descricao: "Registro em vídeo de ambientes, área externa e detalhes de uma obra residencial.",
      },
    ],
    destaque: true,
  },
  {
    slug: "piscina-residencial",
    nome: "Piscina residencial",
    cidade: "Litoral norte do RS",
    categoria: "Piscina",
    status: "Concluída",
    ano: "",
    areaConstruida: "",
    descricaoResumo:
      "Imagem real de piscina residencial, com foco na execução, organização e acabamento da área externa.",
    descricaoCompleta: [
      "A construção de piscinas faz parte dos serviços compatíveis com os registros reais enviados para o site.",
      "Esta página reúne apenas o material disponível, usando uma identificação genérica para não atribuir dados que ainda não foram confirmados.",
    ],
    localizacao: "Osório, Atlântida Sul e litoral norte do RS",
    diferenciais: [
      "Execução de piscina residencial",
      "Área externa valorizada",
      "Acabamento e organização visual",
    ],
    infoTecnica: [
      { label: "Categoria", valor: "Piscina residencial" },
      { label: "Status", valor: "Concluída" },
    ],
    linhaDoTempo: [
      {
        id: "1",
        mes: "Registro real",
        titulo: "Piscina documentada",
        descricao: "Foto real utilizada como capa e galeria do projeto.",
      },
    ],
    galeria: [
      {
        id: "g1",
        src: "/obras/piscina-residencial/fotos/piscina-vista-superior.webp",
        alt: "Piscina residencial executada pela RGR Construtora",
        legenda: "Piscina residencial",
        tipo: "entrega",
      },
    ],
    videos: [],
    destaque: true,
  },
  {
    slug: "obra-em-andamento",
    nome: "Obra em andamento",
    cidade: "Litoral norte do RS",
    categoria: "Obra em andamento",
    status: "Em andamento",
    ano: "",
    areaConstruida: "",
    descricaoResumo:
      "Registros reais de canteiro, estrutura, materiais e acompanhamento durante a execução de uma obra residencial.",
    descricaoCompleta: [
      "Os registros mostram etapas de execução, planejamento e organização do canteiro.",
      "A obra é apresentada de forma neutra para preservar a fidelidade ao material recebido, sem inventar nome, metragem, prazo ou localização específica.",
    ],
    localizacao: "Osório, Atlântida Sul e litoral norte do RS",
    diferenciais: [
      "Acompanhamento da execução",
      "Organização do canteiro",
      "Planejamento de etapas",
      "Registro real da obra em andamento",
    ],
    infoTecnica: [
      { label: "Categoria", valor: "Residencial" },
      { label: "Status", valor: "Em andamento" },
    ],
    linhaDoTempo: [
      {
        id: "1",
        mes: "Execução",
        titulo: "Fundação e planejamento",
        descricao: "Registro real da etapa de preparação e acompanhamento da obra.",
      },
      {
        id: "2",
        mes: "Execução",
        titulo: "Estrutura em andamento",
        descricao: "Fotos mostram a estrutura e o canteiro durante a construção.",
      },
    ],
    galeria: [
      {
        id: "g1",
        src: "/obras/obra-em-andamento/fotos/fundacao-e-planejamento.webp",
        alt: "Canteiro de obra com fundação e planejamento em execução",
        legenda: "Fundação e planejamento",
        tipo: "obra",
      },
      {
        id: "g2",
        src: "/obras/obra-em-andamento/fotos/estrutura-em-execucao.webp",
        alt: "Estrutura de obra residencial em execução",
        legenda: "Estrutura em execução",
        tipo: "obra",
      },
      {
        id: "g3",
        src: "/obras/obra-em-andamento/fotos/materiais-no-canteiro.webp",
        alt: "Materiais organizados no canteiro de obra",
        legenda: "Materiais no canteiro",
        tipo: "obra",
      },
      {
        id: "g4",
        src: "/obras/obra-em-andamento/fotos/muro-estrutura-e-formas.webp",
        alt: "Estrutura e formas de obra residencial em andamento",
        legenda: "Estrutura e formas",
        tipo: "obra",
      },
      {
        id: "g5",
        src: "/obras/obra-em-andamento/fotos/projeto-aberto-no-canteiro.webp",
        alt: "Projeto aberto no canteiro de obras durante a execução",
        legenda: "Projeto no canteiro",
        tipo: "obra",
      },
      {
        id: "g6",
        src: "/obras/obra-em-andamento/fotos/alvenaria-ao-entardecer.webp",
        alt: "Alvenaria e materiais de obra ao entardecer",
        legenda: "Alvenaria ao entardecer",
        tipo: "obra",
      },
      {
        id: "g7",
        src: "/obras/obra-em-andamento/fotos/execucao-interna.webp",
        alt: "Equipe trabalhando em etapa interna de execução residencial",
        legenda: "Execução interna",
        tipo: "obra",
      },
      {
        id: "g8",
        src: "/obras/obra-em-andamento/fotos/acabamento-em-pedra.webp",
        alt: "Acabamento em pedra em ambiente interno residencial",
        legenda: "Acabamento em pedra",
        tipo: "obra",
      },
    ],
    videos: [],
    destaque: true,
  },
];

export function getObraBySlug(slug: string) {
  return obras.find((o) => o.slug === slug);
}

export function getObrasDestaque() {
  return obras.filter((o) => o.destaque);
}
