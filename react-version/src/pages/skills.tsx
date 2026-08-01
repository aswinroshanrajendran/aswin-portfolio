import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'

// TODO: replace with your real skills/tools
const SKILL_GROUPS = [
  {
    group: 'Growth & Strategy',
    items: ['Skill', 'Skill', 'Skill', 'Skill'],
  },
  {
    group: 'Experimentation & Analytics',
    items: ['Skill', 'Skill', 'Skill', 'Skill'],
  },
  {
    group: 'Tools',
    items: ['Tool', 'Tool', 'Tool', 'Tool'],
  },
]

export function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I bring to a growth team"
        description="TODO — a one-line summary of your core strengths."
      />
      <section className="mx-auto max-w-3xl space-y-10 px-4 pb-20 sm:px-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.group}>
            <h3 className="font-semibold text-foreground">{group.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <Badge key={`${group.group}-${item}-${i}`} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
