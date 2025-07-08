type StarsProps = {
  length?: number;
};

export default function BackgroundStars({ length = 100 }: StarsProps) {
  const stars = Array.from({ length }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 6}s`,
    animationDuration: `${4 + Math.random() * 6}s`,
    size: `${0.5 + Math.random() * 0.75}px`,
  }));

  return (
    <div className="fixed inset-0 z-[0] pointer-events-none">
      {stars.map(({ top, left, animationDelay, animationDuration, size }, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle opacity-80"
          style={{
            top,
            left,
            width: size,
            height: size,
            animationDelay,
            animationDuration,
          }}
        />
      ))}
    </div>
  );
}
