'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-2xl mx-auto p-8">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We apologize for the inconvenience. A critical error occurred.
            </p>
            <button
              onClick={reset}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
