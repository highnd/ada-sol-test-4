"use client";
import React, { useEffect, useRef, useState } from "react";

const counters = [
  { id: 1, value: 99, text: "بیشتر به خواسته مشتریانت شبیه باش" },
  { id: 2, value: 210, text: "هزینه نرم‌افزاریت رو کاهش بده" },
  { id: 3, value: 140, text: "بهره‌وری پرسنل رو بیشتر کن" },
  { id: 4, value: 320, text: "فروشت رو افزایش بده" },
];

const StateSection = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(
    counters.map((c) => ({ id: c.id, value: 0 }))
  );

  // keep values in ref to reduce rerenders
  const valuesRef = useRef(counters.map((c) => ({ id: c.id, value: 0 })));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);

      let updated = false;

      const newValues = counters.map((c) => {
        const newValue = Math.floor(c.value * progress);

        const current = valuesRef.current.find((v) => v.id === c.id);

        if (current && current.value !== newValue) {
          updated = true;
          current.value = newValue;
        }

        return { id: c.id, value: newValue };
      });

      // update state only if value changed
      if (updated) setCounts(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-full flex flex-row-reverse items-center justify-around gap-12 flex-wrap xl:px-24"
    >
      {counters.map((item) => (
        <div
          key={item.id}
          className="w-56 h-56 border-2 border-orange-500 border-dashed rounded-full relative flex flex-col items-center justify-center space-y-2 px-2"
        >
          <div className="w-16 h-16 bg-gray-300 rounded-full absolute -top-7 left-[35%]"></div>

          <p className="text-primary extrabold-fanum-font text-5xl">
            <span className="text-3xl">%</span>
            {counts.find((c) => c.id === item.id)?.value}
          </p>

          <p className="text-lg bold-fanum-font text-center">{item.text}</p>
        </div>
      ))}

      
    </div>
  );
};

export default StateSection;
