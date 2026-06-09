import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";
import studio from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alternative Sky Design LLC | AltSky Design" },
      { name: "description", content: "AltSky Design is a Texas-based architectural support studio specializing in accurate CAD, BIM and 3D visualization for builders, developers and architects." },
      { property: "og:title", content: "About — AltSky Design" },
      { property: "og:description", content: "Accuracy, reliability and clean drafting from a Texas-based studio." },
      { property: "og:image", content: studio },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Accuracy", d: "Every line is intentional. We draft to standard, double-check dimensions, and version everything." },
  { t: "Reliability", d: "Quotes you can trust, deadlines we hold, and predictable communication throughout the project." },
  { t: "Clean work", d: "Layered, named and organized files — handed off ready for the next person to use them." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-studio pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">About the studio</p>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance text-primary md:text-7xl">
                A small studio<br />for <em className="font-light italic text-accent">careful</em> work.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Alternative Sky Design LLC is a Texas-based architectural support
                studio founded on a simple idea: the people drafting your plans
                and rendering your buildings should care about the work as much
                as you do.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We partner with homeowners, builders, contractors, real estate
                developers, and design firms — handling the parts of a project
                that need precision, patience and a steady hand on the mouse.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={studio}
                  alt="Architect drafting on plans alongside a laptop"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-studio py-16 md:py-24">
        <div className="grid gap-10 border-t border-border pt-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What we value</p>
            <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">
              Three principles<br />we don't bend.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {VALUES.map((v) => (
                <div key={v.t} className="grid grid-cols-12 gap-6 py-7">
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-display text-2xl text-primary">{v.t}</h3>
                  </div>
                  <p className="col-span-12 text-muted-foreground md:col-span-8">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-studio py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-secondary/50 p-10 md:p-14">
            <p className="eyebrow">Texas — Primary</p>
            <h3 className="mt-4 font-display text-3xl text-primary md:text-4xl">Local & on-site</h3>
            <p className="mt-4 text-muted-foreground">
              Texas is home base. We provide on-site measurement, as-built
              documentation and full design support across the state.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground">
              {["On-site field measurement", "As-built documentation", "Full CAD, BIM & rendering pipeline"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-accent" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-10 md:p-14">
            <p className="eyebrow">Washington State — Remote</p>
            <h3 className="mt-4 font-display text-3xl text-primary md:text-4xl">Remote & seamless</h3>
            <p className="mt-4 text-muted-foreground">
              For Washington projects we deliver every service remotely —
              drafting, modeling and visualization — with the same standards
              and turnaround.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground">
              {["CAD & BIM drafting", "3D modeling & rendering", "Cloud collaboration & file delivery"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-accent" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-studio py-20 text-center md:py-28">
          <h2 className="font-display text-4xl text-balance md:text-6xl">
            Built quietly. Delivered <em className="font-light italic text-accent">on time.</em>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex bg-accent px-8 py-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            Work with us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
