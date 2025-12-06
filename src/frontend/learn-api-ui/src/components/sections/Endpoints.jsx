import { useState } from 'react';

export default function Endpoints() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const endpoints = [
    { url: '/api/users', method: 'GET', desc: 'Get all users' },
    { url: '/api/users/{id}', method: 'GET', desc: 'Get user by ID' },
    { url: '/api/users', method: 'POST', desc: 'Create user' },
    { url: '/api/users', method: 'PUT', desc: 'Update user' },
    { url: '/api/users/{id}', method: 'DELETE', desc: 'Delete user' },
    { url: '/api/users/search?name={name}', method: 'GET', desc: 'Search users' }
  ];

  const copyToClipboard = async (url, index) => {
    await navigator.clipboard.writeText(`https://learnapi-h22m.onrender.com${url}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          API Endpoints
        </h2>

        <div className="space-y-3">
          {endpoints.map((endpoint, index) => (
            <div key={index} className="border border-red-900/20 rounded p-4 hover:border-red-700/40">
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 text-xs rounded ${
                  endpoint.method === 'GET' ? 'bg-green-900/20 text-green-400' :
                  endpoint.method === 'POST' ? 'bg-blue-900/20 text-blue-400' :
                  endpoint.method === 'PUT' ? 'bg-yellow-900/20 text-yellow-400' :
                  'bg-red-900/20 text-red-400'
                }`}>
                  {endpoint.method}
                </span>
                
                <div className="flex-1">
                  <code className="text-gray-200 text-sm">{endpoint.url}</code>
                  <p className="text-gray-400 text-xs">{endpoint.desc}</p>
                </div>

                <button
                  onClick={() => copyToClipboard(endpoint.url, index)}
                  className={`px-3 py-1 text-xs rounded ${
                    copiedIndex === index 
                      ? 'bg-green-900/30 text-green-400' 
                      : 'bg-red-900/20 text-gray-300 hover:text-white'
                  }`}
                >
                  {copiedIndex === index ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 border border-red-900/30 rounded">
          <p className="text-sm text-gray-400 mb-2">Base URL</p>
          <code className="text-gray-200">https://learnapi-h22m.onrender.com</code>
        </div>
      </div>
    </section>
  );
}