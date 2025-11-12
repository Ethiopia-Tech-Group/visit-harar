'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  Clock,
  MapPin,
  ChevronLeft,
  Share,
  Bookmark,
  Calendar,
  Navigation,
  Download,
  Heart,
} from 'lucide-react';

const HistoryDemo = () => {
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock data
  const historicalSites = [
    {
      id: 1,
      title: 'Jugol City Walls',
      period: '13th-16th Century',
      category: 'architecture',
      location: 'Old City Center',
      distance: '0.2km',
      images: ['/hero4.jpg', 'jegol.jpg'],
      duration: '6:15',
      description:
        'The ancient fortified wall surrounding Harar’s old city, featuring five original gates.',
      fullDescription:
        'The Jugol walls represent one of the most impressive examples of Islamic architecture in Africa. Built to protect the city from invaders, these walls have stood for centuries as a testament to Harar’s strategic importance. The walls stretch for 3.5 kilometers and feature 82 mosques and 102 shrines within their perimeter.',
      significance: 'UNESCO World Heritage Site',
      features: ['Ancient Fortifications', 'Islamic Architecture'],
      visitingHours: '6:00 AM - 6:00 PM',
      entryFee: 'Free',
    },
    {
      id: 2,
      title: 'Hyena Feeding Site',
      period: 'Ancient Tradition',
      category: 'cultural',
      location: 'Outside Erer Gate',
      distance: '0.5km',
      images: ['hyena.webp', '/hyena2.jpg'],
      duration: '4:45',
      description:
        'A unique centuries-old tradition where hyena men feed wild hyenas every night.',
      fullDescription:
        'This ancient tradition represents the coexistence between humans and hyenas in Harar. Local hyena men feed them by hand, symbolizing good luck and protection from evil spirits. Every night, visitors gather to witness this powerful cultural ritual.',
      significance: 'Unique Cultural Heritage',
      features: ['Live Feeding', 'Cultural Ritual', 'Night Experience'],
      visitingHours: '7:00 PM - 9:00 PM',
      entryFee: '50 ETB',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Sites', count: historicalSites.length },
    { id: 'architecture', name: 'Architecture', count: 1 },
    { id: 'cultural', name: 'Cultural', count: 1 },
  ];

  const filteredSites =
    activeCategory === 'all'
      ? historicalSites
      : historicalSites.filter((site) => site.category === activeCategory);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedItem(null);
    setIsPlaying(false);
    setProgress(0);
  };

  const playAudio = () => {
    setIsPlaying(!isPlaying);
  };

  // Simulate audio progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && selectedItem) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.4;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedItem]);

  return (
    <div id='demo' className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100  p-4 '>
        <h1 className='text-center w-full text-4xl font-black text-slate-800 py-6'>Live Demo </h1>
    <div className=" flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side Features */}
        <div className="flex-1 max-w-md text-center lg:text-left">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Discover Harar’s Heritage
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Explore Harar’s centuries-old history through an interactive digital
            guide. Listen to audio stories, view photos, and uncover the secrets
            behind Ethiopia’s iconic City of Saints.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 shadow-sm">
            Our mission is to preserve Harar’s heritage digitally, making its
            culture accessible worldwide.
          </div>
        </div>

        {/* Phone UI */}
        <div className="flex-shrink-0">
          <div className="relative bg-slate-900 rounded-[36px] shadow-2xl border-[12px] border-slate-800 w-[320px] h-[640px] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-20"></div>

            {/* Screen */}
            <div className="relative w-full h-full bg-white rounded-[24px] flex flex-col overflow-hidden">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-3 pb-2 border-b border-slate-100 bg-white z-10">
                <span className="text-xs font-semibold text-slate-800">9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-slate-800 rounded-full"></div>
                  <div className="w-6 h-2 bg-slate-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {currentView === 'list' ? (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <h1 className="text-lg font-semibold">Historical Sites</h1>
                        <MapPin size={20} />
                      </div>

                      {/* Category Filter */}
                      <div className="flex space-x-2 overflow-x-auto scrollbar-none">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                              activeCategory === category.id
                                ? 'bg-amber-500 text-slate-900 font-medium'
                                : 'bg-white/10 text-white/90'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Site List */}
                    <div className="flex-1 overflow-y-auto scrollbar-none bg-slate-50">
                      {filteredSites.map((site, index) => (
                        <motion.div
                          key={site.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleItemClick(site)}
                          className="cursor-pointer bg-white mx-3 mt-3 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                        >
                          <div className="relative h-40">
                            <img
                              src={site.images[0]}
                              alt={site.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                              <h3 className="text-sm font-semibold truncate">
                                {site.title}
                              </h3>
                              <p className="text-xs opacity-80 line-clamp-1">
                                {site.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="flex-1 flex flex-col bg-white"
                  >
                    {/* Detail Header */}
                    <div className="relative h-48">
                      <img
                        src={selectedItem?.images?.[0]}
                        alt={selectedItem?.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <button
                          onClick={handleBackToList}
                          className="bg-white/90 hover:bg-white text-slate-800 rounded-full p-1.5"
                        >
                          <ChevronLeft size={18} />
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h2 className="text-lg font-semibold">{selectedItem?.title}</h2>
                        <p className="text-xs opacity-80">{selectedItem?.period}</p>
                      </div>
                    </div>

                    {/* Detail Info */}
                    <div className="flex-1 overflow-y-auto p-4 scrollbar-none">
                      <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                        {selectedItem?.fullDescription}
                      </p>
                      
                      {/* Audio Player */}
                      <div className="bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-slate-800">
                            Audio Guide
                          </h3>
                          {/* <span className="text-xs text-slate-500">
                            {selectedItem?.duration}
                          </span> */}
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={playAudio}
                            className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center"
                          >
                            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                          </button>
                          <div className="flex-1">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                              <span>0:00</span>
                              <span>{selectedItem?.duration}</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1 rounded-full">
                              <div
                                className="bg-amber-500 h-1 rounded-full"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info Boxes */}
                      <div className="grid grid-cols-1 gap-3 mb-4">
                        <div className="bg-slate-50 p-2 rounded-lg text-xs">
                          <div className="text-slate-500">Significance</div>
                          <div className="font-medium text-slate-800">
                            {selectedItem?.significance}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-lg text-xs">
                          <div className="text-slate-500">Visiting Hours</div>
                          <div className="font-medium text-slate-800">
                            {selectedItem?.visitingHours}
                          </div>
                        </div>
                      </div>


                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default HistoryDemo;
