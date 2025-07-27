import React from 'react';
import { Code, User, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Passionate about creating exceptional digital experiences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate developers and designers committed to pushing the boundaries of what's possible on the web. Our journey began with a simple mission: to create digital experiences that not only look beautiful but also deliver real value to users and businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in web development, UI/UX design, and digital strategy, we've helped countless clients transform their ideas into reality. Every project is an opportunity to innovate and exceed expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl h-96 flex items-center justify-center text-white">
            <div className="text-center">
              <Code size={80} className="mx-auto mb-4" />
              <p className="text-xl font-semibold">Innovation in Every Line of Code</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: "React.js", level: 95 },
              { skill: "Node.js", level: 88 },
              { skill: "UI/UX Design", level: 92 },
              { skill: "Cloud Services", level: 85 }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.skill}</h3>
                <div className="bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{item.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Excellence", desc: "We strive for perfection in every detail" },
              { icon: User, title: "Client-First", desc: "Your success is our primary focus" },
              { icon: Code, title: "Innovation", desc: "Always exploring new technologies and methods" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <value.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;