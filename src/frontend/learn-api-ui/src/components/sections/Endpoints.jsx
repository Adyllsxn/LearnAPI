import { useState, useEffect } from 'react';

export default function Endpoints() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedBaseUrl, setCopiedBaseUrl] = useState(false);

  const endpoints = [
    {
      url: 'https://learnapi-h22m.onrender.com/api/users',
      method: 'GET',
      description: 'Get all users',
      color: 'bg-green-900/20 text-green-400 border-green-700/30'
    },
    {
      url: 'https://learnapi-h22m.onrender.com/api/users/{id}',
      method: 'GET',
      description: 'Get user by ID',
      color: 'bg-green-900/20 text-green-400 border-green-700/30'
    },
    {
      url: 'https://learnapi-h22m.onrender.com/api/users',
      method: 'POST',
      description: 'Create user',
      color: 'bg-blue-900/20 text-blue-400 border-blue-700/30'
    },
    {
      url: 'https://learnapi-h22m.onrender.com/api/users',
      method: 'PUT',
      description: 'Update user',
      color: 'bg-yellow-900/20 text-yellow-400 border-yellow-700/30'
    },
    {
      url: 'https://learnapi-h22m.onrender.com/api/users/{id}',
      method: 'DELETE',
      description: 'Delete user',
      color: 'bg-red-900/20 text-red-400 border-red-700/30'
    },
    {
      url: 'https://learnapi-h22m.onrender.com/api/users/search?name={name}',
      method: 'GET',
      description: 'Search users',
      color: 'bg-green-900/20 text-green-400 border-green-700/30'
    }
  ];

  const copyToClipboard = async (url, index = null) => {
    await navigator.clipboard.writeText(url);
    
    if (index !== null) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      setCopiedBaseUrl(true);
      setTimeout(() => setCopiedBaseUrl(false), 2000);
    }
  };

  return (
    <section id="endpoints" className="py-20 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">API</span>
            <span className="text-gradient bg-gradient-to-r from-red-500 to-orange-500 ml-3">
              Endpoints
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Available endpoints with copy functionality
          </p>
        </div>

        {/* Endpoints List */}
        <div className="space-y-4">
          {endpoints.map((endpoint, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-black/30 to-black/20 border border-red-900/20 rounded-xl p-5 hover:border-red-700/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Method Badge */}
                <div className="flex-shrink-0">
                  <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${endpoint.color}`}>
                    {endpoint.method}
                  </span>
                </div>

                {/* URL */}
                <div className="flex-1">
                  <code className="text-gray-200 font-mono text-sm md:text-base break-all">
                    {endpoint.url}
                  </code>
                  <p className="text-gray-400 text-sm mt-1">
                    {endpoint.description}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => copyToClipboard(endpoint.url, index)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
                    copiedIndex === index
                      ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-400 border border-green-700/30'
                      : 'bg-gradient-to-r from-red-900/20 to-orange-900/20 text-gray-300 hover:text-white border border-red-900/30 hover:border-red-700/40'
                  }`}
                >
                  {copiedIndex === index ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Base URL */}
        <div className="mt-16 pt-12 border-t border-red-900/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Base URL
            </h3>
            <p className="text-gray-400">
              All endpoints start from this base URL
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/40 to-black/20 border border-red-900/30 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <code className="text-gray-200 font-mono text-lg break-all">
                  https://learnapi-h22m.onrender.com
                </code>
                <p className="text-gray-400 text-sm mt-2">
                  Main API server endpoint
                </p>
              </div>
              
              <button
                onClick={() => copyToClipboard('https://learnapi-h22m.onrender.com')}
                className={`px-6 py-3 rounded-lg font-bold flex items-center gap-3 transition-all duration-300 ${
                  copiedBaseUrl
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white'
                    : 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:shadow-lg hover:shadow-red-900/20'
                }`}
              >
                {copiedBaseUrl ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Base URL
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '6', label: 'Endpoints', color: 'from-red-500 to-orange-500' },
            { value: 'REST', label: 'Architecture', color: 'from-orange-500 to-red-500' },
            { value: 'JSON', label: 'Format', color: 'from-red-500 to-orange-500' },
            { value: 'HTTPS', label: 'Security', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/30 to-black/20 border border-red-900/20 rounded-xl p-4 text-center"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}