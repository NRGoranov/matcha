import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🍵</span>
        </div>
        <h2 className="text-4xl font-serif font-bold text-earth-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-earth-600 mb-6">
          This page seems to have disappeared like morning mist. 
          Let's get you back to our matcha experience.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}



