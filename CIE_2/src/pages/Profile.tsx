import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the user profile
    console.log('Updating profile:', formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
            <p className="mt-1 text-sm text-gray-500">
              Update your account information and preferences.
            </p>
          </div>

          <div className="px-6 py-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="bg-indigo-500 rounded-full h-20 w-20 flex items-center justify-center">
                <span className="text-white font-medium text-2xl">
                  {user?.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{user?.name}</h4>
                <p className="text-gray-600">{user?.email}</p>
                <div className="mt-1">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user?.userType === 'admin' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {user?.userType === 'admin' ? '👑 Administrator' : '👤 User'}
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`shadow-sm block w-full sm:text-sm border-gray-300 rounded-md ${
                        isEditing 
                          ? 'focus:ring-indigo-500 focus:border-indigo-500' 
                          : 'bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`shadow-sm block w-full sm:text-sm border-gray-300 rounded-md ${
                        isEditing 
                          ? 'focus:ring-indigo-500 focus:border-indigo-500' 
                          : 'bg-gray-50 text-gray-500 cursor-not-allowed'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Type
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={user?.userType === 'admin' ? 'Administrator' : 'Regular User'}
                      disabled
                      className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Member Since
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      value={new Date(user?.createdAt || '').toLocaleDateString()}
                      disabled
                      className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Save Changes
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="mt-6 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Activity Summary</h3>
          </div>
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl">📈</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Projects Completed</p>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Tasks Done</p>
                    <p className="text-2xl font-bold text-green-600">48</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl">⭐</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Achievement Points</p>
                    <p className="text-2xl font-bold text-purple-600">320</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
