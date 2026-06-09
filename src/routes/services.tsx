import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CAD, BIM & 3D Rendering | AltSky Design" },
      {
        name: "description",
        content:
          "Detailed CAD drafting, BIM modeling, PDF-to-CAD, 2D-to-3D, photoreal rendering, and on-site measurement services for builders, architects and developers.",
      },
      { property: "og:title", content: "Services — AltSky Design" },
      { property: "og:description", content: "Production-ready architectural drafting, BIM and 3D visualization." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "2D & 3D CAD Drawings",
    desc: "Floor plans, elevations, sections, details and construction sets drafted to your office standards in AutoCAD.",
    use: "Permit sets, working drawings, redlines and as-builts.",
    benefit: "Drawings that pass review the first time and read clearly on site.",
  },
  {
    title: "BIM Modeling (Revit)",
    desc: "LOD 200–400 architectural BIM models with families, schedules and coordinated views.",
    use: "Multi-discipline coordination, clash detection, quantity takeoff.",
    benefit: "One source of truth — fewer RFIs, faster downstream documentation.",
  },
  {
    title: "PDF to CAD Conversion",
    desc: "Pixel-perfect redraws of PDF, scanned or hand-drawn plans into clean, layered CAD files.",
    use: "Legacy drawings, vendor PDFs, marked-up sketches.",
    benefit: "Editable, accurate base files you can build the rest of the project on.",
  },
  {
    title: "2D to 3D Modeling",
    desc: "Accurate 3D geometry built from your 2D drawings — site-correct and rendering-ready.",
    use: "Concept studies, marketing visuals, design review.",
    benefit: "See the project before it's built; catch issues early.",
  },
  {
    title: "3D Rendering — Interior & Exterior",
    desc: "Photoreal stills with considered lighting, materials and composition.",
    use: "Listings, investor decks, planning submissions, client approvals.",
    benefit: "Visuals that sell the work and shorten decision cycles.",
  },
  {
    title: "Architectural Visualization",
    desc: "Cinematic exterior shots, dusk scenes, aerial context and walkthrough stills.",
    use: "Master plans, residential developments, hospitality, mixed-use.",
    benefit: "A coherent visual language for the entire project.",
  },
  {
    title: "Interior Design Rendering",
    desc: "Materially honest interior visuals — kitchens, baths, lobbies, full residences.",
    use: "Designer presentations, client sign-off, vendor coordination.",
    benefit: "Confident decisions on finishes, lighting and layout.",
  },
  {
    title: "On-Site Measurement (Texas)",
    desc: "Field measurement and as-built documentation across Texas with same-week scheduling.",
    use: "Renovations, remodels, additions, due diligence.",
    benefit: "Reliable as-builts you can hand straight to design and construction teams.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-studio pt-16 pb-10 md:pt-24 md:pb-16">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-balance text-primary md:text-7xl">
            Drafting, modeling and<br />visualization — <em className="font-light italic text-accent">end to end.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-muted-foreground md:text-lg">
            Eight focused services. Engage us for a single deliverable or the
            full pipeline from on-site measurement to final renderings.
          </p>
        </Reveal>
      </section>

      <section className="container-studio">
        <div className="border-t border-border">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 30}>
              <article className="grid grid-cols-12 gap-6 border-b border-border py-12 md:py-16">
                <div className="col-span-12 md:col-span-1">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h2 className="font-display text-2xl text-primary md:text-3xl">{s.title}</h2>
                </div>
                <div className="col-span-12 grid gap-6 md:col-span-7 md:grid-cols-3">
                  <div>
                    <p className="eyebrow">Description</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{s.desc}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Use case</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.use}</p>
                  </div>
                  <div>
                    <p className="eyebrow">Client benefit</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.benefit}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-studio py-20 md:py-28">
        <div className="grid items-center gap-8 bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-16">
          <h2 className="font-display text-3xl text-balance md:text-5xl">
            Have a project in mind? Let's scope it.
          </h2>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent px-8 py-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
