import { EtapaEmpresa } from "@/types";

export const empresa = {
  nome: "RGR Construtora",
  responsavel: "Rodrigo Guimarães",
  slogan: "Experiência construída desde 2010 com trabalho, qualidade e confiança.",
  inicioTrajetoria: 2010,
  inicioAtuacaoIndependente: 2016,
  regiao: "Osório - RS · Atlântida Sul",
  telefoneExibicao: "(51) 99526-7312",
  whatsapp: "5551995267312",
  email: "rodrigorgrconstrutora@gmail.com",
  endereco: "Osório - RS\nAtlântida Sul",
  instagram: "https://www.instagram.com/rodrigoguimaraes_construtor",
  instagramExibicao: "@rodrigoguimaraes_construtor",
  areaAtuacao: [
    "Osório - RS",
    "Atlântida Sul",
    "Litoral norte do Rio Grande do Sul",
  ],
  missao:
    "Construir e reformar com experiência prática, qualidade na execução e acompanhamento próximo em cada etapa, atendendo famílias e projetos em Osório, Atlântida Sul e no litoral norte do Rio Grande do Sul com confiança, compromisso e cuidado especial em obras residenciais e piscinas.",
  historia: [
    "A trajetória de Rodrigo Guimarães na construção civil começou em 2010, quando passou a trabalhar como peão para dois irmãos. Durante aproximadamente seis anos, atuou diretamente nas obras, adquirindo experiência prática e conhecendo cada etapa do trabalho na construção civil.",
    "Em 2016, Rodrigo iniciou sua atuação independente, dando origem à trajetória que posteriormente se consolidaria como RGR Construtora. Seu primeiro serviço por conta própria foi realizado em Gramado, no Hotel Daara, marcando uma nova fase em sua vida profissional.",
    "No ano seguinte, em 2017, trabalhou na execução de um prédio em Canela, localizado próximo à Igreja de Pedra. Depois desse projeto, participou de outra obra de prédio também na cidade de Canela.",
    "Em 2018, Rodrigo iniciou os trabalhos no Sky Palace Hotel, em Gramado. Para atender à dimensão do projeto, passou a liderar uma equipe formada por 18 funcionários, ampliando sua experiência na coordenação de pessoas e na execução de obras de maior porte.",
    "Entre o final de 2019 e o início de 2020, Rodrigo mudou-se para o litoral gaúcho, iniciando uma nova etapa profissional. Desde então, permanece atuando na região, acumulando a execução de 23 casas e 16 piscinas no litoral do Rio Grande do Sul.",
    "Com uma trajetória construída a partir da experiência prática, da dedicação e do acompanhamento direto de cada serviço, Rodrigo e a RGR consolidaram sua atuação em construções residenciais e na execução de piscinas.",
  ],
  perfilRodrigo:
    "À frente da RGR está Rodrigo Guimarães, marido da Monik e pai do Kaleb e do Kauã. Essa base familiar aparece também na forma como conduz o trabalho: com responsabilidade, palavra firme, presença no dia a dia da obra e respeito por cada cliente. São traços que empresários, parceiros e famílias valorizam ao conhecer a RGR de perto, porque mostram que cada projeto é tratado com seriedade, clareza e compromisso pessoal.",
  valores: [
    "Transparência em cada etapa da obra",
    "Compromisso com prazos e orçamento",
    "Qualidade na execução e no acabamento",
    "Relação próxima e humana com cada cliente",
  ],
} as const;

export const numeros = [
  { id: "anos", valor: 16, sufixo: "+", rotulo: "Anos de experiência" },
  { id: "casas", valor: 23, sufixo: "", rotulo: "Casas executadas no litoral" },
  { id: "piscinas", valor: 16, sufixo: "", rotulo: "Piscinas executadas" },
  { id: "equipe-sky", valor: 18, sufixo: "", rotulo: "Profissionais na equipe do Sky Palace Hotel" },
] as const;

export const linhaDoTempoEmpresa: EtapaEmpresa[] = [
  {
    ano: "2010",
    titulo: "Início na construção civil",
    descricao:
      "Rodrigo começa a trabalhar como peão para dois irmãos, adquirindo experiência prática diretamente nas obras.",
  },
  {
    ano: "2016",
    titulo: "Primeiro trabalho por conta própria",
    descricao:
      "Após aproximadamente seis anos de experiência, Rodrigo inicia sua atuação independente e realiza seu primeiro serviço no Hotel Daara, em Gramado.",
  },
  {
    ano: "2017",
    titulo: "Obras em Canela",
    descricao:
      "Trabalha na execução de um prédio próximo à Igreja de Pedra e, posteriormente, participa de outro prédio também na cidade de Canela.",
  },
  {
    ano: "2018",
    titulo: "Expansão da equipe",
    descricao:
      "Inicia os trabalhos no Sky Palace Hotel, em Gramado, liderando uma equipe formada por 18 funcionários.",
  },
  {
    ano: "2019/2020",
    titulo: "Mudança para o litoral",
    descricao:
      "Entre o final de 2019 e o início de 2020, Rodrigo inicia uma nova etapa profissional no litoral gaúcho.",
  },
  {
    ano: "Atualidade",
    titulo: "Consolidação regional",
    descricao:
      "A RGR acumula a execução de 23 casas e 16 piscinas no litoral do Rio Grande do Sul.",
  },
];
