import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const Analytics: React.FC = () => {
  const chartData = [
    { month: 'Jan', users: 12, projects: 8, tasks: 45 },
    { month: 'Feb', users: 19, projects: 12, tasks: 67 },
    { month: 'Mar', users: 25, projects: 15, tasks: 89 },
    { month: 'Apr', users: 32, projects: 18, tasks: 102 },
    { month: 'May', users: 38, projects: 22, tasks: 134 },
    { month: 'Jun', users: 42, projects: 25, tasks: 156 },
  ];

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">System performance and user analytics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden shadow rounded-lg text-white">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-3xl opacity-80">📈</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-blue-100 truncate">Total Revenue</dt>
                    <dd className="text-2xl font-bold">$24,567</dd>
                    <dd className="text-xs text-blue-200">+12.5% from last month</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 overflow-hidden shadow rounded-lg text-white">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-3xl opacity-80">👤</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-green-100 truncate">Active Users</dt>
                    <dd className="text-2xl font-bold">1,234</dd>
                    <dd className="text-xs text-green-200">+8.2% from last week</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 overflow-hidden shadow rounded-lg text-white">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-3xl opacity-80">📊</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-purple-100 truncate">Conversion Rate</dt>
                    <dd className="text-2xl font-bold">3.24%</dd>
                    <dd className="text-xs text-purple-200">+0.5% from last month</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden shadow rounded-lg text-white">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-3xl opacity-80">⚡</div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-orange-100 truncate">System Uptime</dt>
                    <dd className="text-2xl font-bold">99.9%</dd>
                    <dd className="text-xs text-orange-200">Last 30 days</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
            <div className="space-y-4">
              {chartData.map((item) => (
                <div key={item.month} className="flex items-center">
                  <div className="w-12 text-sm text-gray-600 font-medium">{item.month}</div>
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-700"
                        style={{ width: `${(item.users / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 ml-4 text-sm text-gray-900 font-semibold text-right">
                    {item.users}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Statistics */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Project Statistics</h3>
            <div className="space-y-4">
              {chartData.map((item) => (
                <div key={item.month} className="flex items-center">
                  <div className="w-12 text-sm text-gray-600 font-medium">{item.month}</div>
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-700"
                        style={{ width: `${(item.projects / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 ml-4 text-sm text-gray-900 font-semibold text-right">
                    {item.projects}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-6 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">System Activities</h3>
          </div>
          <div className="px-6 py-4">
            <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></div>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">✓</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">System Backup</span> completed successfully
                      </div>
                      <div className="mt-1 text-xs text-gray-400">2 hours ago</div>
                    </div>
                  </div>
                </li>
                
                <li className="relative pb-8">
                  <div className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></div>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">👤</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">New user registration</span> - john@example.com
                      </div>
                      <div className="mt-1 text-xs text-gray-400">4 hours ago</div>
                    </div>
                  </div>
                </li>

                <li className="relative pb-8">
                  <div className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></div>
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">⚠</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">High CPU usage</span> detected on server-01
                      </div>
                      <div className="mt-1 text-xs text-gray-400">6 hours ago</div>
                    </div>
                  </div>
                </li>

                <li className="relative">
                  <div className="relative flex items-start space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">🔧</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">Database maintenance</span> scheduled for tonight
                      </div>
                      <div className="mt-1 text-xs text-gray-400">8 hours ago</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Server Performance</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">CPU Usage</span>
                  <span className="font-semibold text-gray-900">23%</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Memory Usage</span>
                  <span className="font-semibold text-gray-900">67%</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Disk Usage</span>
                  <span className="font-semibold text-gray-900">45%</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Direct</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">60%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Social Media</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">25%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Search Engines</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-4">Top Pages</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 truncate">/dashboard</span>
                <span className="text-sm font-semibold text-gray-900">2,341</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 truncate">/profile</span>
                <span className="text-sm font-semibold text-gray-900">1,892</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 truncate">/settings</span>
                <span className="text-sm font-semibold text-gray-900">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 truncate">/users</span>
                <span className="text-sm font-semibold text-gray-900">987</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Analytics;
