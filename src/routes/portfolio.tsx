import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import pResidential1 from "@/assets/portfolio-residential-1.jpg";
import pInterior1 from "@/assets/portfolio-interior-1.jpg";
import pInterior2 from "@/assets/portfolio-interior-2.jpg";
import pInterior3 from "@/assets/portfolio-interior-3.jpg";
import pCommercial1 from "@/assets/portfolio-commercial-1.jpg";
import pCommercial2 from "@/assets/portfolio-commercial-2.jpg";
import pCad1 from "@/assets/portfolio-cad-1.jpg";
import pCad2 from "@/assets/portfolio-cad-2.jpg";
import pBim1 from "@/assets/portfolio-bim-1.jpg";
import pMaster1 from "@/assets/portfolio-masterplan-1.jpg";
import pPermitCover from "@/assets/portfolio-permit-cover.jpg";
import pPermitSiteplan from "@/assets/portfolio-permit-siteplan.jpg";
import pPermitLevel1 from "@/assets/portfolio-permit-level1.jpg";
import pPermitLevel2 from "@/assets/portfolio-permit-level2.jpg";
import pPermitElevEW from "@/assets/portfolio-permit-elevation-ew.jpg";
import pPermitElevNS from "@/assets/portfolio-permit-elevation-ns.jpg";

import pPort23 from "@/assets/port23.jpg";
import pPort6 from "@/assets/port6.jpg";
import pPort15 from "@/assets/port15.jpg";
import pAbout from "@/assets/about-studio.jpg";
// import pPort7 from "@/assets/port7.jpg";
import pPort17 from "@/assets/port17.jpg";
import pPort9 from "@/assets/port9.jpg";
import pPort14 from "@/assets/port14.jpg";
import pPort11 from "@/assets/port11.jpg";
import pPort22 from "@/assets/port22.jpg";
import pPort25 from "@/assets/port25.png";
import pPort24 from "@/assets/port24.png";
import pPort1 from "@/assets/port1.jpg";
// import pResidential2 from "@/assets/portfolio-residential-2.jpg";
import pPort8 from "@/assets/port8.jpg";



export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Architectural CAD, BIM & 3D Renderings | AltSky Design" },
      { name: "description", content: "Selected residential, commercial, interior, masterplan, CAD/BIM and 3D rendering work by AltSky Design." },
      { property: "og:title", content: "Portfolio - AltSky Design" },
      { property: "og:description", content: "Selected projects across residential, commercial, interior, masterplan, CAD/BIM and 3D rendering." },
      /// { property: "og:image", content: pResidential2 },
    ],
  }),
  component: PortfolioPage,
});

type Cat = "All" | "Residential" | "Commercial" | "Interior Design" | "Masterplans" | "CAD/BIM" | "3D Rendering"; //  | "Permit Drawings"

const ITEMS: { src: string; title: string; cat: Exclude<Cat, "All">; loc: string }[] = [
  { src: pPort23, title: "Lakeside Modern Residence", cat: "Residential", loc: "Galveston, TX" },
  { src: pPort22, title: "Hillside Residence", cat: "Residential", loc: "Austin, TX" },
  { src: pMaster1, title: "Corporate Office Block", cat: "Commercial", loc: "Dallas, TX" },
  { src: pCad1, title: "Bedroom & Study Nook Design", cat: "Commercial", loc: "Austin, TX" },
  { src: pInterior3, title: "Coastal Restaurant Terrace Design ", cat: "Commercial", loc: "Galveston, TX" },
  { src: pPort15, title: "Wood & Marble Kitchen", cat: "Interior Design", loc: "San Antonio, TX" },
  { src: pPort11, title: "Spa Bathroom Design", cat: "Interior Design", loc: "San Antonio, TX" },
  // { src: pBim1, title: "Multi-Story BIM Model", cat: "CAD/BIM", loc: "Tacoma, WA" },
  { src: pCommercial1, title: "Stone & Cedar Family Home", cat: "Residential", loc: "Fort Worth, TX" },
  { src: pPort17, title: "Steel Forest House", cat: "Residential", loc: "Houston, TX" },
  // { src: pResidential2, title: "Hospitality Interior Render", cat: "Interior Design", loc: "Houston, TX" },
  { src: pPort1, title: "Modern Resindence", cat: "Residential", loc: "Austin, TX" },
  
  { src: pPort25, title: "Wood Cabin Visualization Workflow", cat: "3D Rendering", loc: "Austin, TX" },
  { src: pPort24, title: "Brick & Timber Villa Render", cat: "3D Rendering", loc: "Houston, TX" },
  { src: pPort6, title: "Hospitality Interior Render", cat: "Commercial", loc: "Houston, TX" },
  { src: pAbout, title: "Suburban Masterplan Study", cat: "Masterplans", loc: "Bellevue, WA" },
  { src: pPort9, title: "Modern Garden Pavilion Layout", cat: "Masterplans", loc: "Houston, TX" },
  { src: pPort14, title: "Forest Cabin Site Visualization", cat: "Masterplans", loc: "Austin, TX" },
  { src: pCommercial2, title: "Stone Wall Staircase Interior", cat: "Interior Design", loc: "Plano, TX" },
  
  // { src: pPort7, title: "Living Visualization", cat: "Interior Design", loc: "Dallas, TX" },
  { src: pPort8, title: "Elegant Privacy", cat: "Masterplans", loc: "Austin, TX" },
  { src: pResidential1, title: "Living Visualization", cat: "Masterplans", loc: "Austin, TX"},
  // Permit Drawings — Seattle Residential Addition
  { src: pPermitCover, title: "Seattle Residential Addition - Cover", cat: "CAD/BIM", loc: "Seattle, WA" },
  { src: pPermitSiteplan, title: "Seattle Residential Addition - Site Plan", cat: "CAD/BIM", loc: "Seattle, WA" },
  { src: pPermitLevel1, title: "Seattle Residential Addition - Proposed Level 1", cat: "CAD/BIM", loc: "Seattle, WA" },
  { src: pPermitLevel2, title: "Seattle Residential Addition - Proposed Level 2", cat: "CAD/BIM", loc: "Seattle, WA" },
  { src: pPermitElevEW, title: "Seattle Residential Addition - East/West Elevations", cat: "CAD/BIM", loc: "Seattle, WA" },
  { src: pPermitElevNS, title: "Seattle Residential Addition - North/South Elevations", cat: "CAD/BIM", loc: "Seattle, WA" },
  
];

const CATS: Cat[] = ["All", "Residential", "Commercial", "Interior Design", "Masterplans", "CAD/BIM", "3D Rendering",];

function PortfolioPage() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-studio pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-primary md:text-7xl">
          Work shaped by<br />precision and <em className="font-light italic text-accent">restraint.</em>
        </h1>
        <p className="mt-7 max-w-2xl text-muted-foreground md:text-lg">
          A selection of recent drafting, modeling and visualization work across
          residential, commercial and masterplan scales.
        </p>
      </section>

      <section className="container-studio">
        <div className="flex flex-wrap gap-2 border-y border-border py-5">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <article key={item.title} className="group cursor-pointer" onClick={() => setLightbox(i)}>
              
              <div className="overflow-hidden bg-secondary" style={{ height: "260px" }}> 
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg text-primary">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.loc}</p>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                  {item.cat}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>


      {lightbox !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
    onClick={() => setLightbox(null)}
  >
    <button
      className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl font-light"
      onClick={() => setLightbox(null)}
    >
      ✕
    </button>
    {lightbox > 0 && (
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-4"
        onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
      >
        ‹
      </button>
    )}
    {lightbox < filtered.length - 1 && (
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl px-4"
        onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
      >
        ›
      </button>
    )}
    <div className="max-w-7xl w-full px-6 md:px-10" onClick={(e) => e.stopPropagation()}>
      <img
        src={filtered[lightbox].src}
        alt={filtered[lightbox].title}
        className="max-h-[88vh] w-full object-contain"
      />
      <div className="mt-4 flex items-start justify-between">
        <div>
          <p className="font-display text-2xl text-white">{filtered[lightbox].title}</p>
          <p className="mt-1 text-sm text-white/60">{filtered[lightbox].loc}</p>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
          {filtered[lightbox].cat}
        </span>
      </div>
    </div>
  </div>
)}




      <section className="container-studio pb-20">
        <div className="border-t border-border py-12 text-center">
          <p className="font-display text-2xl text-primary md:text-3xl">
            Have a similar project in mind?
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}