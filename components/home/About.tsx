'use client'

import { motion } from 'framer-motion'
import { Leaf, Clock, Zap } from 'lucide-react'

export default function About() {
  return (
    <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6">
              Centuries of tradition.
              <br />
              <span className="text-gradient">Modern convenience.</span>
            </h2>
            
            <p className="text-lg text-earth-600 mb-8 leading-relaxed">
              We bring centuries of Japanese matcha tradition into a modern format — 
              premium ceremonial-grade matcha, chilled and ready in a can. No ceremony, 
              no complexity. Just pure, energizing matcha in a convenient, grab-and-go format.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-matcha-100 p-3 rounded-full">
                  <Leaf className="w-6 h-6 text-matcha-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-800 mb-2">Ceremonial Grade Quality</h3>
                  <p className="text-earth-600">Sourced from the finest tea gardens in Japan, stone-ground to perfection.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-matcha-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-matcha-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-800 mb-2">Ready in Seconds</h3>
                  <p className="text-earth-600">No preparation needed. Just grab, open, and enjoy your perfect matcha.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-matcha-100 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-matcha-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-earth-800 mb-2">Sustained Energy</h3>
                  <p className="text-earth-600">Clean caffeine with L-theanine for focused, calm energy that lasts.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/historyPouch.png"
                alt="Centuries of tradition matcha pouch"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-matcha-500 text-white p-4 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-semibold">100% Organic</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-cream-200 text-earth-800 p-4 rounded-full shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <span className="text-sm font-semibold">No Sugar Added</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
