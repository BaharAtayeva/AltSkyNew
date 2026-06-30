import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, FileText, Box, Layers, Pencil, Sparkles, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-architecture.jpg";
import pInterior1 from "@/assets/portfolio-interior-1.jpg";
import pInterior2 from "@/assets/portfolio-interior-2.jpg";
import pInterior3 from "@/assets/portfolio-interior-3.jpg";
import pResidential1 from "@/assets/portfolio-residential-1.jpg";
import pResidential2 from "@/assets/portfolio-residential-2.jpg";
import pCommercial1 from "@/assets/portfolio-commercial-1.jpg";
import pCommercial2 from "@/assets/portfolio-commercial-2.jpg";
import pCad1 from "@/assets/portfolio-cad-1.jpg";
import pBim1 from "@/assets/portfolio-bim-1.jpg";
import pMaster1 from "@/assets/portfolio-masterplan-1.jpg";
import pPort7 from "@/assets/port7.jpg";
import pPort20 from "@/assets/port20.jpg";
import pPort2 from "@/assets/port2.jpg";
import pPort3 from "@/assets/port3.jpg";
import pPort8 from "@/assets/port8.jpg";
// import pPort30 from "@/assets/port30.jpg";
import pPort1 from "@/assets/port1.jpg";
import pPort19 from "@/assets/port19.jpg";
import pPort23 from "@/assets/port23.jpg";
import pPort27 from "@/assets/port27.jpg";
import pPort28 from "@/assets/port28.jpg";
import pPort29 from "@/assets/port29.jpg";
import pPort31 from "@/assets/port31.jpg";
import pPort32 from "@/assets/port32.jpg";
import pPort33 from "@/assets/port33.jpg";
import pPort34 from "@/assets/port34.jpg";
import pPort35 from "@/assets/port35.jpg";
import pPort36 from "@/assets/port36.jpg";
import pPort10 from "@/assets/port10.jpg";
import pPort16 from "@/assets/port16.jpg";
import pPort9 from "@/assets/port9.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AltSky Design - CAD, BIM & 3D Visualization Studio in Texas" },
      {
        name: "description",
        content:
          "Alternative Sky Design LLC turns sketches, PDFs and on-site measurements into precise CAD drawings, BIM models and photoreal renderings. Texas-based, serving local and remote projects.",
      },
      { property: "og:title", content: "AltSky Design - Architectural Drafting & 3D Visualization" },
      { property: "og:description", content: "CAD, BIM and 3D rendering services for homeowners, builders, developers and architects." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Pencil, title: "2D & 3D CAD Drawings", desc: "Production-ready plans, elevations and details drafted to your standards.", slug: "cad-drawings" },
  { icon: Layers, title: "BIM Modeling", desc: "Coordinated Revit models that keep documentation, geometry and data in sync.", slug: "bim-modeling" },
  { icon: FileText, title: "PDF to CAD Conversion", desc: "Clean, editable CAD files redrawn from PDFs, scans or hand sketches.", slug: "pdf-to-cad" },
  { icon: Box, title: "2D to 3D Modeling", desc: "Accurate 3D geometry built from your 2D drawings - ready for visualization.", slug: "2d-to-3d" },
  { icon: Sparkles, title: "3D Rendering", desc: "Photoreal interior and exterior visuals that help projects sell themselves.", slug: "3d-rendering" },
  { icon: Ruler, title: "On-Site Measurement", desc: "As-built documentation captured on location across Texas.", slug: "on-site-measurement" },
];

const PORTFOLIO = [
  { src: pResidential1, title: "Modern Residence", loc: "Austin, TX" },
  { src: pInterior1, title: "Wall Staircase Interior", loc: "Houston, TX" },
  { src: pCommercial1, title: "Stone & Cedar Family Home", loc: "Fort Worth, TX" },
  { src: pCad1, title: "Bedroom & Study Nook Design", loc: "Austin, TX" },
  { src: pInterior2, title: "Modern Residence", loc: "San Antonio, TX" },
  { src: pBim1, title: "Family Home", loc: "Tacoma, WA" },
  { src: pResidential2, title: "Hospitality Interior Render", loc: "Houston, TX" },
  { src: pInterior3, title: "Coastal Restaurant Terrace Design", loc: "Galveston, TX" },
  { src: pCommercial2, title: "Stone Wall Staircase Interior", loc: "Plano, TX" },
  { src: pMaster1, title: "Corporate Office Block", loc: "Dallas, TX" },
  { src: pPort7, title: "Living Visualization", loc: "Dallas, TX" },
  { src: pPort20, title: "Family Home", loc: "Tacoma, WA" },
  { src: pPort2, title: "Open_Plan Living Visualization", loc: "Dallas, TX" },
  { src: pPort3, title: "Open-Plan Living Visualization", loc: "Dallas, TX" },
  { src: pPort8, title: "Elegant Privacy", loc: "Austin, TX" },
  // { src: pPort30, title: "Elegant Privacy", loc: "Austen, TX" },
  { src: pPort1, title: "Modern Resindence", loc: "Austin, TX" },
  { src: pPort19, title: "Forest House", loc: "Houston, TX" },
  { src: pPort23, title: "Lakeside Modern Residence", loc: "Galveston, TX" },
  { src: pPort27, title: "Family Home", loc: "Austin, TX" },
  { src: pPort28, title: "Bedroom Design", loc: "Houston, TX" },
  { src: pPort29, title: "Hospitality Interior Render", loc: "Houston, TX" },
  { src: pPort31, title: "Spa Bathroom Design", loc: "Austin, TX" },
  { src: pPort32, title: "Family Home", loc: "San Antonio, TX" },
  { src: pPort33, title: "Forest House", loc: "Houston, TX" },
  { src: pPort34, title: "Forest House", loc: "Houston, TX" },
  { src: pPort35, title: "Modern Resindence", loc: "Austin, TX" },
  { src: pPort36, title: "Family Home", loc: "Austin, TX" },
  { src: pPort10, title: "Elegant Privacy", loc: "Austin, TX" },
  { src: pPort16, title: "Hospitality Interior Render", loc: "San Antonio, TX" },
  { src: pPort9, title: "Modern Garden Pavilion Layout", loc: "Houston, TX" },
  
  
  

];

const STEPS = [
  { n: "01", title: "Project intake", desc: "Share files, sketches, or schedule on-site measurement (Texas)." },
  { n: "02", title: "Scope & quote", desc: "We review deliverables and return a fixed quote and timeline within 24 hrs." },
  { n: "03", title: "Drafting & modeling", desc: "Your CAD drawings or BIM model are produced by our senior team." },
  { n: "04", title: "Rendering & revisions", desc: "Visuals refined collaboratively until every detail is right." },
  { n: "05", title: "Final delivery", desc: "Native files, PDFs and image assets - organized and ready to use." },
];

function HomePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-studio grid gap-10 pt-12 pb-16 md:grid-cols-12 md:gap-12 md:pt-20 md:pb-24">
          <div className="md:col-span-6 md:pt-8">
            <Reveal>
              <p className="eyebrow">Alternative Sky Design · Est. Texas</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-balance text-primary md:text-7xl">
                Drawings,
                <br />
                models, and
                <br />
                <em className="font-light italic text-accent">renderings</em> -
                <br />
                drawn precisely.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We turn rough sketches, PDFs and field measurements into
                production-ready CAD drawings, coordinated BIM models, and
                photoreal 3D visualizations.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-primary/20 px-7 py-4 text-sm font-medium text-primary transition-all hover:border-primary"
                >
                  Send Your Project
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px w-10 bg-border" />
                Based in Texas · Serving Local & Remote Projects
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary md:aspect-[5/6]">
                <img
                  src={heroImg}
                  alt="Modern architectural rendering of a contemporary home at sunset"
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1080}
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-primary-foreground">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-80">
                      Featured render
                    </p>
                    <p className="mt-1 font-display text-lg">Pergola Lounge Outdoor Living · TX</p>
                  </div>
                  <span className="text-xs opacity-80">Exterior · 3D</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-studio grid grid-cols-2 gap-8 py-10 text-sm text-muted-foreground md:grid-cols-4">
          {[
            ["5+ yrs", "Drafting experience"],
            ["200+", "Drawings delivered"],
            ["48 hr", "Average turnaround"],
            ["2 states", "Texas + Washington"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-display text-3xl text-primary">{k}</p>
              <p className="mt-1">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-studio py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Services built<br />for builders.
            </h2>
            <p className="mt-5 max-w-sm text-muted-foreground">
              Six core capabilities, one studio. Choose any combination - we
              scale to fit the deliverable you actually need.
            </p>
            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary"
            >
              All services →
            </Link>
          </div>
          <div className="grid gap-px bg-border md:col-span-8 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                to="/service/$slug"
                params={{ slug: s.slug }}
                className="group bg-background p-8 transition-colors hover:bg-secondary/50"
              >
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="border-t border-border bg-secondary/30 py-20 md:py-32">
        <div className="container-studio">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
                A quiet, careful<br />portfolio.
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary">
              View all projects →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="overflow-hidden bg-secondary" style={{ height: "260px" }} onClick={() => setLightbox(i)}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-studio py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Five steps,<br />no surprises.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ol className="divide-y divide-border border-y border-border">
              {STEPS.map((s) => (
                <li key={s.n} className="grid grid-cols-12 gap-6 py-7">
                  <span className="col-span-2 font-display text-2xl text-accent md:text-3xl">{s.n}</span>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-display text-xl text-primary">{s.title}</h3>
                  </div>
                  <p className="col-span-12 text-sm text-muted-foreground md:col-span-6">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-studio grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground/60">
              Start a project
            </p>
            <h2 className="mt-5 font-display text-4xl text-balance md:text-6xl">
              Send us a sketch, a PDF, or a site -<br />
              <span className="italic text-accent">we'll handle the rest.</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
            >
              Request a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>

          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox - 1);
              }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
          )}

          {lightbox < PORTFOLIO.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox + 1);
              }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          )}

          <div
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PORTFOLIO[lightbox].src}
              alt={PORTFOLIO[lightbox].title}
              className="max-h-[75vh] max-w-[90vw] object-cover" //su yer
            />
            <div className="text-center text-white">
              <p className="font-display text-3xl md:text-4xl">{PORTFOLIO[lightbox].title}</p>
              <p className="mt-2 text-base md:text-lg text-white/70">{PORTFOLIO[lightbox].loc}</p>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
