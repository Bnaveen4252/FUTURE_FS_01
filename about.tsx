import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Target, GraduationCap, Sparkles } from "lucide-react";
import { PageShell, SectionHeading } from "../components/Section";
import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bodapati Nookaraju" },
      {
        name: "description",
        content:
          "Learn about Bodapati Nookaraju — an AI Engineer passionate about Machine Learning, problem solving, and real-world AI applications.",
      },
      { property: "og:title", content: "About — Bodapati Nookaraju" },
      { property: "og:description", content: "AI Engineer mindset, continuous learning, real-world AI." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI Engineer Mindset",
    text: "I think in systems — data pipelines, models, evaluation, deployment. Not just notebooks, but products.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving First",
    text: "Every line of code starts with a real problem. I work backwards from impact, not from frameworks.",
  },
  {
    icon: Target,
    title: "Real-World AI",
    text: "From chatbots to behavioral biometrics, I focus on AI that ships and serves humans.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Cloud, GenAI, MLOps — I keep my edge sharp through certifications and consistent practice.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="About me"
        title={<>An engineer wired for <span className="text-gradient">intelligence</span>.</>}
        subtitle="I'm Bodapati Nookaraju — an AI Engineer, ML enthusiast and Full Stack Developer (AIML). I love the moment data starts to speak — when a model's prediction nudges a real decision, or when a chatbot finally answers like it understands. My work sits at the intersection of applied AI and clean, shippable software."
      />

      <div className="grid lg:grid-cols-12 gap-10 mt-14 items-start">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong border-gradient shadow-elevated">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violet/30 mix-blend-screen pointer-events-none z-10" />
            <img
              src={portrait}
              alt="Portrait of Bodapati Nookaraju"
              width={900}
              height={1200}
              loading="lazy"
              className="w-full h-[420px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Engineer · Builder
              </div>
              <p className="mt-1 font-display text-lg font-semibold">Bodapati Nookaraju</p>
              <p className="text-xs text-muted-foreground">AI Engineer · Full Stack (AIML)</p>
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-violet/20 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-5 text-base text-muted-foreground leading-relaxed"
        >
          <p>
            My journey started with curiosity for how machines learn — and grew into a deep practice of
            building <span className="text-foreground">end-to-end intelligent systems</span>. I've designed
            NLP-driven assistants, deep learning vision models, and full-stack ML platforms with custom
            data collection across web and Android.
          </p>
          <p>
            I care about craft: clean architecture, thoughtful UX around AI, and models you can actually
            trust in production. I'm equally comfortable in a Jupyter notebook and a React codebase — and
            that range is my superpower.
          </p>
          <p>
            Right now I'm doubling down on <span className="text-foreground">Generative AI, Cloud (AWS), and MLOps</span>,
            and looking to join a team where I can ship AI that matters.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl glass p-5 hover:glow-blue transition"
              >
                <p.icon className="h-6 w-6 text-primary" />
                <h4 className="mt-3 font-display font-semibold text-foreground">{p.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Journey timeline */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Journey"
          title={<>From curious learner to <span className="text-gradient">AI builder</span>.</>}
        />
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-violet/40 to-transparent" />
          {[
            { year: "Foundations", title: "Programming & Mathematics", text: "Python, SQL, and the math behind ML — linear algebra, probability, optimization." },
            { year: "Applied ML", title: "First models & data pipelines", text: "Built classifiers, explored deep learning with PyTorch, OpenCV computer vision." },
            { year: "Full Stack", title: "Shipping AI products", text: "Combined React/Node/Flask with ML to deliver real apps users could touch." },
            { year: "Flagship", title: "KMT Feature Extraction System", text: "End-to-end ML platform for keystroke dynamics, biometrics & emotion detection." },
            { year: "Now", title: "GenAI · Cloud · MLOps", text: "AWS practitioner prep, ML Specialty prep, GenAI Data Analytics simulation." },
          ].map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid sm:grid-cols-2 gap-6 mb-10 ${i % 2 ? "sm:[&>div:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                <span className="text-xs font-mono uppercase tracking-widest text-primary">{m.year}</span>
                <h4 className="mt-2 font-display text-lg font-semibold">{m.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </div>
              <div className="hidden sm:block" />
              <span className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-primary glow-blue" />
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
