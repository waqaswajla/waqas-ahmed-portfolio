import { useEffect, useRef, useState } from "react";
import "./styles/StatsCounter.css";

interface Stat {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  decimals: number;
}

const STATS: Stat[] = [
  { prefix: "$", value: 1.1, suffix: "M+", label: "Revenue Analyzed",    sub: "Superstore & Telecom dashboards", decimals: 1 },
  { prefix: "",  value: 99,  suffix: "%+", label: "ML Model Accuracy",   sub: "LSTM Human Activity Recognition", decimals: 0 },
  { prefix: "",  value: 5,   suffix: "",   label: "Projects Delivered",  sub: "BI · ML · Computer Vision",       decimals: 0 },
  { prefix: "",  value: 2,   suffix: "",   label: "Internships",         sub: "Developers Hub · ITSOLERA",       decimals: 0 },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const start = Date.now();

    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts(STATS.map((s) => {
        const val = s.value * ease;
        return s.decimals ? Math.round(val * 10) / 10 : Math.floor(val);
      }));
      if (progress < 1) requestAnimationFrame(frame);
      else setCounts(STATS.map((s) => s.value));
    };

    requestAnimationFrame(frame);
  }, [triggered]);

  return (
    <div className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-number">
              {stat.prefix}
              {stat.decimals ? counts[i].toFixed(stat.decimals) : counts[i]}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
