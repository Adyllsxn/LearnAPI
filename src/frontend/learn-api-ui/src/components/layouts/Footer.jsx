import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { text: '.NET', x: 10, y: 20, delay: 0 },
    { text: 'API', x: 85, y: 30, delay: 0.2 },
    { text: 'REST', x: 25, y: 70, delay: 0.4 },
    { text: 'CRUD', x: 70, y: 80, delay: 0.6 },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #ef4444 1px, transparent 1px),
                          linear-gradient(180deg, #ef4444 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />

      {/* Floating Tech Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-bold text-gradient opacity-30"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-600/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Creative Brand Section */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="text-4xl font-bold mb-2">
                <span className="text-white">Learn</span>
                <span className="text-gradient bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                  API
                </span>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                Transforming learning into production-ready code.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-0.5"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">Live • Learning • Growing</span>
              </div>
            </div>
          </div>

          {/* Interactive Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-red-500 pl-4">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Swagger UI', emoji: '📚', href: 'https://learnapi-h22m.onrender.com' },
                { name: 'GitHub', emoji: '🐙', href: 'https://github.com/Adyllsxn' },
                { name: '.NET Docs', emoji: '🔗', href: 'https://dotnet.microsoft.com' },
                { name: 'Portfolio', emoji: '🎯', href: 'https://adyllsxn.vercel.app/' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group p-4 bg-gradient-to-br from-black/40 to-black/20 border border-red-900/30 rounded-xl hover:border-red-700/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Stats & Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-orange-500 pl-4">
              Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Endpoints', value: '6', color: 'from-red-500 to-orange-500' },
                { label: 'Methods', value: '4', color: 'from-orange-500 to-red-500' },
                { label: 'Uptime', value: '99%', color: 'from-red-500 to-orange-500' },
                { label: 'Version', value: '1.0', color: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-br from-black/40 to-black/20 border border-red-900/30 rounded-xl"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Creative Bar */}
        <div className="pt-8 border-t border-red-900/30 relative">
          {/* Animated Line */}
          <div className="absolute top-0 left-0 right-0 h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-shimmer"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                Crafted with passion by{' '}
                <span className="relative">
                  <span className="text-gradient font-bold">Adyllsxn</span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Educational project • Not for production use
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-500 font-mono">
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              
              <div className="flex gap-2">
                {['red', 'orange', 'red'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full bg-${color}-500 animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}