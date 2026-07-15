// Modelo de dados central do site.
// Pensado para futuramente ser alimentado por um painel administrativo / CMS,
// sem exigir mudanças na camada de apresentação (components).

export type CategoriaObra =
  | "Residencial"
  | "Comercial"
  | "Empreendimento"
  | "Reforma";

export type StatusObra = "Concluída" | "Em andamento" | "Entregue";

export interface EtapaLinhaDoTempo {
  id: string;
  mes: string; // ex: "Fev/2024"
  titulo: string;
  descricao: string;
}

export interface ImagemObra {
  id: string;
  legenda?: string;
  tipo?: "planta" | "obra" | "entrega" | "antes" | "depois";
}

export interface VideoObra {
  id: string;
  titulo: string;
  duracao: string; // "02:14"
  descricao?: string;
}

export interface Obra {
  slug: string;
  nome: string;
  cidade: string;
  categoria: CategoriaObra;
  status: StatusObra;
  ano: string;
  areaConstruida: string; // "1.240 m²"
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
  nota: number; // 1-5
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
  descricao: string;
}
