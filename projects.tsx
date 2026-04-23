import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Eye, Network, ArrowRight, Sparkles } from "lucide-react";
import { PageShell, SectionHeading } from "../components/Section";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bodapati Nookaraju" },
      {
        name: "description",
        content:
          "Flagship AI/ML projects — University Chatbot (NLP), CNN Image Classification, and KMT keystroke biometrics & emotion detection system.",
      },
      { property: "og:title", content: "Projects — Bodapati Nookaraju" },
      { property: "og:description", content: "Flagship AI/ML and Full Stack projects." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  flagship?: boolean;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    icon: Network,
    title: "KMT Feature Extraction System",
    tag: "Flagship · Full Stack ML",
    flagship: true,
    description:
      "An end-to-end machine learning platform for keystroke dynamics, behavioral biometrics and emotion detection — combining custom data collection, backend processing and ML analysis.",
    problem:
      "Traditional authentication and emotion analysis rely on shallow signals. Behavioral biometrics from keystroke dynamics offer continuous, unobtrusive insight — but require an integrated pipeline from capture to model.",
    solution:
      "Built a full-stack system that captures keystroke timing across web and Android, ships it to a backend processing layer, extracts behavioral features and runs ML models for biometric identification and emotion classification.",
    features: [
      "Cross-platform data collection (Web + Android)",
      "Custom feature extraction pipeline",
      "Behavioral biometrics modeling",
      "Emotion detection from typing patterns",
      "Backend processing & API",
    ],
    stack: ["Python", "Scikit-learn", "Flask", "Android", "JavaScript", "ML Pipelines"],
  },
  {
    icon: Bot,
    title: "University Chatbot",
    tag: "NLP · Real-world Usability",
    description:
      "An AI chatbot that answers university questions in natural language — fees, academics, labs and more — designed to feel like talking to a helpful campus insider.",
    problem:
      "Students and parents struggle to find structured university information scattered across PDFs and pages.",
    solution:
      "Designed an NLP-powered conversational interface that maps natural questions to structured university data and returns precise, contextual answers.",
    features: [
      "Fee structure queries",
      "Academic & curriculum details",
      "Lab and facility information",
      "Conversational, intent-aware NLP",
    ],
    stack: ["Python", "NLP", "Flask", "JavaScript"],
  },
  {
    icon: Eye,
    title: "Image Classification Model",
    tag: "Deep Learning · CNN",
    description:
      "A convolutional neural network for accurate image classification — trained, evaluated and tuned with a clean, reproducible pipeline.",
    problem:
      "Reliable image classification needs more than a model — it needs a thoughtful pipeline of preprocessing, augmentation and evaluation.",
    solution:
      "Engineered a CNN architecture with data augmentation, training callbacks and metric-driven evaluation to maximize generalization.",
    features: [
      "Convolutional architecture",
      "Data augmentation",
      "Train / validation / test pipeline",
      "Metric-driven model selection",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
  },
];

function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Projects"
        title={<>Selected work where <span className="text-gradient">AI meets product</span>.</>}
        subtitle="From NLP chatbots to behavioral biometrics — these are the systems I've designed end-to-end."
      />

      <div className="mt-12 space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`relative rounded-3xl glass-strong p-6 sm:p-8 border-gradient overflow-hidden ${
              p.flagship ? "glow-violet" : ""
            }`}
          >
            {p.flagship && (
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl pointer-events-none" />
            )}

            <div className="relative grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-background">
                    <p.icon className="h-6 w-6" />
                  </div>
                  {p.flagship && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet/15 text-violet px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-violet/30">
                      <Sparkles className="h-3 w-3" /> Flagship
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs font-mono uppercase tracking-widest text-primary">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md glass px-2 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl glass p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-violet">Problem</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.problem}</p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary">Solution</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
                </div>
                <div className="sm:col-span-2 rounded-2xl glass p-5">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Key features</p>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-background glow-blue hover:opacity-90"
        >
          Discuss a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </PageShell>
  );
}
