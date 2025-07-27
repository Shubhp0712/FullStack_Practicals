import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🔒',
      title: 'Secure Authentication',
      description: 'Industry-standard security with encrypted passwords and session management.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👥',
      title: 'Role-Based Access',
      description: 'Different user types with appropriate permissions and access levels.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Fully responsive design that works seamlessly on all devices.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚡',
      title: 'Fast & Reliable',
      description: 'Built with modern technologies for optimal performance and reliability.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AuthApp
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                to="/login"
                className="relative px-4 py-2 text-gray-700 hover:text-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-50 group"
              >
                Sign In
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                to="/signup"
                className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'} overflow-hidden`}>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/login"
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <div className="animate-fade-in-up">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                      <span className="block">Secure Authentication</span>
                      <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Made Simple
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-lg">
                      Experience seamless user authentication with role-based access control. 
                      Built with React, TypeScript, and Tailwind CSS for modern web applications.
                    </p>
                  </div>
                  
                  <div className="mt-8 sm:mt-10 animate-fade-in-up animation-delay-200">
                    <div className="sm:flex sm:justify-center lg:justify-start gap-4">
                      <Link
                        to="/signup"
                        className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Create Account
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                      <Link
                        to="/login"
                        className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-indigo-200 text-base font-medium rounded-xl text-indigo-700 bg-white hover:bg-indigo-50 hover:border-indigo-300 md:py-4 md:text-lg md:px-10 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-12 animate-fade-in-up animation-delay-400">
                    <p className="text-sm text-gray-500 mb-4">Trusted by developers worldwide</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">R</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">React</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">TS</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">TypeScript</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">TW</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-56 w-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse animation-delay-2000"></div>
              </div>
              
              <div className="text-center text-white relative z-10 animate-float">
                <div className="text-6xl sm:text-7xl md:text-8xl mb-6 filter drop-shadow-2xl">🔐</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-shadow-lg">Secure & Reliable</h3>
                <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-md mx-auto px-4 text-shadow">
                  Your data is protected with industry-standard security
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features Section */}
        <div className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase animate-fade-in-up">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up animation-delay-200">
                Everything you need for authentication
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in-up animation-delay-400">
                Our authentication system provides all the essential features for secure user management.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer animate-fade-in-up border border-gray-100 overflow-hidden ${
                      activeFeature === index ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setActiveFeature(index)}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Feature Display */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl mb-6 shadow-lg`}>
                  <span className="text-3xl">{features[activeFeature].icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[activeFeature].title}</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Demo Section */}
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
                <span className="block">Ready to get started?</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Try our demo accounts
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the full functionality with our pre-configured demo accounts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Admin Demo Card */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5"></div>
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">👑</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        Admin Demo
                      </h3>
                      <p className="text-sm text-purple-600 font-medium">Full Access</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Email:</span>
                      <code className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border">
                        admin@example.com
                      </code>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Password:</span>
                      <code className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border">
                        Admin123!
                      </code>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Admin Features:</h4>
                    <ul className="space-y-2">
                      {['User Management', 'Analytics Dashboard', 'System Settings', 'Full Permissions'].map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/login"
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Try Admin Demo
                  </Link>
                </div>
              </div>

              {/* User Demo Card */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-blue-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5"></div>
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">�</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        User Demo
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">Standard Access</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Email:</span>
                      <code className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border">
                        user@example.com
                      </code>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Password:</span>
                      <code className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border">
                        User123!
                      </code>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">User Features:</h4>
                    <ul className="space-y-2">
                      {['Personal Dashboard', 'Profile Management', 'Settings Access', 'Project Tools'].map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/login"
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Try User Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Start Guide */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-gray-600">Quick Start:</span>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                  <span className="text-sm text-gray-700">Choose account</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                  <span className="text-sm text-gray-700">Login</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                  <span className="text-sm text-gray-700">Explore features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 AuthApp. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
