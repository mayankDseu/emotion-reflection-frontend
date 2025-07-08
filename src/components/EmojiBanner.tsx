interface EmojiBannerProps {
  emojis: string[];
}
export function EmojiBanner({ emojis }:EmojiBannerProps) {
  return (
    <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl py-4 px-6 flex justify-center gap-4 flex-wrap shadow-lg z-50">
      {emojis.map((emoji, idx) => (
        <span
          key={idx}
          className="text-5xl transition-transform duration-300 hover:-translate-y-2 cursor-default"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
