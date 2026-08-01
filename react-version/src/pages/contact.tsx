import { Mail } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

// TODO: replace with real contact details
const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:TODO@example.com', Icon: Mail },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'GitHub', href: '#', Icon: GithubIcon },
]

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk growth"
        description="TODO — a short line inviting recruiters/teams to reach out."
      />
      <section className="mx-auto flex max-w-md flex-col gap-3 px-4 pb-20 sm:px-6">
        {CONTACT_LINKS.map(({ label, href, Icon }) => (
          <Button
            key={label}
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<a href={href} />}
          >
            <Icon className="size-4" />
            {label}
          </Button>
        ))}
      </section>
    </>
  )
}
