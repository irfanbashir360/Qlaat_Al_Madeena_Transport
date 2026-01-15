import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md ${
        hover ? 'card-hover' : ''
      } ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
