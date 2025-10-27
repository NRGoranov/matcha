'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, ArrowRight, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="section-padding bg-gradient-to-b from-cream-50 to-earth-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6">
            Find Us in the Heart of
            <br />
            <span className="text-gradient">Sofia</span>
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            We're right in the heart of Sofia. Come try it — your new ritual awaits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d23.3219!3d42.6977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1634567890123!5m2!1sen!2sbg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
              
              {/* Map overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              
              {/* Location pin */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-matcha-600 text-white p-3 rounded-full shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="korean-card p-8">
                <h3 className="text-2xl font-serif font-bold text-earth-800 mb-6">
                  Visit Our Shop
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-matcha-600 mt-1" />
                    <div>
                      <p className="font-semibold text-earth-800">Address</p>
                      <p className="text-earth-600">
                        Vitosha Boulevard 123<br />
                        Sofia 1000, Bulgaria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-matcha-600 mt-1" />
                    <div>
                      <p className="font-semibold text-earth-800">Hours</p>
                      <p className="text-earth-600">
                        Mon - Fri: 7:00 AM - 8:00 PM<br />
                        Sat - Sun: 8:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-matcha-600 mt-1" />
                    <div>
                      <p className="font-semibold text-earth-800">Contact</p>
                      <a 
                        href="tel:+359881234567"
                        className="text-earth-600 hover:text-matcha-600 transition-colors duration-300"
                      >
                        +359 88 123 4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Visit */}
              <div className="bg-matcha-50 p-8 rounded-2xl">
                <h4 className="font-semibold text-earth-800 mb-4">Why Visit Us?</h4>
                <ul className="space-y-3 text-earth-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                    <span>Premium canned matcha drinks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                    <span>Ceremonial-grade quality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                    <span>Ready-to-drink convenience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                    <span>Fresh, energizing taste</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('https://maps.google.com/?q=Vitosha+Boulevard+123,+Sofia,+Bulgaria', '_blank')}
                  className="btn-primary text-lg px-10 py-5 flex items-center justify-center gap-2 group"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
                
                <button 
                  onClick={() => window.open('tel:+359881234567', '_self')}
                  className="btn-secondary text-lg px-10 py-5 flex items-center justify-center gap-2 group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Call Us Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-matcha-600 to-matcha-800 text-white p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Try Our Matcha Cans 🍵
            </h3>
            <p className="text-xl text-matcha-100 mb-8 max-w-2xl mx-auto">
              Your new ritual awaits. Experience Sofia's first premium canned matcha 
              and discover why locals are making the switch to convenience.
            </p>
            
            <motion.div 
              className="bg-white text-matcha-800 font-semibold px-12 py-5 rounded-full text-lg shadow-lg"
            >
              <p className="text-center">
                Your new ritual awaits.<br />
                <span className="text-matcha-600 font-medium">Come experience the difference.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
