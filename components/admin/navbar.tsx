'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Bell, Settings, LogOut, LogIn } from 'lucide-react';
import { getCurrentUser, logout } from '@/lib/api';
import { Button } from '@/components/ui/button';

interface UserInfo {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export default function AdminNavbar() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogin = () => {
    router.push('/admin/login');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Left Side - Title */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">IAAA Admin Dashboard</h1>
          <p className="text-xs text-gray-500">Manage your website content</p>
        </div>

        {/* Right Side - User Info & Actions */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Settings size={20} />
          </button>

          {/* User Profile / Login Button */}
          {loading ? (
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
              
              {/* User Info */}
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user.username}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-500 text-white flex items-center gap-2"
            >
              <LogIn size={18} />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
