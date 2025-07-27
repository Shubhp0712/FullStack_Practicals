import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with expertise in full-stack development, UI/UX design, and project management.',
    company: 'Tech Solutions Inc.',
    role: user?.userType === 'admin' ? 'System Administrator' : 'Software Developer',
    joinDate: 'January 2023',
    projects: user?.userType === 'admin' ? '25' : '12',
    experience: user?.userType === 'admin' ? '8 years' : '4 years'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    setIsEditing(false);
    // Show success message
  };

  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-indigo-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-yellow-500' },
    { name: 'Database Design', level: 70, color: 'bg-purple-500' },
    { name: 'Project Management', level: user?.userType === 'admin' ? 95 : 65, color: 'bg-pink-500' }
  ];

  const achievements = [
    {
      title: 'Project Excellence Award',
      description: 'Recognized for outstanding project delivery',
      date: '2024',
      icon: '🏆',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      title: 'Team Leadership',
      description: 'Successfully led cross-functional team',
      date: '2023',
      icon: '👑',
      color: 'from-purple-400 to-purple-500'
    },
    {
      title: 'Innovation Champion',
      description: 'Introduced new development practices',
      date: '2023',
      icon: '💡',
      color: 'from-blue-400 to-blue-500'
    },
    {
      title: 'Customer Success',
      description: 'Achieved 98% client satisfaction rate',
      date: '2024',
      icon: '⭐',
      color: 'from-green-400 to-green-500'
    }
  ];

  const activityData = [
    { month: 'Jan', commits: 45, tasks: 12 },
    { month: 'Feb', commits: 52, tasks: 15 },
    { month: 'Mar', commits: 38, tasks: 9 },
    { month: 'Apr', commits: 61, tasks: 18 },
    { month: 'May', commits: 49, tasks: 14 },
    { month: 'Jun', commits: 67, tasks: 21 }
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-full">
      {/* Profile Header */}
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden mb-8 animate-fade-in-up">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-32 sm:h-40"></div>
        <div className="relative px-6 sm:px-8 pb-8">
          <div className="sm:flex sm:items-end sm:space-x-8">
            <div className="relative -mt-16 sm:-mt-20">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-xl border-4 border-white overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl font-bold text-white">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 sm:flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{formData.name}</h1>
                  <p className="text-lg text-indigo-600 font-semibold">{formData.role}</p>
                  <p className="text-gray-500 flex items-center mt-1">
                    <span className="mr-2">📍</span>
                    {formData.location}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                  {isEditing && (
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{formData.projects}</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{formData.experience}</div>
                  <div className="text-sm text-gray-500">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up animation-delay-200">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">👤</span>
                </span>
                About Me
              </h3>
            </div>
            <div className="p-6">
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{formData.bio}</p>
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up animation-delay-400">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🚀</span>
                </span>
                Skills & Expertise
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up animation-delay-600">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📊</span>
                </span>
                Activity Overview
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {activityData.map((data, index) => (
                  <div key={data.month} className="text-center group">
                    <div className="relative mb-3">
                      <div className="h-24 flex items-end justify-center">
                        <div 
                          className="w-8 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg transition-all duration-1000 hover:from-purple-500 hover:to-pink-500 group-hover:scale-110"
                          style={{ 
                            height: `${(data.commits / 70) * 100}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{data.month}</div>
                    <div className="text-sm font-bold text-gray-700">{data.commits}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                Monthly contributions and task completions
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up animation-delay-800">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📞</span>
                </span>
                Contact Info
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-400 mr-3">📧</span>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  {isEditing ? (
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-gray-900 bg-transparent border-none outline-none"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.email}</div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-400 mr-3">📱</span>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  {isEditing ? (
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-gray-900 bg-transparent border-none outline-none"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.phone}</div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-400 mr-3">🏢</span>
                <div>
                  <div className="text-sm text-gray-500">Company</div>
                  {isEditing ? (
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="text-gray-900 bg-transparent border-none outline-none"
                    />
                  ) : (
                    <div className="text-gray-900">{formData.company}</div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <span className="text-gray-400 mr-3">📅</span>
                <div>
                  <div className="text-sm text-gray-500">Joined</div>
                  <div className="text-gray-900">{formData.joinDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up animation-delay-1000">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🏆</span>
                </span>
                Achievements
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      <span className="text-white text-lg">{achievement.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 font-medium">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
