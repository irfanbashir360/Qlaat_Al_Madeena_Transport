'use client';

import React, { useEffect, useState, useRef } from 'react';
import Section from '@/components/ui/Section';

export default function Stats() {
  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience', duration: 2000 },
    { value: 5000, suffix: '+', label: 'Successful Deliveries', duration: 2500 },
    { value: 50, suffix: '+', label: 'Fleet Vehicles', duration: 2000 },
    { value: 98, suffix: '%', label: 'Client Satisfaction', duration: 2000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / (stat.duration / 50);
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          } else {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 50);
      return interval;
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [isVisible]);

  return (
    <Section background="gradient" className="relative overflow-hidden">
      <div ref={sectionRef} className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-200">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-2">
                {Math.floor(counts[index])}
                {stat.suffix}
              </div>
              <div className="text-lg md:text-xl text-gray-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </Section>
  );
}
