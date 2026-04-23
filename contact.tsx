import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { z } from "zod";
import { PageShell, SectionHeading } from "../components/Section";
import { GithubIcon, LinkedinIcon } from "../components/icons/Brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bodapati Nookaraju" },
      {
        name: "description",
        content:
          "Get in touch with Bodapati Nookaraju — AI Engineer & Full Stack Developer. Let's build something impactful.",
      },
      { property: "og:title", content: "Contact — Bodapati Nookaraju" },
      { property: "og:description", content: "Let's build something impactful." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1500, "Too long"),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio contact — ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\nFrom: ${result.data.name} <${result.data.email}>`);
    window.location.href = `mailto:bodapatinaveen2975@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">impactful</span>.</>}
        subtitle="Open to AI / ML and Full Stack opportunities, collaborations, and meaningful conversations."
      />

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="bodapatinaveen2975@gmail.com" href="mailto:bodapatinaveen2975@gmail.com" />
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Phone" value="+91 70950 18973" href="tel:+917095018973" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Location" value="India · Available remote" />
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com/Bnaveen42"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl glass p-4 flex items-center gap-3 hover:glow-blue transition"
            >
              <GithubIcon className="h-5 w-5" />
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">@Bnaveen42</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/bodapati-nookaraju-57816533a"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl glass p-4 flex items-center gap-3 hover:glow-blue transition"
            >
              <LinkedinIcon className="h-5 w-5" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">Connect</p>
              </div>
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-3xl glass-strong p-6 sm:p-8 border-gradient"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
            <MessageSquare className="h-3.5 w-3.5" />
            Send a message
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                placeholder="Ada Lovelace"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                placeholder="you@company.com"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1500}
                rows={6}
                placeholder="Tell me about the role, project or idea…"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </Field>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">
              {sent ? "Opening your mail client…" : "Replies usually within 24 hours."}
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-medium text-background glow-blue hover:opacity-90"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </PageShell>
  );
}

function ContactCard({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="rounded-2xl glass p-5 flex items-center gap-4 hover:glow-blue transition">
      <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-background">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 inline-block text-xs text-destructive">{error}</span>}
    </label>
  );
}
