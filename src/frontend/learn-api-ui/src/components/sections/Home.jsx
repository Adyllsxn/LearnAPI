import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-0"
    >
      {/* Background Effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, #ef4444 1px, transparent 1px),
                          linear-gradient(180deg, #ef4444 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gradient font-medium">
            Educational API Project
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Learn</span>
          <span className="text-gradient bg-gradient-to-r from-red-500 to-orange-500 ml-3">
            API
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Educational API built with .NET 10, EF Core, and Minimal API for learning clean architecture.
        </p>

        {/* Purpose Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {[
            'Learning & Portfolio',
            'Minimal API',
            'Swagger/OpenAPI'
          ].map((point, index) => (
            <div key={index} className="p-4 border border-red-900/30 rounded-lg bg-black/20">
              <div className="text-sm text-gray-300">{point}</div>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="https://learnapi-h22m.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300"
        >
          Open Swagger Docs
        </a>

        {/* Tech Stack */}
        <div className="mt-12 flex justify-center gap-6 text-sm text-gray-400">
          <span>.NET 10</span>
          <span>•</span>
          <span>EF Core</span>
          <span>•</span>
          <span>Minimal API</span>
          <span>•</span>
          <span>Swagger</span>
        </div>
      </div>
    </section>
  );
}