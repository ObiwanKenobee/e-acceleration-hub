
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20"
      style={{ background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(110, 15, 245, 0.15), transparent 50%)' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Build the Future—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eacc-blue to-eacc-purple animate-glow">
              Faster
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join the vanguard of human progress—where AI, biotech, and frontier innovation converge to shape the next civilization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="px-8 py-3 bg-eacc-purple hover:bg-eacc-purple/90 text-white rounded-full transition-all flex items-center gap-2 group">
              Join the Movement
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 glass hover:bg-white/20 text-white rounded-full transition-all">
              Read Manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-eacc-purple/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-eacc-blue/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
