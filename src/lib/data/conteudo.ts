import { Servico, Diferencial, VideoDestaque } from "@/types";

export const servicos: Servico[] = [
  {
    id: "s1",
    titulo: "Construção residencial",
    descricao:
      "Execução de obras residenciais em Osório, Atlântida Sul e litoral norte com organização, acompanhamento e cuidado em cada etapa.",
    itens: ["Obras completas", "Estrutura e alvenaria", "Acabamentos"],
    icone: "home",
  },
  {
    id: "s2",
    titulo: "Execução de projetos",
    descricao:
      "Transformação do projeto em obra, com atenção à leitura técnica, ao canteiro e ao resultado final.",
    itens: ["Planejamento da execução", "Etapas organizadas", "Acompanhamento técnico"],
    icone: "building",
  },
  {
    id: "s3",
    titulo: "Acompanhamento de obras",
    descricao:
      "Presença próxima no canteiro para acompanhar andamento, decisões, materiais e qualidade da execução.",
    itens: ["Rotina de obra", "Controle das etapas", "Apoio ao cliente"],
    icone: "clipboard",
  },
  {
    id: "s4",
    titulo: "Reformas e ampliações",
    descricao:
      "Intervenções residenciais planejadas para melhorar espaços existentes com menos transtorno.",
    itens: ["Reformas residenciais", "Ampliações", "Adequações de espaços"],
    icone: "hammer",
  },
  {
    id: "s5",
    titulo: "Acabamentos",
    descricao:
      "Cuidado com detalhes finais que valorizam a obra e deixam os ambientes prontos para uso.",
    itens: ["Revestimentos", "Detalhes finais", "Qualidade visual"],
    icone: "ruler",
  },
];

export const diferenciais: Diferencial[] = [
  {
    id: "df1",
    titulo: "Presença na obra",
    descricao: "Acompanhamento próximo para manter cada etapa bem conduzida.",
    icone: "eye",
  },
  {
    id: "df2",
    titulo: "Organização",
    descricao: "Processo de trabalho claro, com atenção ao canteiro, materiais e sequência da execução.",
    icone: "clock",
  },
  {
    id: "df3",
    titulo: "Compromisso",
    descricao: "Relação direta, responsável e orientada ao que foi combinado com o cliente.",
    icone: "handshake",
  },
  {
    id: "df4",
    titulo: "Atenção aos detalhes",
    descricao: "Cuidado com acabamento, proporção e qualidade visual do resultado final.",
    icone: "shield",
  },
  {
    id: "df5",
    titulo: "Execução residencial",
    descricao: "Experiência aplicada em casas, reformas, áreas externas e piscinas.",
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
