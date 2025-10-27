'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earth-900 text-cream-100 py-12">
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
              Matcha Sofia
            </h3>
            <p className="text-cream-200 text-sm">
              Sofia's first modern matcha shop
            </p>
          </div>
          
          <div className="border-t border-earth-700 pt-6">
            <p className="text-cream-300 text-sm">
              © {currentYear} Matcha Sofia. All rights reserved.
            </p>
            <p className="text-earth-400 text-xs mt-2">
              Premium ceremonial-grade matcha in Sofia, Bulgaria
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}



