"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import InstagramIcon from "@/components/illustrations/InstagramIcon";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { empresa } from "@/lib/data/empresa";

const assuntos = [
  "Construção residencial",
  "Execução de projeto",
  "Acompanhamento de obra",
  "Reforma ou ampliação",
  "Acabamentos",
  "Construção de piscina",
  "Outro assunto",
];

export default function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState(assuntos[0]);
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}. Assunto: ${assunto}. ${mensagem}`;
    window.open(
      `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
    setEnviado(true);
  }

  return (
    <section id="contato" className="relative bg-paper text-ink py-28 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              eyebrow="Contato"
              title="Vamos conversar sobre sua obra."
              description="Preencha o formulário ou fale diretamente pelo WhatsApp da RGR."
              light
            />

            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-4">
                  <span className="h-11 w-11 flex items-center justify-center border border-ink/15 text-bordeaux">
                    <MessageCircle size={18} />
                  </span>
                  <a href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-scarlet transition-colors">
                    {empresa.telefoneExibicao}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-11 w-11 flex items-center justify-center border border-ink/15 text-bordeaux">
                    <Mail size={18} />
                  </span>
                  <a href={`mailto:${empresa.email}`} className="text-sm hover:text-scarlet transition-colors">
                    {empresa.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-11 w-11 flex items-center justify-center border border-ink/15 text-bordeaux">
                    <MapPin size={18} />
                  </span>
                  <span className="text-sm">{empresa.endereco}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-11 w-11 flex items-center justify-center border border-ink/15 text-bordeaux">
                    <InstagramIcon size={18} />
                  </span>
                  <a href={empresa.instagram} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-scarlet transition-colors">
                    @rodrigoguimaraesrgr
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 aspect-[16/9] w-full border border-ink/15 overflow-hidden">
                <iframe
                  title="Localização RGR Construtora no Rio Grande do Sul"
                  src="https://www.google.com/maps?q=Rio+Grande+do+Sul,+Brasil&output=embed"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-ink text-paper p-8 md:p-10">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-scarlet mb-8">
                Solicitar orçamento
              </p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-xs text-mist mb-2">Nome completo</label>
                  <input
                    id="nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-transparent border-b border-paper/25 focus:border-scarlet py-3 text-sm outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-xs text-mist mb-2">Telefone / WhatsApp</label>
                    <input
                      id="telefone"
                      required
                      type="tel"
                      className="w-full bg-transparent border-b border-paper/25 focus:border-scarlet py-3 text-sm outline-none transition-colors"
                      placeholder="(51) 90000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-xs text-mist mb-2">Assunto</label>
                    <select
                      id="assunto"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                      className="w-full bg-transparent border-b border-paper/25 focus:border-scarlet py-3 text-sm outline-none transition-colors"
                    >
                      {assuntos.map((a) => (
                        <option key={a} value={a} className="bg-ink">
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-xs text-mist mb-2">Mensagem</label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-transparent border-b border-paper/25 focus:border-scarlet py-3 text-sm outline-none transition-colors resize-none"
                    placeholder="Conte um pouco sobre seu projeto"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-9 w-full inline-flex items-center justify-center gap-2.5 bg-scarlet hover:bg-bordeaux transition-colors py-4 text-[13px] tracking-[0.08em] uppercase font-medium"
              >
                Enviar via WhatsApp <Send size={15} />
              </button>

              {enviado && (
                <p className="mt-4 text-xs text-mist text-center">
                  Abrimos o WhatsApp em uma nova aba. Finalize o envio por lá.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
