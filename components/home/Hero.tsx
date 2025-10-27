'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-matcha-50 via-cream-50 to-earth-50 relative">
          <img
            src="/Hero.png"
            alt="Premium matcha cans ready to drink"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl sm:max-w-3xl -ml-8 sm:-ml-16 md:-ml-32 lg:-ml-48 xl:-ml-64 text-left"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Matcha.
            <br />
            <span className="text-cream-200">Reinvented.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-cream-100 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Sofia's first modern matcha shop — refreshing,<br />
            energizing, and ready to grab.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-start items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-10 py-5 flex items-center gap-2 group"
            >
              Visit Us in Sofia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Vitosha+Boulevard+123,+Sofia,+Bulgaria', '_blank')}
              className="btn-secondary text-lg px-10 py-5 flex items-center gap-2 group"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream-200 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cream-200 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
