import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Box, Layers, Pencil, Sparkles, Ruler } from "lucide-react";
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
  { icon: Pencil, title: "2D & 3D CAD Drawings", desc: "Production-ready plans, elevations and details drafted to your standards." },
  { icon: Layers, title: "BIM Modeling", desc: "Coordinated Revit models that keep documentation, geometry and data in sync." },
  { icon: FileText, title: "PDF to CAD Conversion", desc: "Clean, editable CAD files redrawn from PDFs, scans or hand sketches." },
  { icon: Box, title: "2D to 3D Modeling", desc: "Accurate 3D geometry built from your 2D drawings - ready for visualization." },
  { icon: Sparkles, title: "3D Rendering", desc: "Photoreal interior and exterior visuals that help projects sell themselves." },
  { icon: Ruler, title: "On-Site Measurement", desc: "As-built documentation captured on location across Texas." },
];

const PORTFOLIO = [
  pResidential1, pInterior1, pCommercial1, pCad1,
  pInterior2, pBim1, pResidential2, pInterior3,
  pCommercial2, pMaster1,
];

const STEPS = [
  { n: "01", title: "Project intake", desc: "Share files, sketches, or schedule on-site measurement (Texas)." },
  { n: "02", title: "Scope & quote", desc: "We review deliverables and return a fixed quote and timeline within 24 hrs." },
  { n: "03", title: "Drafting & modeling", desc: "Your CAD drawings or BIM model are produced by our senior team." },
  { n: "04", title: "Rendering & revisions", desc: "Visuals refined collaboratively until every detail is right." },
  { n: "05", title: "Final delivery", desc: "Native files, PDFs and image assets - organized and ready to use." },
];

function HomePage() {
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
                    <p className="mt-1 font-display text-lg">Hill Country Residence · TX</p>
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
              <div key={s.title} className="group bg-background p-8 transition-colors hover:bg-secondary/50">
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
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

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {PORTFOLIO.map((src, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className={`overflow-hidden bg-background ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
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

      <SiteFooter />
    </div>
  );
}
