import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="section-title animate-slide-up">{title}</h2>
      {subtitle && (
        <p className="section-subtitle animate-slide-up">{subtitle}</p>
      )}
    </div>
  );
}
