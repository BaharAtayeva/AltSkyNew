import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Clock, Upload, Check, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Start a Project | AltSky Design" },
      { name: "description", content: "Send your project to AltSky Design. CAD, BIM and 3D rendering quotes within 24 hours. Texas & Washington State." },
    ],
  }),
  component: ContactPage,
});

const PROJECT_TYPES = [
  "2D / 3D CAD Drawings",
  "BIM Modeling",
  "PDF to CAD Conversion",
  "2D to 3D Modeling",
  "3D Rendering - Interior",
  "3D Rendering - Exterior",
  "Architectural Visualization",
  "On-site Measurement (TX)",
  "Other",
] as const;

const ContactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a phone number").max(30),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().trim().min(2, "Please enter a project location").max(120),
  message: z.string().trim().min(10, "Tell us a bit about the project").max(2000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      fullName: String(fd.get("fullName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      projectType: String(fd.get("projectType") || ""),
      location: String(fd.get("location") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = ContactSchema.safeParse(data);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fe[String(i.path[0])] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        "service_2k8ug1d",
        "template_9jfsm9s",
        data,
        "p3fRgfJ2hpdOjdv4y"
      );
      setSent(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-studio pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-primary md:text-7xl">
          Tell us about<br />the <em className="font-light italic text-accent">project.</em>
        </h1>
        <p className="mt-7 max-w-2xl text-muted-foreground md:text-lg">
          Send files, sketches or just a brief - we'll review and reply with a fixed quote and timeline within 24 hours.
        </p>
      </section>
      <section className="container-studio pb-24">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-12 md:gap-16">
          <aside className="space-y-10 md:col-span-4">
            <div>
              <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="mt-3 eyebrow">Email</p>
              <p className="mt-2 text-foreground">Projects@altsky.design</p>
            </div>
            <div>
              <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="mt-3 eyebrow">Service area</p>
              <p className="mt-2 text-foreground">Texas - On-site & remote</p>
              <p className="text-foreground">Washington State - Remote only</p>
            </div>
            <div>
              <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="mt-3 eyebrow">Phone Call</p>
              <p className="mt-2 text-foreground">+1 (832) 815-2943</p>
            </div>
          
          </aside>
          <div className="md:col-span-8">
            {sent ? (
              <div className="border border-border bg-secondary/50 p-10 text-center md:p-16">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <Check className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-6 font-display text-3xl text-primary">Message received.</h2>
                <p className="mt-3 text-muted-foreground">
                  Thanks for reaching out. We'll review your project and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2" noValidate>
                <Field label="Full name" name="fullName" error={errors.fullName} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                <div>
                  <label className="eyebrow block">Project type</label>
                  <select
                    name="projectType"
                    defaultValue=""
                    className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground focus:border-primary focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled>Select…</option>
                    {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  {errors.projectType && <p className="mt-2 text-xs text-destructive">{errors.projectType}</p>}
                </div>
                <Field label="Project location (City, State)" name="location" error={errors.location} className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="eyebrow block">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about deliverables, timeline, and anything else relevant."
                    className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0"
                  />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="eyebrow block">File link (optional)</label>
                  <input
                    name="fileLink"
                    type="text"
                    placeholder="https://drive.google.com/... or WeTransfer, Dropbox"
                    className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-primary px-8 py-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 md:w-auto"
                  >
                    {sending ? "Sending…" : "Send project"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({
  label, name, type = "text", error, className = "",
}: { label: string; name: string; type?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="eyebrow block">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground focus:border-primary focus:outline-none focus:ring-0"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
