import { PageHeader } from '@/components/page-header'
import portrait from '@/assets/images/portrait-sitting.jpeg'

// TODO: replace with real values/principles that guide your growth work
const VALUES = [
  {
    title: 'Value 1',
    description: 'TODO — describe a principle that guides how you work.',
  },
  {
    title: 'Value 2',
    description: 'TODO — describe a principle that guides how you work.',
  },
  {
    title: 'Value 3',
    description: 'TODO — describe a principle that guides how you work.',
  },
]

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The person behind the numbers"
        description="TODO — a short intro line about your background and what draws you to growth."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 md:grid-cols-3">
        <div className="mx-auto w-full max-w-xs md:col-span-1">
          <img
            src={portrait}
            alt="Aswin Roshan"
            className="w-full rounded-2xl bg-gradient-to-b from-primary/10 to-transparent object-contain"
          />
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4 text-muted-foreground">
            {/* TODO: replace with your real story — background, what led you to growth, what you're looking for next */}
            <p>
              Paragraph one — where you come from, what you've worked on, and
              how you got into growth.
            </p>
            <p>
              Paragraph two — what you're best at and the kind of problems you
              like solving.
            </p>
            <p>
              Paragraph three — what you're looking for in your next growth
              role.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <h3 className="font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
