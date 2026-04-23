import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Library, Globe } from "lucide-react";
import { PageShell, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tech Stack — Bodapati Nookaraju" },
      {
        name: "description",
        content:
          "AI/ML, Deep Learning, NLP, Computer Vision, Python, React, Node, Flask — the tools Bodapati Nookaraju uses to ship intelligent products.",
      },
      { property: "og:title", content: "Skills & Tech Stack — Bodapati Nookaraju" },
      { property: "og:description", content: "Languages, AI/ML, libraries and full-stack tooling." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    icon: Code2,
    name: "Languages",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    icon: BrainCircuit,
    name: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    icon: Library,
    name: "Libraries & Frameworks",
    items: ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "OpenCV", "Matplotlib"],
  },
  {
    icon: Globe,
    name: "Web & Deployment",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Flask", "Git", "GitHub"],
  },
];

function SkillsPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Skills"
        title={<>The <span className="text-gradient">stack</span> behind the systems.</>}
        subtitle="A focused toolkit for building intelligent, production-ready products end-to-end."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="rounded-2xl glass p-6 border-gradient hover:glow-blue transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center text-background">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.name}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="group cursor-default rounded-lg glass px-3 py-1.5 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl glass-strong p-6 sm:p-8 border-gradient">
        <p className="text-sm font-mono uppercase tracking-widest text-primary">Currently exploring</p>
        <h4 className="mt-2 font-display text-2xl font-semibold">
          Generative AI · LLM apps · MLOps · AWS
        </h4>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Building toward a future where intelligent systems are reliable, observable, and shipped on
          modern cloud infrastructure.
        </p>
      </div>
    </PageShell>
  );
}
