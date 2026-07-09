import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Sparkles, Heart, Star } from 'lucide-react'
import './index.css'

const services = [
  { category: 'Body Contouring', items: [
    { name: 'Endermologie Slim', price: 'R450', duration: '45 min' },
    { name: 'Endermologie Firm', price: 'R450', duration: '45 min' },
    { name: 'Laser Lipo', price: 'R550', duration: '30 min' },
    { name: 'Sauna Session', price: 'R200', duration: '30 min' },
  ]},
  { category: 'Facial Treatments', items: [
    { name: 'Deep Cleansing Facial', price: 'R350', duration: '60 min' },
    { name: 'Anti-Aging Facial', price: 'R450', duration: '75 min' },
    { name: 'Chemical Peel', price: 'R400', duration: '45 min' },
    { name: 'Micro Needling', price: 'R600', duration: '60 min' },
  ]},
  { category: 'Injectables', items: [
    { name: 'Botox', price: 'R150/unit', duration: '30 min' },
    { name: 'Dermal Fillers', price: 'R2500', duration: '60 min' },
    { name: 'Mesotherapy', price: 'R800', duration: '45 min' },
    { name: 'Facial Recontouring', price: 'R1800', duration: '90 min' },
  ]},
  { category: 'Nails & Beauty', items: [
    { name: 'Manicure', price: 'R150', duration: '45 min' },
    { name: 'Pedicure', price: 'R200', duration: '60 min' },
    { name: 'Gel Nails', price: 'R350', duration: '90 min' },
    { name: 'Lash Lift', price: 'R350', duration: '45 min' },
    { name: 'Lash Extensions', price: 'R450', duration: '90 min' },
  ]},
  { category: 'Hair Removal', items: [
    { name: 'Waxing - Full Face', price: 'R150', duration: '30 min' },
    { name: 'Waxing - Underarms', price: 'R100', duration: '20 min' },
    { name: 'Threading', price: 'R80', duration: '15 min' },
    { name: 'Tinting', price: 'R100', duration: '20 min' },
  ]},
  { category: 'Relaxation', items: [
    { name: 'Swedish Massage', price: 'R400', duration: '60 min' },
    { name: 'Deep Tissue Massage', price: 'R450', duration: '60 min' },
    { name: 'Aromatherapy', price: 'R450', duration: '60 min' },
  ]},
]

const galleryImages = [
  { id: 1, title: 'Treatment Room', desc: 'Our state-of-the-art facility', image: '/gallery-1.png' },
  { id: 2, title: 'Endermologie', desc: 'Advanced body contouring', image: '/gallery-2.png' },
  { id: 3, title: 'Relaxation Area', desc: 'Peaceful ambiance', image: '/gallery-3.png' },
  { id: 4, title: 'Skincare Products', desc: 'Premium brands we use', image: '/gallery-4.png' },
]

function App() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-brand-primary" />
              <span className="text-2xl font-bold font-elegant text-brand-dark">i-lipo</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-brand-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-brand-primary transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-brand-primary transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-brand-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-primary transition-colors">Contact</a>
            </div>
            <a 
              href="https://wa.me/27724375998" 
              target="_blank"
              className="flex items-center space-x-2 bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-dark transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-3xl scale-110" style={{ backgroundImage: "url('/hero.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/60 via-brand-pink/50 to-brand-light/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-brand-accent" />
              <span className="text-gray-700 font-medium">Professional Skincare • Slimming & Nails</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-elegant text-brand-dark mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                Rejuvenate
              </span>
              <br />
              <span className="text-gray-800">Your Beauty</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Slim • Resculpt • Smooth • Firm • Redensify • Replenish • Relax
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-brand-dark transition-all"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="https://wa.me/27724375998"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary border-2 border-brand-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-brand-light transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Star className="w-6 h-6 text-brand-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-elegant text-brand-dark mb-4">About i-lipo</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to i-lipo Endermologie Aesthetic Clinic, where beauty meets science. 
              We specialize in advanced skincare, body contouring, and beauty treatments 
              designed to make you look and feel your absolute best.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Expert Care', desc: 'Trained professionals with years of experience' },
              { icon: Heart, title: 'Premium Products', desc: 'Only the finest brands like Filorga & LPG' },
              { icon: Star, title: 'Proven Results', desc: 'Hundreds of satisfied clients' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-brand-light to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-elegant text-brand-dark mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness treatments
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-brand-pink/30'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services[activeCategory].items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-primary/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-brand-dark">{service.name}</h3>
                  <span className="bg-brand-pink/20 text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                    {service.duration}
                  </span>
                </div>
                <p className="text-2xl font-bold text-brand-primary">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-elegant text-brand-dark mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a peek at our beautiful studio and amazing results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-elegant text-brand-dark mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your beauty? Contact us today!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <Phone className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Call Us</h3>
              <p className="text-gray-600">072 437 5998</p>
              <p className="text-gray-600">079 529 0670</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <Mail className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">ilipoendoaestclinici@gmail.com</p>
              <p className="text-gray-600 text-sm">ilipodinicbelabela@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Visit Us</h3>
              <p className="text-gray-600">Modi Mall, Shop 212</p>
              <p className="text-gray-600">Modimolle</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <Clock className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-brand-dark mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 08h00-17h00</p>
              <p className="text-gray-600 text-sm">Sat: 08h00-13h00</p>
              <p className="text-gray-600 text-sm">Sun: Closed</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://wa.me/27724375998"
              target="_blank"
              className="inline-flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-green-600 transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-brand-primary" />
                <span className="text-2xl font-bold font-elegant">i-lipo</span>
              </div>
              <p className="text-white/70">Professional Skincare, Slimming & Nails</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-primary transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/50">
            <p>&copy; 2024 i-lipo Endermologie Aesthetic Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27724375998"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}

export default App
