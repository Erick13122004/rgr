import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import InstagramIcon from "@/components/illustrations/InstagramIcon";
import Container from "@/components/ui/Container";
import { empresa } from "@/lib/data/empresa";

const colunas = [
  {
    titulo: "Navegação",
    links: [
      { href: "/#sobre", label: "Sobre a RGR" },
      { href: "/obras", label: "Obras" },
      { href: "/#servicos", label: "Serviços" },
      { href: "/#contato", label: "Contato" },
    ],
  },
  {
    titulo: "Serviços",
    links: [
      { href: "/#servicos", label: "Construção residencial" },
      { href: "/#servicos", label: "Execução de projetos" },
      { href: "/#servicos", label: "Acompanhamento de obras" },
      { href: "/#servicos", label: "Reformas e ampliações" },
      { href: "/#servicos", label: "Acabamentos" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line pt-20 pb-8 bp-grid">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 pb-16 border-b border-ink-line">
          <div>
            <Link href="/" className="inline-flex items-center mb-5" aria-label="RGR Construtora">
              <Image
                src="/brand/logo-rgr-header.png"
                alt="RGR Construtora"
                width={535}
                height={420}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-mist leading-relaxed max-w-xs">
              {empresa.slogan}
            </p>
            <a
              href={empresa.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da RGR Construtora"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-paper/20 text-paper hover:border-scarlet hover:text-scarlet transition-colors"
            >
              <InstagramIcon size={17} />
            </a>
          </div>

          {colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mist mb-5">
                {coluna.titulo}
              </p>
              <ul className="space-y-3">
                {coluna.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/75 hover:text-scarlet transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mist mb-5">
              Contato
            </p>
            <ul className="space-y-4 text-sm text-paper/75">
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-scarlet mt-0.5 shrink-0" />
                <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-scarlet transition-colors">
                  {empresa.telefoneExibicao}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-scarlet mt-0.5 shrink-0" />
                <a href={`mailto:${empresa.email}`} className="hover:text-scarlet transition-colors">
                  {empresa.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-scarlet mt-0.5 shrink-0" />
                <span>{empresa.endereco}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-mist">
            Desenvolvido por <span className="text-paper/80">InovaFlow</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
