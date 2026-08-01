import { PageHeader } from '@/components/page-header'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// TODO: replace with real case studies — problem, hypothesis, experiment, result
const CASE_STUDIES = [
  {
    title: 'Case study title',
    summary:
      'TODO — one-line summary of the problem and the growth result you drove.',
    tags: ['Tag', 'Tag'],
    metric: 'TODO metric',
  },
  {
    title: 'Case study title',
    summary:
      'TODO — one-line summary of the problem and the growth result you drove.',
    tags: ['Tag', 'Tag'],
    metric: 'TODO metric',
  },
  {
    title: 'Case study title',
    summary:
      'TODO — one-line summary of the problem and the growth result you drove.',
    tags: ['Tag', 'Tag'],
    metric: 'TODO metric',
  },
]

export function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Growth case studies"
        description="TODO — a one-line framing of the kind of work shown below."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-3">
        {CASE_STUDIES.map((project, i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold text-accent">
                {project.metric}
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <Badge key={j} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  )
}
