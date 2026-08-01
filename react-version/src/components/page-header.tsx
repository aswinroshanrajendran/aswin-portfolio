export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base text-muted-foreground">{description}</p>
    </div>
  )
}
