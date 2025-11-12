'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlay, FaPause, FaVolumeUp, FaClock, FaLanguage, FaShare, FaBookmark 
} from 'react-icons/fa';
import { GiSoundWaves } from 'react-icons/gi';
import { Bookmark, ChevronLeft, Headphones, Languages, MapPin, Music, Search, Sparkles, User, X } from 'lucide-react';
import { PiWall } from 'react-icons/pi';

const AudioStoriesDemo = () => {
  const [currentStory, setCurrentStory] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const audioStories = [
    {
      id: 1,
      title: "The Legend of Hyena Men",
      duration: "4:32",
      language: "English",
      category: "legends",
      narrator: "Elder Ahmed",
      plays: "1.2K",
      image: "/wall.jpg",
      description: "Discover the ancient tradition of hyena feeding and the brave men who maintain this unique cultural practice."
    },
    {
      id: 2,
      title: "History of Jugol Walls",
      duration: "6:15",
      language: "Amharic",
      category: "history",
      narrator: "Dr. Selam",
      plays: "894",
      image: "/hero5.jpg",
      description: "Journey through time exploring the magnificent fortified walls that have protected Harar for centuries."
    },
    {
      id: 3,
      title: "Harari Coffee Ceremony",
      duration: "5:48",
      language: "Harari",
      category: "culture",
      narrator: "Mother Zeynab",
      plays: "1.5K",
      image: "/hero.png",
      description: "Experience the rich aromas and traditions of the world-renowned Harari coffee ceremony."
    },
    {
      id: 4,
      title: "Traditional Wedding Rituals",
      duration: "7:12",
      language: "Afan Oromo",
      category: "culture",
      narrator: "Elder Yusuf",
      plays: "723",
      image: "/hero2.jpg",
      description: "Immerse yourself in the vibrant colors and beautiful rituals of traditional Harari weddings."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stories', icon: <Music size={12} /> },
    { id: 'history', name: 'History', icon: <PiWall size={12} /> },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'legends', name: 'Legends', icon: '📖' },
    { id: 'people', name: 'People', icon: '👥' }
  ];

  const features = [
    { icon: Languages, title: "Multilingual", description: "Stories in more than 100 languages" },
    { icon: Headphones, title: "Immersive", description: "Professional audio quality" },
    { icon: User, title: "Local Narrators", description: "Authentic community voices" },
    { icon: Bookmark, title: "Save & Share", description: "Bookmark favorite stories" },
    { icon: Sparkles, title: "Cultural Depth", description: "Rich historical context" },
    { icon: MapPin, title: "Location-based", description: "Stories tied to landmarks" }
  ];

  const filteredStories = audioStories.filter(story => {
    const categoryMatch = activeCategory === 'all' || story.category === activeCategory;
    const searchMatch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.narrator.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const playStory = (story: any) => {
    if (currentStory?.id === story.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentStory(story);
      setIsPlaying(true);
      setProgress(0);
      setCurrentTime('0:00');
    }
  };

  useEffect(() => {
    if (isPlaying) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        if (currentProgress <= 100) {
          setProgress(currentProgress);
        } else {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <div id='stories' className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Audio Stories Feature</h2>
        <p className="text-gray-600 text-sm sm:text-base">Immersive voice-guided storytelling experience</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center w-full max-w-6xl">
        {/* Phone Frame */}
        <div className="relative bg-black rounded-[32px] shadow-2xl border-[8px] border-gray-800 w-[90%] max-w-[320px] h-[550px] sm:h-[600px] overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-2xl z-20"></div>
          <div className="relative w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-3 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <ChevronLeft size={18} />
                  <h1 className="text-sm font-semibold">Audio Stories</h1>
                </div>
                <Headphones size={18} />
              </div>

              {/* Categories */}
              <div className="flex space-x-2 overflow-x-auto scrollbar-none">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-amber-500 text-slate-900 font-medium'
                        : 'bg-white/10 text-white/90'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mx-3 mt-2 rounded-lg bg-gray-100">
              <div className="relative flex items-center text-slate-800">
                <Search className="absolute left-3 text-slate-600" size={14} />
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-1.5 bg-transparent text-slate-800 text-xs sm:text-sm focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={clearSearch} className="absolute right-2 text-slate-400 hover:text-slate-700">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Stories List */}
            <div className="flex-1 overflow-y-auto px-2 sm:px-3 scrollbar-none mt-2 pb-16">
              {filteredStories.map((story) => (
                <div key={story.id} className="border-b border-gray-100 p-3 hover:bg-gray-50 rounded-lg transition-all">
                  <div className="flex gap-3">
                    <img src={story.image} alt="" className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm">{story.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2">{story.description}</p>
                      <div className="flex items-center space-x-2 mt-1 text-[11px] text-gray-500">
                        <FaLanguage /> <span>{story.language}</span>
                        <FaClock /> <span>{story.duration}</span>
                        <FaVolumeUp /> <span>{story.plays}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => playStory(story)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        currentStory?.id === story.id && isPlaying
                          ? 'bg-amber-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-amber-400 hover:text-white'
                      }`}
                    >
                      {currentStory?.id === story.id && isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Now Playing Bar */}
            {currentStory && (
              <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="absolute bottom-0 left-0 right-0 bg-white border-t p-2">
                <div className="flex items-center gap-2">
                  <GiSoundWaves className="text-amber-500 text-xl" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-700 truncate">{currentStory.title}</p>
                    <p className="text-[10px] text-gray-500 truncate">{currentStory.narrator}</p>
                    <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
                      <div className="bg-amber-500 h-1 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  <button
                    onClick={() => playStory(currentStory)}
                    className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white"
                  >
                    {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} className="ml-0.5" />}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="flex-1 w-full max-w-md text-center md:text-left">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center justify-center md:justify-start gap-2">
              <Headphones size={20} className="text-amber-500" /> Key Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={14} className="text-amber-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-slate-800">{feature.title}</h4>
                    <p className="text-xs text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioStoriesDemo;
