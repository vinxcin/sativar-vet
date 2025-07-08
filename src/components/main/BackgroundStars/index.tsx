import React from "react";

type StarsProps = {
  length?: number;
};

export default function BackgroundStars({ length = 100 }: StarsProps) {
  const stars = React.useMemo(() => {
    return Array.from({ length }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 6}s`,
      size: `${0.5 + Math.random() * 0.75}px`,
    }));
  }, [length]);

  return (
    <section className="absolute inset-0 z-0 pointer-events-none">
      {stars.map(({ size, ...style }, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{ ...style, width: size, height: size }}
        />
      ))}
    </section>
  );
}
