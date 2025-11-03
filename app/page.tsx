'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Product from '@/components/home/Product'
import Experience from '@/components/home/Experience'
import Location from '@/components/home/Location'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowScrollButton(scrollTop > 300) // Show button after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <Product />
      <Experience />
      <Location />
      <Footer />
      
      {/* Korean-style floating action buttons */}
      <motion.button
        className="korean-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://maps.google.com/?q=Vitosha+Boulevard+123,+Sofia,+Bulgaria', '_blank')}
        title="Get Directions"
      >
        <MapPin className="w-6 h-6" />
      </motion.button>
      
      {showScrollButton && (
        <motion.button
          className="fixed bottom-24 right-8 z-50 bg-earth-200 text-earth-800 p-4 rounded-full shadow-2xl hover:bg-earth-300 transition-all duration-300 transform hover:scale-110"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          title="Back to Top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </main>
  )
}
