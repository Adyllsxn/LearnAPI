export default function Footer() {
  return (
    <footer className="border-t border-red-900/30 py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold mb-2">
            <span className="text-white">Learn</span>
            <span className="text-gradient bg-gradient-to-r from-red-500 to-orange-500">
              API
            </span>
          </div>
          <p className="text-sm text-gray-400">Educational API Project</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href="https://learnapi-h22m.onrender.com" className="text-sm text-gray-300 hover:text-white">
            Swagger Docs
          </a>
          <a href="https://github.com/Adyllsxn" className="text-sm text-gray-300 hover:text-white">
            GitHub
          </a>
          <a href="https://adyllsxn.vercel.app/" className="text-sm text-gray-300 hover:text-white">
            Portfolio
          </a>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Adyllsxn • Educational project</p>
        </div>
      </div>
    </footer>
  );
}