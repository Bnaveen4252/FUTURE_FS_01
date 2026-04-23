import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BrainCircuit, Cpu, Code2, Rocket } from "lucide-react";
import heroNeural from "../assets/hero-neural.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bodapati Nookaraju — AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Building intelligent systems with AI, Machine Learning, NLP and Full Stack technologies. Explore projects, skills and certifications.",
      },
      { property: "og:title", content: "Bodapati Nookaraju — AI Engineer Portfolio" },
      {
        property: "og:description",
        content: "Building intelligent systems with AI & Full Stack technologies.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { label: "AI / ML Projects", value: "10+" },
  { label: "Tech Stacks", value: "15+" },
  { label: "Certifications", value: "3" },
  { label: "Focus", value: "AI · ML · FS" },
];

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI / ML Engineering",
    text: "Designing models for NLP, vision and behavioral analytics with PyTorch, scikit-learn and OpenCV.",
  },
  {
    icon: Code2,
    title: "Full Stack Delivery",
    text: "Shipping end-to-end products with React, Node, Flask and clean, scalable architecture.",
  },
  {
    icon: Cpu,
    title: "Applied Research",
    text: "Translating research ideas — keystroke dynamics, biometrics, emotion AI — into real systems.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Available for AI / ML opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Building <span className="text-gradient">intelligent systems</span> with AI & Full Stack technologies.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Bodapati Nookaraju</span> — an AI Engineer,
              Machine Learning enthusiast and Full Stack Developer (AIML). I turn data and ideas into
              production-grade products that think.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition glow-blue"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/5 border-gradient"
              >
                Contact Me
              </Link>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="font-display text-2xl font-semibold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-strong shadow-elevated">
              <img
                src={heroNeural}
                alt="Holographic AI brain made of neon cyan and purple circuitry over a hexagonal grid horizon"
                width={1920}
                height={1280}
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Neural · Online
                </div>
                <p className="mt-2 text-sm text-foreground/90">
                  "Curiosity compiled into code. Models that learn, products that ship."
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl glass border-gradient animate-float flex items-center justify-center">
              <BrainCircuit className="h-10 w-10 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-2xl glass border-gradient animate-float flex items-center justify-center" style={{ animationDelay: "-3s" }}>
              <Rocket className="h-8 w-8 text-violet" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl glass p-6 border-gradient hover:glow-blue transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-background">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-14 border-gradient">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                  Let's build something <span className="text-gradient">impactful</span>.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Open to AI Engineer, ML, and Full Stack roles. Ship intelligent products with me.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-background glow-blue hover:opacity-90"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
