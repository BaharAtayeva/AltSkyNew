import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How AltSky Design Delivers Projects" },
      { name: "description", content: "Our 5-step workflow: project intake, scope & quote, drafting & modeling, rendering & revisions, final delivery. Predictable. Precise." },
      { property: "og:title", content: "Process — AltSky Design" },
      { property: "og:description", content: "A clear five-step workflow from intake to final delivery." },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  {
    n: "01",
    title: "Project intake",
    short: "Files in or measurements on site.",
    desc:
      "Send us PDFs, sketches, photos or existing CAD files. For Texas projects we can also schedule on-site measurement to capture an accurate as-built record.",
    out: "Brief, source files, measurements, scope notes.",
  },
  {
    n: "02",
    title: "Scope review & quote",
    short: "Fixed price. Clear timeline.",
    desc:
      "We review what's needed, confirm deliverables and return a fixed quote with milestones — typically within 24 hours of intake.",
    out: "Fixed-fee quote, milestone schedule, signed agreement.",
  },
  {
    n: "03",
    title: "Drafting & modeling",
    short: "The studio gets to work.",
    desc:
      "Senior drafters and modelers produce your CAD set, BIM model or 3D geometry to your standards — layered, organized and reviewable at any stage.",
    out: "CAD drawings, BIM model, 3D geometry, internal QA.",
  },
  {
    n: "04",
    title: "Rendering & revisions",
    short: "Refined together until it's right.",
    desc:
      "Photoreal renderings are produced and refined alongside your team. Two rounds of revisions are standard; further rounds are quoted transparently.",
    out: "Draft renderings, marked-up reviews, final visuals.",
  },
  {
    n: "05",
    title: "Final delivery",
    short: "Everything, organized.",
    desc:
      "Native files, PDFs, image exports and a clean folder structure — packaged and handed over so the next person on the project can pick it up immediately.",
    out: "DWG / RVT / images / PDFs / project archive.",
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-studio pt-16 pb-12 md:pt-24 md:pb-20">
        <p className="eyebrow">Process</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-primary md:text-7xl">
          Five steps from<br /> brief to <em className="font-light italic text-accent">delivery.</em>
        </h1>
        <p className="mt-7 max-w-2xl text-muted-foreground md:text-lg">
          A predictable workflow designed for builders, developers and design
          firms who need accurate work delivered on schedule.
        </p>
      </section>

      <section className="container-studio pb-20">
        <div className="border-t border-border">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="grid grid-cols-12 gap-6 border-b border-border py-12 md:py-20">
                <div className="col-span-3 md:col-span-2">
                  <span className="font-display text-5xl text-accent md:text-7xl">{s.n}</span>
                </div>
                <div className="col-span-9 md:col-span-5">
                  <p className="eyebrow">Step {i + 1}</p>
                  <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">{s.title}</h2>
                  <p className="mt-3 font-display italic text-muted-foreground md:text-lg">{s.short}</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-base leading-relaxed text-foreground">{s.desc}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="eyebrow">Output</p>
                    <p className="mt-2 text-sm text-muted-foreground">{s.out}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-studio pb-24">
        <div className="flex flex-col items-start justify-between gap-8 bg-primary p-10 text-primary-foreground md:flex-row md:items-center md:p-16">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground/60">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl text-balance md:text-5xl">
              Let's start with step one.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-accent px-8 py-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Send your project
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
