// app/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = {
    explore: [
      { name: 'Interactive Map', href: '#map' },
      { name: 'Audio Stories', href: '#stories' },
      { name: 'Cultural Events', href: '#events' },
      { name: 'Historical Sites', href: '#history' }
    ],
    plan: [
      { name: 'Visit Planner', href: '#plan' },
      { name: 'Travel Guide', href: '#guide' },
      { name: 'Accommodation', href: '#stay' },
      { name: 'Local Tips', href: '#tips' }
    ],
    learn: [
      { name: 'Cultural Hub', href: '#learn' },
      { name: 'Photo Gallery', href: '#gallery' },
      { name: 'About Harar', href: '#about' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-serif font-bold">Visit Harar</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md">
              Ethiopia's first free digital cultural education platform, preserving ancient heritage 
              through innovative technology and immersive storytelling experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>yahyaabdela0@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>0987818783</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Bole, Addis Ababa · Ethiopia</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-amber-400 mb-4 text-sm uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-amber-400 mb-4 text-sm uppercase tracking-wider">
              Plan Your Visit
            </h3>
            <ul className="space-y-3">
              {navigation.plan.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-amber-400 mb-4 text-sm uppercase tracking-wider">
              Learn More
            </h3>
            <ul className="space-y-3">
              {navigation.learn.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>

        {/* Social Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-slate-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-slate-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <span className="text-slate-400 text-sm font-medium">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 w-48"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-4 py-2 rounded-r-lg text-sm transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2024 Visit Harar. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-amber-400" />
                <span>by Ethiopia Tech Group</span>
              </span>
            </div>

            {/* Additional Links */}
            {/* <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Cookie Policy
              </a>
            </div> */}

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 pt-6 border-t border-slate-700 text-center"
          >
            <p className="text-slate-400 text-sm italic max-w-3xl mx-auto">
              "Preserving Heritage Through Technology • Empowering Communities Through Innovation • 
              Building Ethiopia's First Digital Cultural Education Platform"
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;