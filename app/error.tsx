'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section background="white" className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-4xl font-heading font-bold text-primary mb-4">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. An error occurred while loading this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="secondary">
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </Section>
  );
}
