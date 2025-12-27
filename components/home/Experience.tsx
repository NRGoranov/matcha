'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Instagram, Users } from 'lucide-react'

export default function Experience() {
  const testimonials = [
    {
      name: "Iana Pitekova",
      role: "Local Guide · 47 reviews",
      content: "Very sweet spot for matcha lovers. They have a variety of matcha and hojicha drinks with a lots of flavours. I tried their banana cloud matcha latte and it was very good! They make the banana cream themselves. The girls are very sweet and friendly. It's definitely a matcha place with a modern touch of the traditional matcha drink.",
      rating: 5
    },
    {
      name: "Vanya Santeva",
      role: "Local Guide · 7 reviews",
      content: "I'm uploading some menu photos because they have soooo many options! Yesterday I tried a Pumpkin spice Hojicha with hazelnut milk - it was BOMB - if you're into autumn-y nutty sweet flavours, it's absolutely amazing. I've also tried their cinnamon vanilla honey matcha, it was great:) I recommend this place~ FYI: it's the smolest shop, so takeout is the way to go.",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream-50">
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
            More Than Just a Drink.
            <br />
            <span className="text-gradient">It's an Experience.</span>
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Step into our minimalist space in Sofia and discover why locals are falling in love 
            with our modern take on traditional matcha.
          </p>
        </motion.div>

        {/* Lifestyle Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/canned_matcha.jpg"
              alt="People enjoying matcha cans"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold">Fresh & Energizing</p>
              <p className="text-sm">Perfect matcha in a can</p>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/onTheGo.png"
              alt="Ready to go canned matcha"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold">Ready to Go</p>
              <p className="text-sm">Grab and enjoy anywhere</p>
            </div>
          </motion.div>

          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/historyPouch.png"
              alt="Premium matcha can display"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold">Premium Quality</p>
              <p className="text-sm">Ceremonial-grade matcha</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-serif font-bold text-center text-earth-800 mb-12">
            What Sofia is Saying
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="korean-card p-8 flex-1 min-w-0 max-w-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-matcha-300 mb-4" />
                
                <p className="text-earth-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold text-earth-800">{testimonial.name}</p>
                  <p className="text-earth-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          className="text-center bg-matcha-50 p-12 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-8 mb-6">
            <a 
              href="https://www.instagram.com/thematchamoto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-6 h-6 text-matcha-600" />
              <span className="font-semibold text-earth-800">@thematchamoto</span>
            </a>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-matcha-600" />
              <span className="font-semibold text-earth-800">1.2k+ Followers</span>
            </div>
          </div>
          
          <p className="text-earth-600 mb-6">
            Join our community of matcha lovers in Sofia. Share your moments with #MatchaMoto
          </p>
          
          <div className="flex justify-center gap-4">
            <span className="bg-matcha-100 text-matcha-800 px-4 py-2 rounded-full text-sm font-medium">
              #MatchaMoto
            </span>
            <span className="bg-matcha-100 text-matcha-800 px-4 py-2 rounded-full text-sm font-medium">
              #SofiaMatcha
            </span>
            <span className="bg-matcha-100 text-matcha-800 px-4 py-2 rounded-full text-sm font-medium">
              #MatchaBar
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
