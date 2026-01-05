import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToProfile = () => {
    const element = document.getElementById('profile');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1685540211365-275d3208e363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJsZXklMjBkYXZpZHNvbiUyMG1vdG9yY3ljbGUlMjB2aW50YWdlfGVufDF8fHx8MTc2NzU3ODIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Harley Davidson"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 tracking-wider"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <span className="text-white">FRONTEND</span>
            <br />
            <span className="text-orange-500">ENGINEER</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Crafting Digital Experiences with Precision & Passion
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProfile}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/50 w-full sm:w-auto"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            VIEW PROFILE
          </button>
          <button
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white tracking-wider transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            CONTACT ME
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProfile}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-orange-500 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
}
