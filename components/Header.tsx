'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Demo', href: '#demo' },
    { name: 'Audio Stories', href: '#stories' },
    // { name: 'Learn Mode', href: '/learn' },
    // { name: 'Gallery', href: '/gallery' },
    // { name: 'Plan Visit', href: '/plan' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-yellow-500' : 'text-white'
            }`} />
            <span className={`text-2xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}>
              Visit Harar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                  pathname === item.href
                    ? isScrolled 
                      ? 'text-yellow-600 border-b-2 border-yellow-600' 
                      : 'text-yellow-400 border-b-2 border-yellow-400'
                    : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100' 
                : 'text-white hover:text-yellow-400 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 transition-all duration-300 ${
            isScrolled 
              ? 'border-t border-gray-200 bg-white' 
              : 'border-t border-white/30 bg-black/20 backdrop-blur-md'
          }`}>
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-yellow-400 bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                        : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;