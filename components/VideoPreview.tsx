export function VideoPreview({
  src,
  poster,
  title
}: {
  src: string
  poster?: string
  title?: string
}) {
  return (
    <div className="card overflow-hidden">
      {title && <div className="px-6 pt-6 text-sm text-white/70">{title}</div>}
      <video
        controls
        preload="none"
        poster={poster}
        className="w-full h-auto"
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
