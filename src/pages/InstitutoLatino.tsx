import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  CheckCircle, Calendar, MapPin, Clock, Coffee,
  ChevronDown, ChevronUp, ArrowRight, Brain,
} from "lucide-react";
import { useState } from "react";

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdcn9tcPy6DA4bPOb3Tmrwp7MUvEQnzJx4KxHlizrE8SqdzzQ/viewform";

const topics = [
  { text: "Abordar todas las facetas de una empresa exitosa" },
  { text: "Desarrollo de un concepto de negocio viable y comprensión del mercado" },
  { text: "Diseño de su modelo de ganancias" },
  { text: "Configurar las operaciones correctamente" },
  { text: "Comercialización de su empresa" },
  { text: "Comprensión de los números básicos" },
];

const sessions = [
  { num: 1, title: "Los Fundamentos: El Sueño Emprendedor",                      desc: "Todo Comienza con una Idea; Pensando de Manera Emprendedora; La Naturaleza de la Experiencia Emprendedora; El Emprendimiento como Proceso; Competencias y Habilidades Clave; Los Cuatro Tipos de Empresas; La Trampa de los Productos Genéricos; Oportunidad vs. Concepto." },
  { num: 2, title: "Lo Que Necesitas Saber Sobre los Números",                   desc: "Entendiendo tu Modelo para Ganar Dinero; Economía Básica de tu Negocio; Cuánto Necesitas Vender para Sobrevivir; Lo que Realmente Necesitas Saber sobre los Estados Financieros; Por qué el Flujo de Caja es Rey." },
  { num: 3, title: "Planificación, Pensamiento Estratégico y Gestión del Riesgo", desc: "Trabajar EN tu Negocio, No Solo EN Él; Planificación versus el Plan de Negocio; Audiencias para los Planes; Pensamiento Estratégico; Tu Modelo de Rentabilidad; Mitigando Riesgos." },
  { num: 4, title: "Obteniendo Recursos (Dinero) Sin Tenerlos",                  desc: "Cómo Utilizar Recursos de Manera Eficiente; Fuentes de Dinero; Cuándo Usar Cada Fuente; Cómo Acercarte a las Distintas Fuentes; Lo que un Emprendedor Necesita Saber sobre Negociación." },
  { num: 5, title: "Los Clientes Impulsan el Negocio",                           desc: "Mercados y Marketing; Entendiendo a tus Clientes; Segmentando el Mercado; El Concepto Guerrilla; Hacer Más con Marketing Gastando Menos; Enfoques Emprendedores en las Decisiones de Marketing." },
  { num: 6, title: "Operaciones y Otros Fundamentos Importantes",                desc: "Operaciones Formales; Diseñando tu Modelo Operativo; Calidad, Cuellos de Botella, Proveedores; Encontrando Personas: Empleados y Contrataciones; Formas de Organización." },
];

const mindsetOutcomes = [
  "Identificar y evaluar oportunidades que otros pasan por alto",
  "Transformar una idea simple en un éxito sostenible",
  "Adoptar la mentalidad emprendedora como habilidad de vida",
  "Identificar y superar creencias autolimitantes",
];

const InstitutoLatino = () => {
  const [openSession, setOpenSession] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy relative overflow-hidden min-h-[72vh] flex items-end">
        <img
          src="/images/img_22.jpg"
          alt="Instituto Latino de BizStarts"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-transparent" />
        {/* Gold left bar — distinguishes this page from the English version */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />

        <div className="relative z-10 container px-8 pb-20 pt-48">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-barlow font-semibold text-gold uppercase tracking-[0.3em] text-xs">
                6 Sábados · En Persona · Milwaukee
              </span>
            </div>
            <h1
              className="font-headline font-bold uppercase text-primary-foreground leading-none max-w-3xl"
              style={{ fontSize: "clamp(36px, 7vw, 90px)", letterSpacing: "-0.02em" }}
            >
              Instituto Latino<br /><span className="text-teal">de BizStarts</span>
            </h1>
            <p className="mt-6 text-primary-foreground/55 font-body text-xl max-w-xl leading-relaxed">
              Bootcamp Comunitario para Emprendedores — creado para personas reales, construyendo negocios reales.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EN / ES TOGGLE ── */}
      <section className="bg-off-white py-5 border-b border-border">
        <div className="container flex items-center justify-center gap-3 flex-wrap">
          <span className="font-barlow font-semibold text-[11px] text-charcoal/35 uppercase tracking-widest mr-1">
            Program Language:
          </span>
          {/* Inactive — English */}
          <Link
            to="/programming"
            className="rounded-full border-2 border-teal bg-transparent px-7 py-2.5 font-barlow font-bold text-sm text-teal hover:bg-teal hover:text-primary-foreground transition-all duration-200"
          >
            🇺🇸 English — BizStarts Institute
          </Link>
          {/* Active — Spanish */}
          <span className="rounded-full bg-teal px-7 py-2.5 font-barlow font-bold text-sm text-primary-foreground shadow cursor-default">
            🇲🇽 Spanish — Instituto Latino
          </span>
        </div>
      </section>

      {/* ── EVENT CARD ── */}
      <section className="py-12 bg-teal">
        <div className="container max-w-3xl">
          <div className="bg-primary-foreground rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Date badge */}
              <div className="bg-teal rounded-xl px-6 py-5 text-center text-primary-foreground flex-shrink-0 self-start">
                <p className="font-barlow font-bold text-[10px] uppercase leading-none mb-1">Primavera</p>
                <p className="font-headline text-5xl font-bold leading-none">26</p>
                <p className="font-barlow font-bold text-[10px] uppercase leading-none mt-1">2026</p>
              </div>
              <div className="flex-1">
                <p className="font-barlow font-bold text-teal text-xs uppercase tracking-widest mb-2">
                  📋 Inscripciones Abiertas
                </p>
                <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase text-navy leading-tight">
                  Bootcamp Comunitario Para Emprendedores
                </h3>
                <div className="mt-5 space-y-2.5 text-charcoal/65 font-body text-sm">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    6 sábados consecutivos — 11 de abril al 16 de mayo, 2026
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    9:00 am – 12:00 pm (medio día)
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    Ubicación por anunciar — Milwaukee, WI
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Coffee size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    <em>Café y snacks se proporcionan cada semana</em>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-base px-10 py-3 inline-flex items-center gap-2"
                  >
                    Aplicar Aquí <ArrowRight size={16} />
                  </a>
                  <p className="text-charcoal/45 font-body text-xs">
                    Costo: $1,000 — ¡todas las aplicaciones son consideradas para beca!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-card">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-12 items-start">
            <ScrollReveal>
              <div>
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy leading-tight">
                  ¿Qué es el Instituto Latino de BizStarts?
                </h2>
                <p className="mt-6 text-charcoal/70 font-body text-lg leading-relaxed">
                  Este programa es diseñado para crear líderes de negocios exitosos en comunidades vulnerables. Obtenga experiencia, confianza y recursos para crear una legacía. Acceso personalizado a los mejores mentores y consultores de negocios.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  BizStarts ha estado sirviendo a empresarios en la región de Milwaukee durante más de una década. Al ver la necesidad en nuestra comunidad de un sistema acreditado de aprendizaje, BizStarts decidió hacer algo al respecto.
                </p>
              </div>
            </ScrollReveal>
            <div className="hidden lg:block self-stretch bg-border" />
            <ScrollReveal delay={120}>
              <div className="lg:pt-14">
                <p className="text-charcoal/70 font-body text-lg leading-relaxed">
                  Al crear nuestro nuevo programa, BizStarts buscó el apoyo del Profesor Michael Morris de la Universidad de Notre Dame. Sus programas son reconocidos a nivel mundial por crear empresas exitosas a partir de personas con recursos limitados.
                </p>
                <p className="mt-4 text-charcoal/70 font-body text-lg leading-relaxed">
                  El Instituto Latino de BizStarts es una exposición intensa y práctica a los fundamentos del lanzamiento y crecimiento de una empresa exitosa. ¡La tutoría de un año está disponible después del programa inicial!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TEACH BY DOING — dark strip ── */}
      <section className="bg-navy py-16">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
              {[
                { label: "Contabilidad", action: "crear registros financieros reales" },
                { label: "Marketing",   action: "ejecutar páginas de redes sociales" },
                { label: "Ventas",      action: "buscar activamente clientes reales" },
              ].map((item) => (
                <div key={item.label} className="py-8 px-10 text-center">
                  <p className="font-barlow font-bold text-primary-foreground/25 text-[11px] uppercase tracking-widest mb-3">
                    No solo aprenderás
                  </p>
                  <p className="font-headline text-3xl font-bold uppercase text-teal">{item.label}</p>
                  <div className="w-8 h-0.5 bg-gold mx-auto my-3" />
                  <p className="font-body text-primary-foreground/50 text-sm">Sino que {item.action}.</p>
                </div>
              ))}
            </div>
            <p className="text-center text-primary-foreground/20 font-barlow font-semibold text-[10px] uppercase tracking-[0.25em] mt-8">
              Nuestro Enfoque: Enseñar Haciendo
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="py-24 bg-off-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">Temas Cubiertos</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((t, i) => (
              <ScrollReveal key={t.text} delay={i * 55}>
                <div className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-sm border-l-4 border-teal">
                  <CheckCircle size={20} className="text-teal mt-0.5 flex-shrink-0" />
                  <p className="text-charcoal/70 font-body">{t.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-charcoal/45 font-body text-sm leading-relaxed text-center max-w-2xl mx-auto">
            Nuestro enfoque es cómo pensar y actuar de manera empresarial, incluido cómo hacer más con menos. Las sesiones son interactivas — los participantes son alentados a traer sus ideas y desafíos comerciales.
          </p>
        </div>
      </section>

      {/* ── SESSION BREAKDOWN ── */}
      <section className="py-24 bg-card">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="w-16 h-1 bg-gold mx-auto mb-6" />
              <h2 className="font-headline text-4xl font-bold uppercase text-navy">Desglose de Sesiones</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {sessions.map((s) => (
              <ScrollReveal key={s.num}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${openSession === s.num ? "bg-navy shadow-lg" : "bg-off-white"}`}>
                  <button
                    onClick={() => setOpenSession(openSession === s.num ? null : s.num)}
                    className="w-full flex items-center justify-between px-8 py-5 text-left gap-4"
                  >
                    <span className={`font-barlow font-bold ${openSession === s.num ? "text-primary-foreground" : "text-navy"}`}>
                      <span className="text-teal mr-2">Sesión {s.num}:</span>{s.title}
                    </span>
                    {openSession === s.num
                      ? <ChevronUp size={18} className="text-teal flex-shrink-0" />
                      : <ChevronDown size={18} className="text-teal flex-shrink-0" />}
                  </button>
                  {openSession === s.num && (
                    <div className="px-8 pb-6">
                      <p className="text-primary-foreground/55 font-body text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINDSET TRAINING ── */}
      <section className="py-24 bg-off-white">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                  <Brain size={28} className="text-teal" />
                </div>
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase text-navy">
                  Entrenamiento de Mentalidad Emprendedora
                </h2>
                <p className="mt-5 text-charcoal/70 font-body text-lg leading-relaxed">
                  Después de completar el bootcamp, los graduados participan en dos sesiones virtuales de desarrollo de mentalidad, basadas en el Ice House Entrepreneurship Program — certificado por la Fundación Kauffman.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-navy rounded-2xl p-9 shadow-xl">
                <p className="font-barlow font-bold text-primary-foreground/35 text-[11px] uppercase tracking-widest mb-6">
                  Los Participantes Aprenderán A:
                </p>
                <ul className="space-y-4">
                  {mindsetOutcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-teal mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/65 font-body text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SPONSORS NOTE ── */}
      <section className="py-16 bg-navy">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-headline text-3xl font-bold uppercase text-primary-foreground">
              Gracias a Nuestros Contribuyentes
            </h2>
            <p className="mt-4 text-primary-foreground/45 font-body text-lg leading-relaxed max-w-xl mx-auto">
              BizStarts es una organización sin fines de lucro. Todos los fondos recaudados directamente apoyan becas para emprendedores que de otro modo no tendrían los recursos para participar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="py-24 bg-teal relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-headline font-bold uppercase text-primary-foreground/[0.06] whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 14vw, 190px)" }}
          >
            APLICAR
          </span>
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <h2
            className="font-headline font-bold uppercase leading-none"
            style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
          >
            ¿Lista/o para Empezar?
          </h2>
          <p className="mt-4 text-primary-foreground/75 font-body text-xl max-w-lg mx-auto">
            Inscríbete en el próximo Instituto Latino — ¡todas las aplicaciones son consideradas para beca!
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-12 py-5 font-barlow font-bold text-teal text-lg shadow-xl hover:text-navy hover:-translate-y-1 transition-all duration-200"
          >
            Aplicar Aquí <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default InstitutoLatino;
