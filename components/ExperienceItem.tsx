export function ExperienceItem({
  company,
  duration,
  details
}: {
  company: string
  duration: string
  details: string[]
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{company}</h3>
        <span className="text-sm text-white/60">{duration}</span>
      </div>
      <ul className="mt-4 grid gap-2 text-white/80 text-sm">
        {details.map((d) => (
          <li key={d} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}
