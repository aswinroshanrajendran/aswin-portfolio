import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Aswin Roshan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {/* TODO: point these at real profiles */}
          <a href="#" aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail className="size-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <LinkedinIcon className="size-5" />
          </a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <GithubIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
