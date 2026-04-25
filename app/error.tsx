'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Page Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong 😢
      </h2>

      <p className="text-gray-600 mb-6">
        {error.message || 'An unexpected error occurred.'}
      </p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md transition-all duration-200 hover:bg-blue-700 active:scale-95"
      >
        Try again
      </button>
    </div>
  );
}