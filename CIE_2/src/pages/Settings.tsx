import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* General Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">General Settings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage your account preferences and settings.
              </p>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <button
                  type="button"
                  className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Push Notifications</h4>
                  <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
                </div>
                <button
                  type="button"
                  className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  role="switch"
                  aria-checked="false"
                >
                  <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Weekly Reports</h4>
                  <p className="text-sm text-gray-500">Get weekly summary reports</p>
                </div>
                <button
                  type="button"
                  className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Privacy & Security</h3>
              <p className="mt-1 text-sm text-gray-500">
                Control your privacy and security preferences.
              </p>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Profile Visibility</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      <span className="font-medium">Public</span> - Anyone can see your profile
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visibility"
                      value="team"
                      defaultChecked
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      <span className="font-medium">Team Only</span> - Only team members can see your profile
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      <span className="font-medium">Private</span> - Only you can see your profile
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="bg-red-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Appearance</h3>
              <p className="mt-1 text-sm text-gray-500">
                Customize how the application looks and feels.
              </p>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Theme</h4>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input type="radio" name="theme" value="light" defaultChecked className="sr-only" />
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors duration-200">
                      <div className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"></div>
                      <span className="text-sm font-medium text-gray-900">Light</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="theme" value="dark" className="sr-only" />
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors duration-200">
                      <div className="w-full h-16 bg-gray-800 border border-gray-600 rounded-md mb-2"></div>
                      <span className="text-sm font-medium text-gray-900">Dark</span>
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="theme" value="auto" className="sr-only" />
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors duration-200">
                      <div className="w-full h-16 bg-gradient-to-r from-white to-gray-800 border border-gray-300 rounded-md mb-2"></div>
                      <span className="text-sm font-medium text-gray-900">Auto</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Only Settings */}
          {user?.userType === 'admin' && (
            <div className="bg-white shadow rounded-lg border-l-4 border-purple-500">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <span className="mr-2">👑</span>
                  Administrator Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Advanced settings available only to administrators.
                </p>
              </div>
              <div className="px-6 py-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">System Notifications</h4>
                    <p className="text-sm text-gray-500">Receive system alerts and maintenance notifications</p>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    role="switch"
                    aria-checked="true"
                  >
                    <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">User Activity Monitoring</h4>
                    <p className="text-sm text-gray-500">Monitor user activity and generate reports</p>
                  </div>
                  <button
                    type="button"
                    className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    role="switch"
                    aria-checked="true"
                  >
                    <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button className="bg-purple-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200">
                      System Backup
                    </button>
                    <button className="bg-gray-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
