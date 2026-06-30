import Link from "next/link";
import { LEGAL_LAST_UPDATED, LEGAL_OPERATOR } from "@/lib/legal";

type LegalSection = {
  title: string;
  body: string | React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="section-pad">
      <div className="section-container max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="mt-3 leading-relaxed text-muted-foreground">
                {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Related policies
          </h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link href="/privacy" className="font-medium text-primary hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="font-medium text-primary hover:underline">
                Terms of service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="font-medium text-primary hover:underline">
                Cookie policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-sm text-muted-foreground">
          {LEGAL_OPERATOR} · Last updated: {LEGAL_LAST_UPDATED}
        </p>
      </div>
    </div>
  );
}
