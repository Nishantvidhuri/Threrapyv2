import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [start, target, duration]);
  return count;
}

export default function CounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Only trigger once
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Lowered threshold for easier triggering
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(40, 1500, visible);
  const sessions = useCountUp(45000, 2000, visible);

  return (
    <section
      ref={ref}
      className="p-8 min-h-[calc(100vh-10rem)] md:min-h-fit md:px-[10%] md:py-16 xl:py-20 grid gap-12 md:grid-cols-2 md:gap-16 relative bg-[#144133]/90 text-center md:text-left"
    >
      {/* Stat 1 */}
      <article>
        <div>
          <div className="flex justify-center md:justify-start mb-2 text-[#e6f6f3]">
            <span className="flex tabular-nums text-5xl font-extrabold mb-2">{years}</span>
            <span className="flex tabular-nums text-5xl font-extrabold mb-2">+</span>
          </div>
          <span className="inline-flex font-semibold xl:text-xl text-[#e6f6f3] mb-2 font-para">
            Years Experience
          </span>
        </div>
        <p className="text-sm text-[#e6f6f3]/80 font-para">
          Providing compassionate and effective Individual and Couples Therapy
        </p>
      </article>
      {/* Stat 2 */}
      <article>
        <div>
          <div className="flex justify-center md:justify-start mb-2 text-[#e6f6f3]">
            <span className="flex tabular-nums text-5xl font-extrabold mb-2">{sessions.toLocaleString()}</span>
            <span className="flex tabular-nums text-5xl font-extrabold mb-2">+</span>
          </div>
          <span className="inline-flex font-semibold xl:text-xl text-[#e6f6f3] mb-2 font-para">
            Individual Client Sessions
          </span>
        </div>
        <p className="text-sm text-[#e6f6f3]/80 font-para">
          Helping individuals and couples heal, grow, and find purpose
        </p>
      </article>
    </section>
  );
} 