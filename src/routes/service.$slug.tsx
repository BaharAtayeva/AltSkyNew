import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import serviceImg from "@/assets/portfolio-permit-cover.jpg";
import serviceImg2 from "@/assets/port24.png";
import serviceImg3 from "@/assets/port8.jpg";
import serviceImg4 from "@/assets/port1.jpg";
import serviceImg5 from "@/assets/port13.jpg";
import serviceImg6 from "@/assets/port21.jpg";

export const SERVICE_DETAILS = [
  {
    slug: "cad-drawings",
    title: "2D & 3D CAD Drawings",
    desc: "Floor plans, elevations, sections, details and construction sets drafted to your office standards in AutoCAD.",
    use: "Permit sets, working drawings, redlines and as-builts.",
    benefit: "Drawings that pass review the first time and read clearly on site.",
    img: serviceImg,
  },
  {
    slug: "bim-modeling",
    title: "BIM Modeling",
    desc: "Coordinated Revit models that keep documentation, geometry and data in sync.",
    use: "Multi-discipline coordination, clash detection, quantity takeoff.",
    benefit: "One source of truth - fewer RFIs, faster downstream documentation.",
    img: serviceImg2,
  },
  {
    slug: "pdf-to-cad",
    title: "PDF to CAD Conversion",
    desc: "Clean, editable CAD files redrawn from PDFs, scans or hand sketches.",
    use: "Legacy drawings, vendor PDFs, marked-up sketches.",
    benefit: "Editable, accurate base files you can build the rest of the project on.",
    img: serviceImg3,
  },
  {
    slug: "2d-to-3d",
    title: "2D to 3D Modeling",
    desc: "Accurate 3D geometry built from your 2D drawings - ready for visualization.",
    use: "Concept studies, marketing visuals, design review.",
    benefit: "See the project before it's built; catch issues early.",
    img: serviceImg4,
  },
  {
    slug: "3d-rendering",
    title: "3D Rendering",
    desc: "Photoreal interior and exterior visuals that help projects sell themselves.",
    use: "Listings, investor decks, planning submissions, client approvals.",
    benefit: "Visuals that sell the work and shorten decision cycles.",
    img: serviceImg5,
  },
  {
    slug: "on-site-measurement",
    title: "On-Site Measurement",
    desc: "As-built documentation captured on location across Texas.",
    use: "Renovations, remodels, additions, due diligence.",
    benefit: "Reliable as-builts you can hand straight to design and construction teams.",
    img: serviceImg6,
  },
];

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }) => {
    const service = SERVICE_DETAILS.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} | AltSky Design` },
      { name: "description", content: loaderData?.desc ?? "" },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-studio pt-16 pb-10 md:pt-24 md:pb-16">
        <Reveal>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-balance text-primary md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-7 max-w-2xl text-muted-foreground md:text-lg">
            {service.desc}
          </p>
        </Reveal>
      </section>

      <section className="container-studio pb-16">
        <Reveal delay={80}>
          <div className="aspect-[16/9] w-full overflow-hidden bg-secondary">
            <img
              src={service.img}
              alt={service.title}
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-studio pb-20 md:pb-28">
        <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Use case</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">{service.use}</p>
          </Reveal>
          <Reveal delay={60}>
            <p className="eyebrow">Client benefit</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">{service.benefit}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-studio pb-20 md:pb-28">
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
