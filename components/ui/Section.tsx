import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = true,
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-primary to-primary-dark text-white',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${
        padding ? 'section-padding' : ''
      } ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
