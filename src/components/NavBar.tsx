
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">e/acc</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#focus" className="text-white/80 hover:text-white transition-colors">Focus Areas</a>
            <a href="#ventures" className="text-white/80 hover:text-white transition-colors">Ventures</a>
            <button className="px-6 py-2 bg-eacc-purple hover:bg-eacc-purple/90 text-white rounded-full transition-all">
              Join Movement
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass mt-4 rounded-lg p-4 space-y-4">
            <a href="#about" className="block text-white/80 hover:text-white transition-colors">About</a>
            <a href="#focus" className="block text-white/80 hover:text-white transition-colors">Focus Areas</a>
            <a href="#ventures" className="block text-white/80 hover:text-white transition-colors">Ventures</a>
            <button className="w-full px-6 py-2 bg-eacc-purple hover:bg-eacc-purple/90 text-white rounded-full transition-all">
              Join Movement
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
