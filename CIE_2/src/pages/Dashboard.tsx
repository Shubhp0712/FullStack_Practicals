import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    teamMembers: 0
  });

  const finalStats = {
    projects: 12,
    tasks: 24,
    completed: 48,
    teamMembers: user?.userType === 'admin' ? 8 : 3
  };

  // Animate stats on component mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        projects: Math.round(finalStats.projects * easeOut),
        tasks: Math.round(finalStats.tasks * easeOut),
        completed: Math.round(finalStats.completed * easeOut),
        teamMembers: Math.round(finalStats.teamMembers * easeOut)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(finalStats);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [finalStats.projects, finalStats.tasks, finalStats.completed, finalStats.teamMembers]);

  const stats = [
    {
      name: 'Total Projects',
      value: animatedStats.projects,
      change: '+4.75%',
      changeType: 'positive' as const,
      icon: '📁',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500'
    },
    {
      name: 'Active Tasks',
      value: animatedStats.tasks,
      change: '+54.02%',
      changeType: 'positive' as const,
      icon: '✅',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500'
    },
    {
      name: 'Completed',
      value: animatedStats.completed,
      change: '+12.39%',
      changeType: 'positive' as const,
      icon: '🎯',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-500'
    },
    {
      name: 'Team Members',
      value: animatedStats.teamMembers,
      change: '+10.18%',
      changeType: 'positive' as const,
      icon: '👥',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500'
    },
  ];

  const recentActivities = [
    { 
      id: 1, 
      action: 'Completed project review', 
      time: '2 hours ago', 
      type: 'success',
      icon: '✓',
      user: 'John Doe'
    },
    { 
      id: 2, 
      action: 'Updated user profile', 
      time: '4 hours ago', 
      type: 'info',
      icon: '👤',
      user: 'Jane Smith'
    },
    { 
      id: 3, 
      action: 'Created new task', 
      time: '6 hours ago', 
      type: 'warning',
      icon: '📝',
      user: 'Mike Johnson'
    },
    { 
      id: 4, 
      action: 'Joined team meeting', 
      time: '1 day ago', 
      type: 'info',
      icon: '📞',
      user: 'Sarah Wilson'
    },
    { 
      id: 5, 
      action: 'Submitted weekly report', 
      time: '2 days ago', 
      type: 'success',
      icon: '📊',
      user: 'Alex Brown'
    },
  ];

  const quickActions = [
    {
      title: 'New Project',
      description: 'Create a new project',
      icon: '➕',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      title: 'Add Task',
      description: 'Create a new task',
      icon: '📋',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      title: 'View Reports',
      description: 'Check analytics',
      icon: '📊',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      title: 'Settings',
      description: 'Manage preferences',
      icon: '⚙️',
      color: 'from-gray-500 to-gray-600',
      hoverColor: 'hover:from-gray-600 hover:to-gray-700'
    }
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-full">
      {/* Welcome Section */}
      <div className="mb-8 animate-fade-in-up">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  Welcome back, {user?.name}! 👋
                </h1>
                <p className="text-indigo-100 text-lg">
                  {user?.userType === 'admin' ? 'Administrator Dashboard' : 'User Dashboard'}
                </p>
                <p className="text-indigo-200 text-sm mt-1">
                  Here's what's happening with your projects today.
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item, index) => (
          <div 
            key={item.name} 
            className={`relative bg-white p-6 shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>
                </div>
                <div className={`flex items-baseline text-sm font-semibold ${
                  item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.changeType === 'positive' ? (
                    <svg className="self-center flex-shrink-0 h-4 w-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="self-center flex-shrink-0 h-4 w-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {item.change}
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm font-medium text-gray-500">{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Enhanced Quick Actions */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden animate-fade-in-up animation-delay-400">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">⚡</span>
              </span>
              Quick Actions
            </h3>
            <p className="text-gray-500 text-sm mt-1">Frequently used actions for faster workflow</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  className={`group relative p-4 border-2 border-dashed border-gray-200 rounded-xl hover:border-transparent transition-all duration-300 text-center overflow-hidden bg-gradient-to-br ${action.color} ${action.hoverColor} hover:text-white hover:shadow-lg hover:scale-105`}
                >
                  <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {action.title}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-white/80 transition-colors duration-300 mt-1">
                      {action.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Recent Activity */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden animate-fade-in-up animation-delay-600">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">📈</span>
              </span>
              Recent Activity
            </h3>
            <p className="text-gray-500 text-sm mt-1">Latest updates from your team</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${
                    activity.type === 'success' ? 'bg-green-100 text-green-600' :
                    activity.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  } group-hover:scale-110 transition-transform duration-200`}>
                    <span className="text-sm font-semibold">{activity.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                      {activity.action}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{activity.user}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Section */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden animate-fade-in-up animation-delay-800">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white text-sm">📊</span>
            </span>
            Progress Overview
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Projects Completed', value: 85, color: 'bg-green-500' },
              { label: 'Tasks in Progress', value: 60, color: 'bg-blue-500' },
              { label: 'Goals Achieved', value: 92, color: 'bg-purple-500' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      strokeWidth="3"
                      strokeDasharray={`${item.value}, 100`}
                      className={`${item.color.replace('bg-', 'stroke-')} transition-all duration-1000`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-700">{item.value}%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
