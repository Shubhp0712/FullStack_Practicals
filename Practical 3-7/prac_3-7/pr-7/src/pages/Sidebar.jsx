import React, { useState } from 'react';
import { Search, Home, User, Mail } from 'lucide-react';

const Sidebar = ({ currentPage, setCurrentPage, isSidebarOpen, setIsSidebarOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const pages = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="flex items-center justify-center h-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <h1 className="text-2xl font-bold text-white">My Website</h1>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search pages..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {filteredPages.map((page) => {
            const IconComponent = page.icon;
            return (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPage(page.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-4 text-left hover:bg-purple-50 transition-all duration-300 ${currentPage === page.id
                    ? 'bg-purple-100 text-purple-700 border-r-4 border-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                  }`}
              >
                <IconComponent className="mr-3" size={20} />
                <span className="font-medium">{page.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500 text-center">© 2025 My Website</p>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-lg shadow-lg"
      >
        <div className="w-6 h-6 flex flex-col justify-center">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;