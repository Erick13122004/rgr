// Modelo de dados central do site.
// Mantido simples para exibir apenas informações confirmadas e materiais reais.

export type CategoriaObra =
  | "Residencial"
  | "Piscina"
  | "Obra em andamento";

export type StatusObra = "Concluída" | "Em andamento";

export interface EtapaLinhaDoTempo {
  id: string;
  mes: string;
  titulo: string;
  descricao: string;
}

export interface ImagemObra {
  id: string;
  src: string;
  alt: string;
  legenda?: string;
  tipo?: "obra" | "entrega" | "antes" | "depois";
}

export interface VideoObra {
  id: string;
  titulo: string;
  duracao: string;
  src: string;
  poster?: string;
  descricao?: string;
}

export interface Obra {
  slug: string;
  nome: string;
  cidade: string;
  categoria: CategoriaObra;
  status: StatusObra;
  ano: string;
  areaConstruida: string;
  descricaoResumo: string;
  descricaoCompleta: string[];
  localizacao: string;
  diferenciais: string[];
  infoTecnica: { label: string; valor: string }[];
  linhaDoTempo: EtapaLinhaDoTempo[];
  galeria: ImagemObra[];
  videos: VideoObra[];
  destaque?: boolean;
}

export interface Depoimento {
  id: string;
  nome: string;
  cidade: string;
  obra?: string;
  texto: string;
  nota: number;
}

export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  itens: string[];
  icone: "home" | "building" | "hammer" | "clipboard" | "ruler";
}

export interface Diferencial {
  id: string;
  titulo: string;
  descricao: string;
  icone: "handshake" | "eye" | "clock" | "users" | "shield";
}

export interface EtapaEmpresa {
  ano: string;
  titulo: string;
  descricao: string;
}

export interface VideoDestaque {
  id: string;
  titulo: string;
  obraRelacionada: string;
  duracao: string;
  src: string;
  poster: string;
  descricao: string;
}
