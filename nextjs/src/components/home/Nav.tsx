import Link from "next/link";
import { FinleteLogo } from "@/components/FinleteLogo";
import { LINKS } from "@/data/home";
import { NavBehavior } from "@/components/fx/NavBehavior";

export function Nav() {
  return (
    <header className="nav on-dark" id="nav">
      <NavBehavior />
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Finlete home">
          <FinleteLogo height={24} />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/athletes">Athletes</Link>
          <Link href="/#how-it-works">How it works</Link>
          <a href={LINKS.signIn}>Sign in</a>
        </nav>
        <div className="nav-actions">
          <a className="nav-signin-m" href={LINKS.signIn}>
            Sign in
          </a>
          <Link className="btn btn-primary" href="/athletes">
            Browse athletes
          </Link>
        </div>
      </div>
    </header>
  );
}
