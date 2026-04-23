import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-primary opacity-50" />
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <h4 className="font-display text-lg">
            <span className="text-gradient">Bodapati Nookaraju</span>
          </h4>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Building intelligent systems with AI & Full Stack technologies.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Visakhapatnam, India</p>
          <p>bodapatinaveen2975@gmail.com</p>
          <p>+91 70950 18973</p>
        </div>
        <div className="flex md:justify-end gap-3">
          <a href="https://github.com/Bnaveen42" target="_blank" rel="noreferrer" aria-label="GitHub"
             className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:glow-blue transition">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/bodapati-nookaraju-57816533a" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:glow-blue transition">
            <LinkedinIcon />
          </a>
          <a href="mailto:bodapatinaveen2975@gmail.com" aria-label="Email"
             className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:glow-blue transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bodapati Nookaraju · Crafted with intent.
      </div>
    </footer>
  );
}
