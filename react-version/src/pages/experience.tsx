import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'

// TODO: replace with real roles, dates, and achievements
const ROLES = [
  {
    company: 'Company Name',
    title: 'Job Title',
    dates: 'TODO — TODO',
    bullets: [
      'TODO — a specific, quantified achievement from this role.',
      'TODO — a specific, quantified achievement from this role.',
    ],
    tags: ['Tag'],
  },
  {
    company: 'Company Name',
    title: 'Job Title',
    dates: 'TODO — TODO',
    bullets: [
      'TODO — a specific, quantified achievement from this role.',
      'TODO — a specific, quantified achievement from this role.',
    ],
    tags: ['Tag'],
  },
]

export function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Background"
        description="TODO — a one-line framing of your career path so far."
      />
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <ol className="space-y-10 border-l border-border/60 pl-8">
          {ROLES.map((role, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-accent" />
              <p className="text-sm text-muted-foreground">{role.dates}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {role.title} &middot; {role.company}
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {role.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {role.tags.map((tag, k) => (
                  <Badge key={k} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
