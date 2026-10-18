interface PlaceholderImgProps {
  label: string;
  className?: string;
  aspect?: string;
}

export default function PlaceholderImg({
  label,
  className = "",
  aspect = "aspect-video",
}: PlaceholderImgProps) {
  return (
    <div
      className={`${aspect} bg-soft-teal rounded-2xl flex items-center justify-center border-2 border-dashed border-beelee-teal/20 ${className}`}
    >
      <div className="text-center px-4">
        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-beelee-teal/10 flex items-center justify-center">
          <svg aria-hidden="true" className="w-5 h-5 text-beelee-teal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
          </svg>
        </div>
        <p className="text-xs text-beelee-teal/50 font-semibold">{label}</p>
      </div>
    </div>
  );
}
