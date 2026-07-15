import { Obra } from "@/types";

export const obras: Obra[] = [
  {
    slug: "residencia-vista-verde",
    nome: "Residência Vista Verde",
    cidade: "Porto Alegre, RS",
    categoria: "Residencial",
    status: "Entregue",
    ano: "2025",
    areaConstruida: "480 m²",
    descricaoResumo:
      "Casa de alto padrão com integração entre áreas internas e externas e paisagismo autoral.",
    descricaoCompleta: [
      "A Residência Vista Verde nasceu do desejo de uma família por um lar que dialogasse com a natureza ao redor sem abrir mão de conforto e sofisticação.",
      "A RGR conduziu o projeto do zero, coordenando arquitetura, engenharia estrutural e paisagismo em um só cronograma, com reuniões quinzenais de alinhamento com os proprietários.",
      "O resultado é uma casa de linhas contemporâneas, grandes panos de vidro e uma piscina de borda infinita que emoldura a vista para o vale.",
    ],
    localizacao: "Zona Sul, Porto Alegre — RS",
    diferenciais: [
      "Fachada com brise em madeira tratada",
      "Automação residencial integrada",
      "Piscina de borda infinita",
      "Paisagismo autoral",
    ],
    infoTecnica: [
      { label: "Área do terreno", valor: "820 m²" },
      { label: "Área construída", valor: "480 m²" },
      { label: "Quartos", valor: "4 suítes" },
      { label: "Prazo de execução", valor: "14 meses" },
      { label: "Estrutura", valor: "Concreto armado" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Jan/2024", titulo: "Terraplenagem e fundação", descricao: "Preparo do terreno e execução de fundação em radier." },
      { id: "2", mes: "Abr/2024", titulo: "Estrutura e alvenaria", descricao: "Levantamento da estrutura em concreto armado e vedações." },
      { id: "3", mes: "Ago/2024", titulo: "Instalações e acabamentos", descricao: "Instalações elétricas, hidráulicas e início dos acabamentos internos." },
      { id: "4", mes: "Fev/2025", titulo: "Entrega", descricao: "Vistoria final, paisagismo e entrega das chaves." },
    ],
    galeria: [
      { id: "g1", tipo: "obra", legenda: "Fachada principal" },
      { id: "g2", tipo: "obra", legenda: "Área da piscina" },
      { id: "g3", tipo: "planta", legenda: "Planta baixa — pavimento térreo" },
      { id: "g4", tipo: "entrega", legenda: "Living integrado" },
      { id: "g5", tipo: "antes", legenda: "Terreno antes da obra" },
      { id: "g6", tipo: "depois", legenda: "Vista aérea concluída" },
    ],
    videos: [
      { id: "v1", titulo: "Timelapse da construção", duracao: "02:18", descricao: "14 meses de obra resumidos em pouco mais de 2 minutos." },
    ],
    destaque: true,
  },
  {
    slug: "edificio-horizonte",
    nome: "Edifício Horizonte",
    cidade: "Canoas, RS",
    categoria: "Empreendimento",
    status: "Entregue",
    ano: "2024",
    areaConstruida: "6.200 m²",
    descricaoResumo:
      "Empreendimento residencial vertical com 32 unidades, área de lazer completa e certificação de eficiência energética.",
    descricaoCompleta: [
      "O Edifício Horizonte é um marco na trajetória da RGR: o primeiro empreendimento vertical conduzido de ponta a ponta pela construtora.",
      "Com 32 unidades distribuídas em 12 pavimentos, o projeto priorizou eficiência energética, ventilação cruzada e áreas comuns amplas.",
      "A gestão de obra utilizou cronograma físico-financeiro semanal, garantindo entrega dentro do prazo contratual com os compradores.",
    ],
    localizacao: "Centro, Canoas — RS",
    diferenciais: [
      "Certificação de eficiência energética",
      "Salão de festas e coworking",
      "Fachada ventilada",
      "Gerador de emergência",
    ],
    infoTecnica: [
      { label: "Unidades", valor: "32 apartamentos" },
      { label: "Pavimentos", valor: "12" },
      { label: "Área construída", valor: "6.200 m²" },
      { label: "Prazo de execução", valor: "26 meses" },
      { label: "Estrutura", valor: "Concreto protendido" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Mar/2022", titulo: "Fundação profunda", descricao: "Estacas escavadas e execução do bloco de fundação." },
      { id: "2", mes: "Nov/2022", titulo: "Estrutura em elevação", descricao: "Concretagem de lajes e pilares até o 12º pavimento." },
      { id: "3", mes: "Jun/2023", titulo: "Vedações e instalações", descricao: "Alvenarias, instalações prediais e esquadrias." },
      { id: "4", mes: "Mai/2024", titulo: "Entrega das chaves", descricao: "Habite-se emitido e entrega às 32 famílias." },
    ],
    galeria: [
      { id: "g1", tipo: "obra", legenda: "Fachada do empreendimento" },
      { id: "g2", tipo: "obra", legenda: "Hall de entrada" },
      { id: "g3", tipo: "planta", legenda: "Planta — apartamento tipo" },
      { id: "g4", tipo: "entrega", legenda: "Área de lazer" },
    ],
    videos: [
      { id: "v1", titulo: "Evolução da estrutura", duracao: "03:42", descricao: "Registro da elevação estrutural mês a mês." },
      { id: "v2", titulo: "Tour pelo apartamento decorado", duracao: "04:05" },
    ],
    destaque: true,
  },
  {
    slug: "casa-container-moinhos",
    nome: "Studio Moinhos",
    cidade: "Novo Hamburgo, RS",
    categoria: "Residencial",
    status: "Entregue",
    ano: "2023",
    areaConstruida: "140 m²",
    descricaoResumo:
      "Residência compacta de arquitetura industrial contemporânea, com estrutura mista e ambientes integrados.",
    descricaoCompleta: [
      "Projeto pensado para um casal jovem que buscava uma casa funcional, com estética industrial e baixo custo de manutenção.",
      "A RGR propôs estrutura metálica aparente combinada a alvenaria, reduzindo prazo de obra em cerca de 20% frente ao método convencional.",
    ],
    localizacao: "Bairro Rondônia, Novo Hamburgo — RS",
    diferenciais: [
      "Estrutura metálica aparente",
      "Cobertura verde",
      "Iluminação natural zenital",
    ],
    infoTecnica: [
      { label: "Área construída", valor: "140 m²" },
      { label: "Prazo de execução", valor: "7 meses" },
      { label: "Estrutura", valor: "Mista (metálica + alvenaria)" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Fev/2023", titulo: "Fundação e estrutura metálica", descricao: "Montagem da estrutura metálica pré-fabricada." },
      { id: "2", mes: "Jun/2023", titulo: "Vedações e acabamento", descricao: "Fechamentos, instalações e acabamento final." },
      { id: "3", mes: "Set/2023", titulo: "Entrega", descricao: "Entrega das chaves aos proprietários." },
    ],
    galeria: [
      { id: "g1", tipo: "obra", legenda: "Fachada industrial" },
      { id: "g2", tipo: "entrega", legenda: "Sala integrada à cozinha" },
    ],
    videos: [],
  },
  {
    slug: "comercial-plaza-center",
    nome: "Plaza Center Comercial",
    cidade: "Gravataí, RS",
    categoria: "Comercial",
    status: "Entregue",
    ano: "2022",
    areaConstruida: "2.100 m²",
    descricaoResumo:
      "Complexo comercial com 18 salas, fachada ventilada e estacionamento próprio para 40 vagas.",
    descricaoCompleta: [
      "Empreendimento comercial desenvolvido para diversificar o portfólio da RGR e atender à crescente demanda por espaços corporativos na região.",
      "Entregue com estrutura pronta para diferentes tipos de operação: clínicas, escritórios e comércio de rua.",
    ],
    localizacao: "Avenida Central, Gravataí — RS",
    diferenciais: [
      "18 salas comerciais moduláveis",
      "40 vagas de estacionamento",
      "Fachada ventilada",
      "Infraestrutura para geradores",
    ],
    infoTecnica: [
      { label: "Salas", valor: "18 unidades" },
      { label: "Área construída", valor: "2.100 m²" },
      { label: "Prazo de execução", valor: "18 meses" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Jan/2021", titulo: "Fundação", descricao: "Execução de sapatas e vigas baldrame." },
      { id: "2", mes: "Set/2021", titulo: "Estrutura e fachada", descricao: "Elevação estrutural e instalação da fachada ventilada." },
      { id: "3", mes: "Jul/2022", titulo: "Entrega", descricao: "Entrega das 18 salas comerciais." },
    ],
    galeria: [
      { id: "g1", tipo: "obra", legenda: "Fachada comercial" },
      { id: "g2", tipo: "entrega", legenda: "Sala comercial pronta" },
    ],
    videos: [
      { id: "v1", titulo: "Making of Plaza Center", duracao: "01:56" },
    ],
  },
  {
    slug: "reforma-cobertura-jardim",
    nome: "Cobertura Jardim Europa",
    cidade: "São Leopoldo, RS",
    categoria: "Reforma",
    status: "Entregue",
    ano: "2025",
    areaConstruida: "210 m²",
    descricaoResumo:
      "Reforma completa de cobertura duplex, com ampliação de terraço e nova cozinha gourmet.",
    descricaoCompleta: [
      "Retrofit completo de uma cobertura dos anos 90, modernizando instalações, layout e acabamentos sem alterar a estrutura original.",
      "A obra foi planejada em etapas para permitir que a família permanecesse em parte do imóvel durante a execução.",
    ],
    localizacao: "Jardim Europa, São Leopoldo — RS",
    diferenciais: [
      "Ampliação de terraço gourmet",
      "Troca completa de instalações",
      "Automação de iluminação",
    ],
    infoTecnica: [
      { label: "Área reformada", valor: "210 m²" },
      { label: "Prazo de execução", valor: "5 meses" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Mar/2025", titulo: "Demolição seletiva", descricao: "Remoção de revestimentos e instalações antigas." },
      { id: "2", mes: "Maio/2025", titulo: "Instalações e alvenaria", descricao: "Novas instalações e fechamento do terraço gourmet." },
      { id: "3", mes: "Ago/2025", titulo: "Entrega", descricao: "Acabamento final e entrega." },
    ],
    galeria: [
      { id: "g1", tipo: "antes", legenda: "Terraço antes da reforma" },
      { id: "g2", tipo: "depois", legenda: "Terraço gourmet finalizado" },
    ],
    videos: [],
  },
  {
    slug: "residencial-bosque-imperial",
    nome: "Residencial Bosque Imperial",
    cidade: "Sapucaia do Sul, RS",
    categoria: "Empreendimento",
    status: "Em andamento",
    ano: "2026",
    areaConstruida: "4.800 m²",
    descricaoResumo:
      "Condomínio horizontal com 14 sobrados em fase final de acabamento, previsão de entrega no segundo semestre.",
    descricaoCompleta: [
      "Condomínio fechado com 14 sobrados de 3 e 4 dormitórios, área verde comum e portaria 24h.",
      "Atualmente em fase de acabamento interno, com entrega prevista para o segundo semestre de 2026.",
    ],
    localizacao: "Bairro Fátima, Sapucaia do Sul — RS",
    diferenciais: [
      "Condomínio fechado com portaria 24h",
      "Área verde comum",
      "14 sobrados de alto padrão",
    ],
    infoTecnica: [
      { label: "Unidades", valor: "14 sobrados" },
      { label: "Área construída", valor: "4.800 m²" },
      { label: "Previsão de entrega", valor: "2º semestre de 2026" },
    ],
    linhaDoTempo: [
      { id: "1", mes: "Jun/2025", titulo: "Fundação e infraestrutura", descricao: "Terraplenagem e infraestrutura do condomínio." },
      { id: "2", mes: "Nov/2025", titulo: "Estrutura dos sobrados", descricao: "Elevação estrutural das 14 unidades." },
      { id: "3", mes: "Jul/2026", titulo: "Acabamento (atual)", descricao: "Fase atual: acabamentos internos e externos." },
    ],
    galeria: [
      { id: "g1", tipo: "obra", legenda: "Vista geral do condomínio" },
      { id: "g2", tipo: "obra", legenda: "Sobrado modelo" },
    ],
    videos: [
      { id: "v1", titulo: "Obra em andamento — Julho/2026", duracao: "02:40" },
    ],
  },
];

export function getObraBySlug(slug: string) {
  return obras.find((o) => o.slug === slug);
}

export function getObrasDestaque() {
  return obras.filter((o) => o.destaque);
}
