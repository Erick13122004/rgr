import { EtapaEmpresa } from "@/types";

export const empresa = {
  nome: "RGR Construtora",
  responsavel: "Rodrigo Guimarães",
  slogan: "Desde 2010, construindo histórias com experiência, qualidade e confiança.",
  fundacao: 2016,
  inicioTrajetoria: 2010,
  regiao: "Rio Grande do Sul",
  telefoneExibicao: "(51) 99526-7312",
  whatsapp: "5551995267312",
  email: "contato@rgrconstrutora.com.br",
  endereco: "Rio Grande do Sul, Brasil",
  instagram: "https://instagram.com/rodrigoguimaraesrgr",
  missao:
    "Construir e reformar com experiência prática, qualidade na execução e acompanhamento próximo em cada etapa, atendendo famílias e projetos no litoral gaúcho com confiança, compromisso e cuidado especial em obras residenciais e piscinas.",
  perfilRodrigo:
    "À frente da RGR está Rodrigo Guimarães, fundador da empresa, marido da Monik e pai do Kaleb e do Kauã. Essa base familiar aparece também na forma como conduz o trabalho: com responsabilidade, palavra firme, presença no dia a dia da obra e respeito por cada cliente. São traços que empresários, parceiros e famílias valorizam ao conhecer a RGR de perto, porque mostram que cada projeto é tratado com seriedade, clareza e compromisso pessoal.",
  valores: [
    "Transparência em cada etapa da obra",
    "Compromisso com prazos e orçamento",
    "Qualidade na execução e no acabamento",
    "Relação próxima e humana com cada cliente",
  ],
} as const;

export const numeros = [
  { id: "anos", valor: 16, sufixo: "+", rotulo: "Anos de experiência" },
  { id: "casas", valor: 23, sufixo: "", rotulo: "Casas construídas" },
  { id: "predios", valor: 4, sufixo: "", rotulo: "Prédios em Gramado" },
  { id: "piscinas", valor: "Especialistas", sufixo: "", rotulo: "Construção de piscinas" },
] as const;

export const linhaDoTempoEmpresa: EtapaEmpresa[] = [
  {
    ano: "2010",
    titulo: "Início da trajetória",
    descricao:
      "Rodrigo Guimarães começa na construção civil realizando pequenas obras no interior do Rio Grande do Sul.",
  },
  {
    ano: "2016",
    titulo: "Fundação da RGR",
    descricao:
      "Com a experiência adquirida ao longo dos anos, Rodrigo funda oficialmente a RGR Construtora.",
  },
  {
    ano: "2016",
    titulo: "Primeira obra completa",
    descricao:
      "A RGR assume seu primeiro serviço executado integralmente, acompanhando a obra do início à conclusão.",
  },
  {
    ano: "2018",
    titulo: "Expansão para Gramado",
    descricao:
      "A equipe cresce e passa a atuar em projetos maiores em Gramado, incluindo serviços no Sky Palace Hotel.",
  },
  {
    ano: "2019",
    titulo: "Chegada ao litoral gaúcho",
    descricao:
      "No final do ano, Rodrigo conhece Fernando Dalpiva e inicia uma nova fase da empresa em Osório.",
  },
  {
    ano: "Atualidade",
    titulo: "Referência regional",
    descricao:
      "Com 23 casas, quatro prédios em Gramado e diversas piscinas, a RGR consolida sua atuação no litoral gaúcho.",
  },
];
