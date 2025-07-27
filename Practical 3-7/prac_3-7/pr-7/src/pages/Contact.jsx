import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100">Let's start a conversation about your next project</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                onClick={() => alert('Message sent! (This is a demo)')}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", info: "hello@mywebsite.com", desc: "Send us an email anytime!" },
                { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", desc: "Mon-Fri from 8am to 5pm" },
                { icon: MapPin, title: "Office", info: "123 Business St, City, State 12345", desc: "Come visit our office" }
              ].map((contact, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <contact.icon className="text-green-600 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{contact.title}</h3>
                      <p className="text-lg text-gray-700 mb-1">{contact.info}</p>
                      <p className="text-gray-600">{contact.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Github, color: "bg-gray-800 hover:bg-gray-900" },
                  { icon: Linkedin, color: "bg-blue-600 hover:bg-blue-700" },
                  { icon: Twitter, color: "bg-sky-500 hover:bg-sky-600" }
                ].map((social, idx) => (
                  <button key={idx} className={`${social.color} text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg`}>
                    <social.icon size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;