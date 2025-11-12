// app/components/HistoryDemo.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
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
  User,
  Navigation,
  Download,
  Heart
} from 'lucide-react';

const HistoryDemo = () => {
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock historical sites data
  const historicalSites = [
    {
      id: 1,
      title: "Jugol City Walls",
      period: "13th-16th Century",
      category: "architecture",
      location: "Old City Center",
      distance: "0.2km",
      images: [
        "/images/jugol-1.jpg",
        "/images/jugol-2.jpg",
        "/images/jugol-3.jpg"
      ],
      audio: "/audio/jugol-history.mp3",
      duration: "6:15",
      description: "The ancient fortified wall surrounding Harar's old city, featuring five original gates and several secondary gates built between the 13th and 16th centuries.",
      fullDescription: "The Jugol walls represent one of the most impressive examples of Islamic architecture in Africa. Built to protect the city from invaders, these walls have stood for centuries as a testament to Harar's strategic importance. The walls stretch for 3.5 kilometers and feature 82 mosques and 102 shrines within their perimeter. Each gate has its own unique history and architectural style, with the main gates being Erer Gate, Buda Gate, Sanga Gate, Fallana Gate, and Assum Gate.",
      significance: "UNESCO World Heritage Site",
      features: ["Ancient Fortifications", "Islamic Architecture", "Historical Gates"],
      visitingHours: "6:00 AM - 6:00 PM",
      entryFee: "Free"
    },
    {
      id: 2,
      title: "Hyena Feeding Site",
      period: "Ancient Tradition",
      category: "cultural",
      location: "Outside Erer Gate",
      distance: "0.5km",
      images: [
        "/images/hyena-1.jpg",
        "/images/hyena-2.jpg"
      ],
      audio: "/audio/hyena-tradition.mp3",
      duration: "4:45",
      description: "The unique centuries-old tradition where hyena men feed wild hyenas every night, creating a remarkable human-wildlife relationship.",
      fullDescription: "This ancient tradition dates back hundreds of years and represents the unique coexistence between humans and hyenas in Harar. Local hyena men have developed special calls and relationships with these animals, feeding them by hand or mouth. The practice is believed to bring good luck and protect the city from evil spirits. Each evening, tourists and locals gather to witness this incredible spectacle that has been passed down through generations.",
      significance: "Unique Cultural Heritage",
      features: ["Live Feeding", "Cultural Ritual", "Night Experience"],
      visitingHours: "7:00 PM - 9:00 PM",
      entryFee: "50 ETB"
    },
    {
      id: 3,
      title: "Grand Mosque",
      period: "10th Century",
      category: "religious",
      location: "Old City Center",
      distance: "0.3km",
      images: [
        "/images/mosque-1.jpg",
        "/images/mosque-2.jpg"
      ],
      audio: "/audio/mosque-heritage.mp3",
      duration: "5:30",
      description: "One of the oldest mosques in Africa, showcasing traditional Harari Islamic architecture and spiritual significance.",
      fullDescription: "The Grand Mosque of Harar is one of the most important Islamic landmarks in Ethiopia. Built in the 10th century, it features unique architectural elements including intricate wooden carvings, traditional Harari geometric patterns, and a peaceful courtyard. The mosque has served as a center of Islamic learning for centuries, attracting scholars from across the region. Its minaret offers panoramic views of the old city and surrounding landscape.",
      significance: "Ancient Islamic Center",
      features: ["Islamic Architecture", "Historical Learning Center", "Spiritual Site"],
      visitingHours: "5:00 AM - 9:00 PM",
      entryFee: "Free"
    },
    {
      id: 4,
      title: "Rimbaud House",
      period: "19th Century",
      category: "historical",
      location: "Feres Megala",
      distance: "0.4km",
      images: [
        "/images/rimbaud-1.jpg"
      ],
      audio: "/audio/rimbaud-house.mp3",
      duration: "7:20",
      description: "Former residence of French poet Arthur Rimbaud, now a museum showcasing Harari culture and history.",
      fullDescription: "This distinctive Indian-style house was built in the 19th century and served as the residence of French poet Arthur Rimbaud during his time in Harar. The building now houses a museum dedicated to Harari culture, featuring traditional crafts, historical photographs, and exhibits about the city's trading history. The architecture itself is unique in Harar, featuring verandas and layout influenced by Indian design, reflecting the city's position on historic trade routes.",
      significance: "Cultural Museum",
      features: ["Historical Residence", "Museum", "Unique Architecture"],
      visitingHours: "8:00 AM - 5:00 PM",
      entryFee: "100 ETB"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Sites', count: historicalSites.length },
    { id: 'architecture', name: 'Architecture', count: historicalSites.filter(s => s.category === 'architecture').length },
    { id: 'cultural', name: 'Cultural', count: historicalSites.filter(s => s.category === 'cultural').length },
    { id: 'religious', name: 'Religious', count: historicalSites.filter(s => s.category === 'religious').length },
    { id: 'historical', name: 'Historical', count: historicalSites.filter(s => s.category === 'historical').length }
  ];

  const filteredSites = activeCategory === 'all' 
    ? historicalSites 
    : historicalSites.filter(site => site.category === activeCategory);

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
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.3;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, selectedItem]);

  const features = [
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "GPS-enabled navigation to historical sites"
    },
    {
      icon: Volume2,
      title: "Audio Guides",
      description: "Professional narration for each location"
    },
    {
      icon: Clock,
      title: "Historical Timeline",
      description: "Chronological exploration of heritage"
    },
    {
      icon: Bookmark,
      title: "Save Favorites",
      description: "Bookmark sites for later visits"
    },
    {
      icon: Navigation,
      title: "Offline Access",
      description: "Download content for offline use"
    },
    {
      icon: Share,
      title: "Share Experiences",
      description: "Social sharing with friends"
    }
  ];

  const stats = [
    { value: "50+", label: "Historical Sites" },
    { value: "7", label: "Centuries of History" },
    { value: "4", label: "Cultural Categories" },
    { value: "24/7", label: "Digital Access" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Historical Exploration</h2>
          <p className="text-slate-600 text-sm">Interactive journey through Harar's rich heritage</p>
        </div>

        {/* Main Content - Side by Side */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12">
          {/* Features List */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-amber-500" />
                Heritage Features
              </h3>
              
              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <feature.icon size={18} className="text-amber-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              {/* <div className="border-t border-slate-200 pt-4">
                <h4 className="font-medium text-slate-800 text-sm mb-3">Heritage Statistics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="text-center p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="text-lg font-bold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div> */}

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-medium text-amber-800 text-sm mb-2">Cultural Preservation</h4>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Our digital platform ensures Harar's UNESCO World Heritage is preserved and accessible to future generations through immersive technology.
                </p>
              </div>
            </div>

          
          </div>

          {/* Phone Frame */}
          <div className="flex-shrink-0">
            <div className="relative bg-slate-900 rounded-[36px]  shadow-2xl border-[12px] border-slate-800 w-[320px] h-[640px] overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
              
              {/* Screen Content */}
              <div className="relative w-full h-full bg-white rounded-[24px] overflow-hidden flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-3 pb-2 bg-white border-b border-slate-100">
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
                      {/* App Header */}
                      <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 text-white">
                        <div className="flex items-center justify-between mb-3">
                          <h1 className="text-lg font-semibold">Historical Sites</h1>
                          <MapPin size={20} />
                        </div>
                        
                        {/* Category Filters */}
                        <div className="flex space-x-2 overflow-x-auto">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setActiveCategory(category.id)}
                              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                                activeCategory === category.id
                                  ? 'bg-amber-500 text-slate-900 font-medium'
                                  : 'bg-white/10 text-white/90'
                              }`}
                            >
                              <span>{category.name}</span>
                              <span className="bg-white/20 rounded-full px-1.5 py-0.5 text-xs">
                                {category.count}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Sites List */}
                      <div className="flex-1 overflow-y-auto">
                        {filteredSites.map((site, index) => (
                          <motion.div
                            key={site.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-b border-slate-100 p-3 hover:bg-slate-50 transition-colors cursor-pointer"
                            onClick={() => handleItemClick(site)}
                          >
                            <div className="flex space-x-3">
                              {/* Site Image */}
                              <div className="relative flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-amber-500 rounded-lg flex items-center justify-center overflow-hidden">
                                  <div className="w-full h-full bg-slate-400 flex items-center justify-center">
                                    <MapPin size={20} className="text-white" />
                                  </div>
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                                  <Clock size={10} className="text-white" />
                                </div>
                              </div>

                              {/* Site Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-medium text-slate-800 text-sm leading-tight">
                                      {site.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                      {site.description}
                                    </p>
                                  </div>
                                  <button className="text-slate-400 hover:text-amber-500 transition-colors flex-shrink-0">
                                    <Bookmark size={14} />
                                  </button>
                                </div>

                                {/* Site Meta */}
                                <div className="flex items-center space-x-3 mt-2">
                                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                                    <Calendar size={12} />
                                    <span>{site.period}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                                    <MapPin size={12} />
                                    <span>{site.distance}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                                    <Volume2 size={12} />
                                    <span>{site.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="flex-1 flex flex-col"
                    >
                      {/* Detail Header */}
                      <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 text-white">
                        <div className="flex items-center space-x-3 mb-3">
                          <button 
                            onClick={handleBackToList}
                            className="flex-shrink-0"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <h1 className="text-lg font-semibold flex-1 truncate">
                            {selectedItem?.title}
                          </h1>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs">
                            <MapPin size={12} />
                            <span>{selectedItem?.location}</span>
                            <span>•</span>
                            <Clock size={12} />
                            <span>{selectedItem?.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="text-white/80 hover:text-white">
                              <Share size={16} />
                            </button>
                            <button className="text-white/80 hover:text-white">
                              <Bookmark size={16} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Detail Content */}
                      <div className="flex-1 overflow-y-auto">
                        {/* Image Gallery */}
                        <div className="h-48 bg-slate-200 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-amber-500 flex items-center justify-center">
                            <MapPin size={32} className="text-white" />
                          </div>
                          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            {selectedItem?.images?.length || 1} photos
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          {/* Basic Info */}
                          <div className="mb-4">
                            <h2 className="text-lg font-bold text-slate-800 mb-2">
                              {selectedItem?.title}
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                              {selectedItem?.fullDescription}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="bg-slate-50 p-2 rounded">
                                <div className="text-slate-500">Significance</div>
                                <div className="font-medium text-slate-800">{selectedItem?.significance}</div>
                              </div>
                              <div className="bg-slate-50 p-2 rounded">
                                <div className="text-slate-500">Visiting Hours</div>
                                <div className="font-medium text-slate-800">{selectedItem?.visitingHours}</div>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-4">
                            <h3 className="font-medium text-slate-800 text-sm mb-2">Key Features</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedItem?.features?.map((feature: string, index: number) => (
                                <span 
                                  key={index}
                                  className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Audio Guide */}
                          <div className="bg-slate-50 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-slate-800 text-sm">Audio Guide</h3>
                              <span className="text-xs text-slate-500">{selectedItem?.duration}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={playAudio}
                                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white flex-shrink-0"
                              >
                                {isPlaying ? (
                                  <Pause size={16} />
                                ) : (
                                  <Play size={16} className="ml-0.5" />
                                )}
                              </button>
                              <div className="flex-1">
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                                  <span>0:00</span>
                                  <span>{selectedItem?.duration}</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-1">
                                  <div 
                                    className="bg-amber-500 h-1 rounded-full transition-all"
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              <button className="text-slate-400 hover:text-amber-500">
                                <Download size={16} />
                              </button>
                            </div>
                          </div>

                          {/* Additional Actions */}
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-amber-500 text-xs">
                              <Navigation size={14} />
                              <span>Get Directions</span>
                            </button>
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-amber-500 text-xs">
                              <Heart size={14} />
                              <span>Add to Favorites</span>
                            </button>
                            <button className="flex items-center space-x-2 text-slate-600 hover:text-amber-500 text-xs">
                              <Share size={14} />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDemo;