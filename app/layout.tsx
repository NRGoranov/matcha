import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Matcha Sofia - Premium Matcha in a Can | Sofia\'s First Modern Matcha Shop',
  description: 'Experience Sofia\'s first modern matcha shop. Premium ceremonial-grade matcha, chilled and ready in a can. Located in the heart of Sofia, Bulgaria.',
  keywords: 'matcha Sofia, matcha in a can Sofia, premium matcha Bulgaria, Sofia matcha shop, ceremonial grade matcha, modern matcha shop Sofia',
  icons: {
    icon: [
      { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/icon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/icon/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/icon/site.webmanifest',
  openGraph: {
    title: 'Matcha Sofia - Premium Matcha in a Can',
    description: 'Sofia\'s first modern matcha shop. Premium ceremonial-grade matcha, chilled and ready in a can.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matcha Sofia - Premium Matcha in a Can',
    description: 'Sofia\'s first modern matcha shop. Premium ceremonial-grade matcha, chilled and ready in a can.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} style={{ overflowX: 'hidden' }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/icon/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
      </head>
      <body className="font-sans antialiased" style={{ overflowX: 'hidden', width: '100%' }}>
        {children}
      </body>
    </html>
  )
}



