import { Servico, Diferencial, VideoDestaque } from "@/types";

export const servicos: Servico[] = [
  {
    id: "s1",
    titulo: "Casas e estruturas",
    descricao:
      "Execução de casas no litoral norte com estrutura, alvenaria e etapas bem acompanhadas.",
    itens: ["Obra completa", "Estrutura", "Alvenaria"],
    icone: "home",
  },
  {
    id: "s2",
    titulo: "Projeto em obra",
    descricao:
      "Leitura do projeto, organização de etapas e condução prática no canteiro.",
    itens: ["Leitura técnica", "Planejamento", "Execução"],
    icone: "building",
  },
  {
    id: "s3",
    titulo: "Gestão do canteiro",
    descricao:
      "Presença próxima para orientar equipe, materiais, sequência e qualidade da execução.",
    itens: ["Rotina de obra", "Equipe", "Materiais"],
    icone: "clipboard",
  },
  {
    id: "s4",
    titulo: "Reformas e ampliações",
    descricao:
      "Melhorias residenciais planejadas para ampliar, renovar ou adequar espaços existentes.",
    itens: ["Reformas", "Ampliações", "Adequações"],
    icone: "hammer",
  },
  {
    id: "s5",
    titulo: "Acabamentos",
    descricao:
      "Cuidado com revestimentos, detalhes finais e padrão visual de entrega.",
    itens: ["Revestimentos", "Detalhes", "Entrega"],
    icone: "ruler",
  },
];

export const diferenciais: Diferencial[] = [
  {
    id: "df1",
    titulo: "Rodrigo na frente",
    descricao: "Contato direto com quem entende a execução e acompanha as decisões importantes.",
    icone: "eye",
  },
  {
    id: "df2",
    titulo: "Canteiro organizado",
    descricao: "Etapas, materiais e equipe conduzidos com rotina clara de trabalho.",
    icone: "clock",
  },
  {
    id: "df3",
    titulo: "Palavra firme",
    descricao: "Comunicação direta sobre orçamento, escopo e andamento da obra.",
    icone: "handshake",
  },
  {
    id: "df4",
    titulo: "Acabamento valorizado",
    descricao: "Atenção ao resultado que aparece: fachada, proporção, revestimentos e detalhes.",
    icone: "shield",
  },
  {
    id: "df5",
    titulo: "Experiência real",
    descricao: "Trajetória prática em casas, reformas, áreas externas, piscinas e obras maiores.",
    icone: "users",
  },
];

export const videosDestaque: VideoDestaque[] = [
  {
    id: "vd1",
    titulo: "Do projeto à realização",
    obraRelacionada: "residencia-contemporanea",
    duracao: "00:55",
    src: "/videos/obra-residencial.mp4",
    poster: "/videos/obra-residencial-poster.webp",
    descricao: "Registro real de ambientes, área externa e detalhes de uma obra residencial.",
  },
  {
    id: "vd2",
    titulo: "Trajetória no Sky Palace Hotel",
    obraRelacionada: "sobre",
    duracao: "00:51",
    src: "/videos/sky-palace-trajetoria.mp4",
    poster: "/videos/sky-palace-poster.webp",
    descricao:
      "Registro relacionado à trajetória de Rodrigo em uma etapa importante de sua experiência na construção civil.",
  },
];
