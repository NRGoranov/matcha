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
      </head>
      <body className="font-sans antialiased" style={{ overflowX: 'hidden', width: '100%' }}>
        {children}
      </body>
    </html>
  )
}



