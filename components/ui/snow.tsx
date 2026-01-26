"use client";

export default function Snow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10px] w-[3px] h-[3px] bg-white/60 rounded-full animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
