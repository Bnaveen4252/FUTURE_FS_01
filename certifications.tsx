import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Cloud, BrainCircuit, Sparkles } from "lucide-react";
import { PageShell, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Bodapati Nookaraju" },
      {
        name: "description",
        content:
          "AWS Cloud Practitioner prep, AWS Machine Learning Specialty prep, and GenAI Data Analytics Job Simulation by Forage.",
      },
      { property: "og:title", content: "Certifications — Bodapati Nookaraju" },
      { property: "og:description", content: "AWS, ML and GenAI certifications & simulations." },
    ],
  }),
  component: CertsPage,
});

const certs = [
  {
    icon: Cloud,
    issuer: "AWS",
    title: "AWS Certified Cloud Practitioner",
    status: "Practice Set Completed",
    color: "from-primary to-primary",
  },
  {
    icon: BrainCircuit,
    issuer: "AWS",
    title: "AWS Machine Learning Specialty (Prep)",
    status: "In Progress",
    color: "from-primary to-violet",
  },
  {
    icon: Sparkles,
    issuer: "Forage",
    title: "GenAI Data Analytics Job Simulation",
    status: "Completed",
    color: "from-violet to-violet",
  },
];

function CertsPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Certifications"
        title={<>Receipts of <span className="text-gradient">continuous learning</span>.</>}
        subtitle="A growing set of credentials and simulations across cloud, ML and Generative AI."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl glass-strong p-6 border-gradient hover:glow-blue transition"
          >
            <div className="flex items-center justify-between">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-background`}>
                <c.icon className="h-6 w-6" />
              </div>
              <Award className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
            </div>
            <p className="mt-5 text-xs font-mono uppercase tracking-widest text-primary">{c.issuer}</p>
            <h3 className="mt-1 font-display text-lg font-semibold leading-tight">{c.title}</h3>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              {c.status}
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
