import React from 'react';
import { Code, Briefcase, Award, ArrowRight } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to My Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Crafting digital experiences with innovation and creativity
            </p>
            <button 
              onClick={() => setCurrentPage('about')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started <ArrowRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">Professional solutions for modern challenges</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Code, title: "Web Development", desc: "Modern, responsive websites built with cutting-edge technology" },
            { icon: Briefcase, title: "Business Solutions", desc: "Strategic digital solutions to grow your business" },
            { icon: Award, title: "Quality Assurance", desc: "Rigorous testing ensures exceptional user experiences" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <feature.icon className="text-purple-600 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
              <div key={idx} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;