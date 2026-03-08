import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ end, duration = 2, suffix = '', className }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className={cn("font-display font-bold", className)}>
      {count}{suffix}
    </span>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export function FadeIn({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
        {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
        <div className={cn("h-1.5 w-20 bg-secondary mt-4 rounded-full", centered && "mx-auto")} />
      </FadeIn>
    </div>
  );
}
