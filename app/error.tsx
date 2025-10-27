'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🍵</span>
        </div>
        <h2 className="text-2xl font-serif font-bold text-earth-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-earth-600 mb-6">
          We're having trouble brewing your perfect matcha experience. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
}



