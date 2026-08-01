import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import portrait from '@/assets/images/portrait-standing.jpeg'

// TODO: replace stat placeholders with real, sourced numbers from past work
const HIGHLIGHTS = [
  { value: 'TODO%', label: 'growth metric' },
  { value: 'TODO', label: 'experiments shipped' },
  { value: 'TODO', label: 'revenue impact' },
]

export function Home() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Strategy &middot; Growth &middot; Impact
        </p>
        {/* TODO: replace with real positioning statement */}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Hi, I'm Aswin Roshan — I help companies find and scale their next
          growth lever.
        </h1>
        <p className="mt-5 max-w-lg text-base text-muted-foreground">
          {/* TODO: replace with a real, specific summary of your growth focus */}
          A short summary of the kind of growth work you do, the channels or
          problems you specialize in, and the outcome you chase for a team.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" nativeButton={false} render={<Link to="/projects" />}>
            View case studies
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link to="/contact" />}
          >
            Get in touch
          </Button>
        </div>

        <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label}>
              <dt className="text-2xl font-bold text-foreground">
                {item.value}
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-primary/10 to-transparent">
          <img
            src={portrait}
            alt="Aswin Roshan"
            className="mx-auto h-auto w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  )
}
