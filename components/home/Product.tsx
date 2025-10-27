'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Coffee, Shield } from 'lucide-react'

export default function Product() {
  const benefits = [
    {
      icon: Heart,
      title: "Heart Health",
      description: "Rich in antioxidants that support cardiovascular wellness"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "L-theanine promotes calm focus without jitters"
    },
    {
      icon: Coffee,
      title: "Clean Energy",
      description: "Sustained energy without the crash of coffee"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Natural compounds that boost your body's defenses"
    }
  ]

  return (
    <section id="product" className="section-padding bg-white">
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
            Premium Matcha.
            <br />
            <span className="text-gradient">Perfectly Crafted.</span>
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Experience the pure taste of ceremonial-grade matcha in a convenient, 
            ready-to-drink format that fits your modern lifestyle.
          </p>
        </motion.div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/canned_matcha.jpg"
                  alt="Premium matcha cans"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-sm">Ready to Drink</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/canned_matcha.jpg"
                  alt="Matcha can product display"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-sm">Premium Quality</p>
                </div>
              </motion.div>
            </div>
            
            {/* Floating can animation */}
            <motion.div 
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="bg-matcha-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-20 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">🍵</span>
                  </div>
                  <p className="text-sm font-semibold">Matcha in a Can</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif font-bold text-earth-800 mb-6">
              Why Our Matcha?
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-matcha-100 p-2 rounded-full">
                  <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 mb-1">Ceremonial Grade</h4>
                  <p className="text-earth-600">The highest quality matcha, traditionally reserved for tea ceremonies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-matcha-100 p-2 rounded-full">
                  <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 mb-1">No Added Sugar</h4>
                  <p className="text-earth-600">Pure matcha taste without any artificial sweeteners or additives.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-matcha-100 p-2 rounded-full">
                  <div className="w-2 h-2 bg-matcha-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 mb-1">Cold Brewed</h4>
                  <p className="text-earth-600">Slow-steeped for maximum flavor extraction and smooth taste.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cream-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-earth-800 mb-2">Taste Profile</h4>
              <p className="text-earth-600 mb-4">
                Rich, umami-forward with subtle sweetness and a clean, refreshing finish. 
                Perfect balance of earthiness and brightness.
              </p>
              <div className="flex gap-2">
                <span className="bg-matcha-100 text-matcha-800 px-3 py-1 rounded-full text-sm">Umami</span>
                <span className="bg-matcha-100 text-matcha-800 px-3 py-1 rounded-full text-sm">Smooth</span>
                <span className="bg-matcha-100 text-matcha-800 px-3 py-1 rounded-full text-sm">Refreshing</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 korean-card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-matcha-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-matcha-600" />
              </div>
              <h3 className="font-semibold text-earth-800 mb-2">{benefit.title}</h3>
              <p className="text-earth-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
