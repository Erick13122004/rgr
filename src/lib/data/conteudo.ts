import { Depoimento, Servico, Diferencial, VideoDestaque } from "@/types";

export const depoimentos: Depoimento[] = [
  {
    id: "d1",
    nome: "Fernanda Costa",
    cidade: "Porto Alegre, RS",
    obra: "Residência Vista Verde",
    texto:
      "A RGR conduziu cada etapa da nossa casa com uma transparência que não víamos em outras construtoras. Cada real investido foi explicado, cada prazo foi cumprido.",
    nota: 5,
  },
  {
    id: "d2",
    nome: "Marcelo Andrade",
    cidade: "Canoas, RS",
    obra: "Edifício Horizonte",
    texto:
      "Comprei na planta e recebi exatamente o que foi prometido, no prazo combinado. A equipe da RGR mantinha a gente informado semanalmente sobre o andamento da obra.",
    nota: 5,
  },
  {
    id: "d3",
    nome: "Juliana e Rafael",
    cidade: "São Leopoldo, RS",
    obra: "Cobertura Jardim Europa",
    texto:
      "Fizemos a reforma da nossa cobertura com a RGR e o cuidado com os detalhes foi impressionante. Recomendamos de olhos fechados.",
    nota: 5,
  },
  {
    id: "d4",
    nome: "Eduardo Lima",
    cidade: "Gravataí, RS",
    obra: "Plaza Center Comercial",
    texto:
      "Precisávamos de uma construtora que entendesse prazo comercial. A RGR entregou nossas salas prontas para operar, sem surpresas no orçamento.",
    nota: 4,
  },
];

export const servicos: Servico[] = [
  {
    id: "s1",
    titulo: "Construção residencial",
    descricao:
      "Casas e obras residenciais completas, com acompanhamento próximo do início à conclusão.",
    itens: ["Obras completas", "Estrutura e alvenaria", "Acabamento com qualidade"],
    icone: "home",
  },
  {
    id: "s2",
    titulo: "Projetos de maior porte",
    descricao:
      "Atuação em obras maiores, com experiência acumulada em projetos importantes em Gramado e região.",
    itens: ["Equipe ampliada", "Execução por etapas", "Acompanhamento técnico"],
    icone: "building",
  },
  {
    id: "s3",
    titulo: "Reformas",
    descricao:
      "Retrofit e reformas completas com planejamento que minimiza transtornos durante a execução.",
    itens: ["Reforma estrutural", "Ampliações", "Modernização de instalações"],
    icone: "hammer",
  },
  {
    id: "s4",
    titulo: "Administração de Obras",
    descricao:
      "Gestão técnica e financeira de obras de terceiros, com relatórios periódicos e controle de qualidade.",
    itens: ["Cronograma físico-financeiro", "Fiscalização técnica", "Relatórios periódicos"],
    icone: "clipboard",
  },
  {
    id: "s5",
    titulo: "Construção de piscinas",
    descricao:
      "Execução de piscinas com a experiência que tornou a RGR referência regional no litoral gaúcho.",
    itens: ["Planejamento da execução", "Qualidade no acabamento", "Acompanhamento próximo"],
    icone: "ruler",
  },
];

export const diferenciais: Diferencial[] = [
  {
    id: "df1",
    titulo: "Atendimento personalizado",
    descricao: "Um único ponto de contato acompanha sua obra do início ao fim, sem intermediários.",
    icone: "handshake",
  },
  {
    id: "df2",
    titulo: "Transparência total",
    descricao: "Relatórios periódicos de andamento físico e financeiro, sempre à disposição do cliente.",
    icone: "eye",
  },
  {
    id: "df3",
    titulo: "Entrega no prazo",
    descricao: "Cronograma físico-financeiro rígido e monitorado semanalmente pela nossa engenharia.",
    icone: "clock",
  },
  {
    id: "df4",
    titulo: "Equipe especializada",
    descricao: "Profissionais próprios e parceiros qualificados em cada etapa da construção.",
    icone: "users",
  },
  {
    id: "df5",
    titulo: "Materiais de qualidade",
    descricao: "Fornecedores homologados e controle técnico de materiais em todas as obras.",
    icone: "shield",
  },
];

export const videosDestaque: VideoDestaque[] = [
  {
    id: "vd1",
    titulo: "Timelapse — Residência Vista Verde",
    obraRelacionada: "residencia-vista-verde",
    duracao: "02:18",
    descricao: "14 meses de obra, do terreno à entrega, resumidos em minutos.",
  },
  {
    id: "vd2",
    titulo: "Evolução estrutural — Edifício Horizonte",
    obraRelacionada: "edificio-horizonte",
    duracao: "03:42",
    descricao: "Acompanhe a elevação estrutural dos 12 pavimentos.",
  },
  {
    id: "vd3",
    titulo: "Bosque Imperial — Julho/2026",
    obraRelacionada: "residencial-bosque-imperial",
    duracao: "02:40",
    descricao: "Registro atual da fase de acabamento do condomínio.",
  },
];
