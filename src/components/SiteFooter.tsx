import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-studio py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl">AltSky</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground/60">
                Design
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Alternative Sky Design LLC — a CAD, BIM and 3D visualization studio
              turning sketches, PDFs and site measurements into precise, production-ready
              drawings and renderings.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-primary-foreground/50">Studio</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="text-primary-foreground/80 hover:text-primary-foreground">Portfolio</Link></li>
              <li><Link to="/process" className="text-primary-foreground/80 hover:text-primary-foreground">Process</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-primary-foreground/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>hello@altskydesign.com</li>
              <li>Texas — On-site & remote</li>
              <li>Washington State — Remote only</li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 text-sm font-medium hover:border-primary-foreground"
            >
              Start a project →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alternative Sky Design LLC. All rights reserved.</p>
          <p>CAD · BIM · 3D Visualization · Architectural Support</p>
        </div>
      </div>
    </footer>
  );
}
