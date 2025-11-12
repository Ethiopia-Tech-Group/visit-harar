// app/components/AudioStoriesDemo.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaPause, 
  FaVolumeUp, 
  FaHeadphones,
  FaClock,
  FaLanguage,
  FaChevronLeft,
  FaShare,
  FaBookmark
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Mock audio stories data
  const audioStories = [
    {
      id: 1,
      title: "The Legend of Hyena Men",
      duration: "4:32",
      language: "English",
      category: "legends",
      narrator: "Elder Ahmed",
      plays: "1.2K",
      image: "/list2.jpg",
      audio: "/audio/hyena-legend.mp3",
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
      image: "/list.jpg",
      audio: "/audio/jugol-history.mp3",
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
      audio: "/audio/coffee-ceremony.mp3",
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
      audio: "/audio/wedding-tradition.mp3",
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
    {
      icon: Languages,
      title: "Multilingual",
      description: "Stories in 4 local languages"
    },
    {
      icon: Headphones,
      title: "Immersive",
      description: "Professional audio quality"
    },
    {
      icon: User,
      title: "Local Narrators",
      description: "Authentic community voices"
    },
    {
      icon: Bookmark,
      title: "Save & Share",
      description: "Bookmark favorite stories"
    },
    {
      icon: Sparkles,
      title: "Cultural Depth",
      description: "Rich historical context"
    },
    {
      icon: MapPin,
      title: "Location-based",
      description: "Stories tied to landmarks"
    }
  ];

  const filteredStories = audioStories.filter(story => {
    const categoryMatch = activeCategory === 'all' || story.category === activeCategory;
    const searchMatch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       story.narrator.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });
  const playStory = (story: any) => {
    if (currentStory?.id === story.id) {
      // Toggle play/pause for current story
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        // Simulate audio progress
        simulateAudioProgress();
      }
    } else {
      // Play new story
      setCurrentStory(story);
      setIsPlaying(true);
      setProgress(0);
      setCurrentTime('0:00');
      // Simulate audio progress
      simulateAudioProgress();
    }
  };

  const simulateAudioProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (!isPlaying && currentStory) {
        clearInterval(interval);
        return;
      }
      
      currentProgress += 1;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
        // Calculate time based on duration (mock)
        const totalSeconds = 280; // 4:40 in seconds
        const currentSeconds = Math.floor((currentProgress / 100) * totalSeconds);
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
        setProgress(100);
      }
    }, 1000);
  };

  const formatTime = (time: string) => {
    // Mock function to format time
    return time;
  };

  useEffect(() => {
    if (!isPlaying) {
      // Clear any intervals when not playing
      setProgress(0);
    }
  }, [isPlaying]);
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <div id='stories' className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div  className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Audio Stories Feature</h2>
        <p className="text-gray-600">Immersive voice-guided storytelling experience</p>
      </div>
<div className='flex gap-10 items-center'>
      {/* Phone Frame */}
      <div className="relative bg-black rounded-[40px]  shadow-2xl border-[8px] border-gray-800 w-[320px] h-[600px] overflow-hidden">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-2 pb-1 bg-white border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-800">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-2 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* App Header */}
         {/* App Header */}
         <div className="bg-gradient-to-r from-slate-800 to-slate-600 p-4 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <ChevronLeft size={20} />
                      <h1 className="text-lg font-semibold">Audio Stories</h1>
                    </div>
                    <Headphones size={20} />
                  </div>
                  
                  {/* Category Filters */}
                  <div className="flex space-x-2 overflow-x-auto scrollbar-none">
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
                        <span className="text-xs">{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

  {/* Search Bar */}
  <div className="relative mx-4 mt-2 rounded-xl bg-gray-200">
                    <div className="relative flex items-center text-slate-800">
                      <Search className="absolute left-3 text-slate-800" size={16} />
                      <input
                        type="text"
                        placeholder="Search stories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearching(true)}
                        className="w-full pl-10 pr-8 py-2 bg-white/10 border border-white/20 rounded-lg text-slate-800 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                      {searchQuery && (
                        <button
                          onClick={clearSearch}
                          className="absolute right-2 text-slate-300 hover:text-white transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                    
                    {/* Search Results Info */}
                    {searchQuery && (
                      <div className="mt-2 text-xs text-white/70">
                        {filteredStories.length > 0 ? (
                          <span>Found {filteredStories.length} story{filteredStories.length !== 1 ? 's' : ''}</span>
                        ) : (
                          <span>No stories found</span>
                        )}
                      </div>
                    )}
                  </div>
                {/* </div> */}
          {/* Stories List */}
          <div className="h-[calc(100%-140px)] overflow-y-auto scrollbar-none">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-b border-gray-100 p-4 transition-all ${
                  currentStory?.id === story.id ? 'bg-gold/10' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex space-x-3">
                  {/* Story Image */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#27354A] from-earth to-gold rounded-lg flex items-center justify-center">
                      {/* <GiSoundWaves className="text-white text-2xl" /> */}
                      <img src={story.image} className='w-16 h-16 object-center object-cover rounded' alt="" />
                    </div>
                    {currentStory?.id === story.id && isPlaying && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  {/* Story Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                          {story.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {story.description}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gold transition-colors">
                        <FaBookmark />
                      </button>
                    </div>

                    {/* Story Meta */}
                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <FaLanguage />
                        <span>{story.language}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <FaClock />
                        <span>{story.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <FaVolumeUp />
                        <span>{story.plays} plays</span>
                      </div>
                    </div>

                    {/* Progress Bar - Only show for current playing story */}
                    {currentStory?.id === story.id && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>{currentTime}</span>
                          <span>{story.duration}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-gold h-1 rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Play Button */}
                  <button
                    onClick={() => playStory(story)}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      currentStory?.id === story.id && isPlaying
                        ? 'bg-gold text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gold hover:text-white'
                    }`}
                  >
                    {currentStory?.id === story.id && isPlaying ? (
                      <FaPause className="text-xs" />
                    ) : (
                      <FaPlay className="text-xs ml-0.5" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Now Playing Bar - Fixed at bottom */}
          {currentStory && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-earth to-gold rounded-lg flex items-center justify-center">
                  <GiSoundWaves className="text-white text-xl" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm truncate">
                    {currentStory.title}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {currentStory.narrator} • {currentStory.language}
                  </p>
                  
                  {/* Mini Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div 
                      className="bg-gold h-1 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gold transition-colors">
                    <FaShare className="text-sm" />
                  </button>
                  <button
                    onClick={() => playStory(currentStory)}
                    className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white"
                  >
                    {isPlaying ? (
                      <FaPause className="text-xs" />
                    ) : (
                      <FaPlay className="text-xs ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>

      {/* Feature Description */}
      <div className="flex-1 max-w-md">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Headphones size={20} className="text-amber-500" />
                Key Features
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <feature.icon size={16} className="text-amber-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 text-sm mb-0.5">
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
              {/* <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-slate-800">4+</div>
                    <div className="text-xs text-slate-600">Languages</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">50+</div>
                    <div className="text-xs text-slate-600">Stories</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">24/7</div>
                    <div className="text-xs text-slate-600">Access</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-800">5K+</div>
                    <div className="text-xs text-slate-600">Listeners</div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Call to Action */}
            <div className="mt-4 text-center">
              <p className="text-slate-600 text-xs mb-3">
                Immersive cultural experience through authentic storytelling
              </p>
              {/* <button className="bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors">
                View Full Proposal
              </button> */}
            </div>
      </div>
      </div>
    </div>
  );
};

export default AudioStoriesDemo;