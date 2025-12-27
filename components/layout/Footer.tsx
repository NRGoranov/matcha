'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earth-900 text-cream-100 py-12 relative">
      <div className="container-custom">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-matcha-400 mb-2">
              Matcha Moto
            </h3>
            <p className="text-cream-200 text-sm">
              Sofia's first modern matcha shop
            </p>
          </div>
          
          <div className="border-t border-earth-700 pt-6">
            <p className="text-cream-300 text-sm">
              © {currentYear} Matcha Moto. All rights reserved.
            </p>
            <p className="text-earth-400 text-xs mt-2">
              Premium ceremonial-grade matcha in Sofia, Bulgaria
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Creator link in bottom left corner */}
      <div className="absolute bottom-4 left-4">
        <p className="text-earth-500 text-xs">
          Site by{' '}
          <a 
            href="https://nrgtrw.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-earth-400 hover:text-earth-300 transition-colors duration-300"
          >
            nrgtrw.com
          </a>
        </p>
      </div>
    </footer>
  )
}



