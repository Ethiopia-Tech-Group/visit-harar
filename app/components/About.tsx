// app/components/AboutUsDemo.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Users, 
  Globe, 
  Heart,
  Star,
  Target,
  TrendingUp,
  Mail,
  Phone
} from 'lucide-react';

const AboutUsDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ancient Walls",
      description: "13th century heritage",
      img: '/hero.png'
    },
    {
      id: 2,
      title: "Cultural Traditions", 
      description: "Oral histories preserved",
      img: '/hero2.jpg'
    },
    {
      id: 3,
      title: "Community First",
      description: "Local storytellers",
      img: '/hero4.jpg'
    },
    {
      id: 4,
      title: "Global Access",
      description: "Smartphone accessible",
      img: '/list2.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "First", label: "Digital Platform" },
    { icon: Globe, value: "Free", label: "Accessible" },
    { icon: Target, value: "Inclusive", label: "Tourism" },
    { icon: TrendingUp, value: "Economic", label: "Growth" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 my-8">
      <div className="w-full max-w-7xl">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-gray-800 mb-1"
          >
            Visionary Investment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm"
          >
            Digital Cultural Transformation
          </motion.p>
        </div>

        {/* Main Content - Compact Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-40">
          {/* Left Side - Compact Investment Text */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 text-gray-800"
            >
              {/* Compact Investment Text */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-amber-400" size={16} />
                  <h3 className="text-lg font-bold">Ethiopia's First Digital Platform</h3>
                </div>
                
                <div className="space-y-2 text-slate-800 text-sm leading-relaxed">
                  <p>
                    <span className="text-amber-400 font-medium">Free digital cultural education</span> preserving oral traditions while empowering communities.
                  </p>
                  <p>
                    Experience Harar through <span className="text-amber-400">local storytellers</span> with immersive learning beyond traditional tourism.
                  </p>
                  <p>
                    Accessible heritage drives <span className="text-amber-400">inclusive tourism</span> and establishes Harar as a global innovation hub.
                  </p>
                </div>

                {/* Compact Stats */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-2 bg-black/5 rounded-lg border border-black/10 hover:bg-black/10 transition-colors"
                    >
                      <stat.icon className="text-amber-400 mx-auto mb-1" size={16} />
                      <div className="text-amber-400 font-bold text-sm">{stat.value}</div>
                      <div className="text-slate-900 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Compact Contact */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-3 pt-3 border-t border-black/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Heart size={14} className="text-amber-400" />
                    <h4 className="font-semibold text-amber-400 text-sm">Contact</h4>
                  </div>
                  <div className="space-y-1 text-slate-800 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Yahya Mohammed</div>
                      <div className="text-amber-400 text-xs">Founder & CEO</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-amber-400" />
                      Ethiopia Tech Group, Bole
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail size={12} className="text-amber-400" />
                      yahyaabdela0@gmail.com
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone size={12} className="text-amber-400" />
                      0987818783
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Compact Phone Frame */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-slate-900 rounded-[40px] shadow-xl border-[10px] border-slate-800 w-[280px] h-[560px] overflow-hidden"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content - Full Screen Slideshow */}
              <div className="relative w-full h-full bg-black rounded-[30px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    {/* Slide Background */}
                    <motion.img
  key={slides[currentSlide].id}
  src={slides[currentSlide].img}
  alt={slides[currentSlide].title}
  className="w-full h-full object-cover absolute inset-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
/>
                    {/* Compact Slide Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                      <div className="text-center text-white">
                        <h3 className="text-base font-bold">{slides[currentSlide].title}</h3>
                        <p className="text-slate-300 text-xs">{slides[currentSlide].description}</p>
                      </div>
                    </div>

                    {/* Slide Indicator */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {slides.map((_, index) => (
                        <div
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            index === currentSlide ? 'bg-amber-400' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Compact Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Compact Status Bar */}
                <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-4 z-10">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-1 bg-white rounded-full"></div>
                    <div className="w-3 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-slate-600 rounded-full"></div>
            </motion.div>

            {/* Compact Slideshow Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-2"
            >
              <p className="text-slate-400 text-xs">
                Cultural heritage showcase
              </p>
            </motion.div>
          </div>
        </div>

        {/* Compact Mission Statement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-center max-w-2xl mx-auto"
        >
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 backdrop-blur-sm">
            <h3 className="text-base font-bold text-amber-400 mb-1">
              Our Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Preserve Ethiopian heritage through digital innovation, creating sustainable opportunities.
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default AboutUsDemo;