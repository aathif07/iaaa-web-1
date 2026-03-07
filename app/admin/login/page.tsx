'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { saveCredentials, DEFAULT_ADMIN_CREDENTIALS } from '@/lib/credentials';

export default function LoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [credentialsSaved, setCredentialsSaved] = useState(false);
  const router = useRouter();

  // Save credentials to localStorage on mount
  useEffect(() => {
    try {
      saveCredentials();
      setCredentialsSaved(true);
      console.log('✓ Credentials saved to localStorage');
    } catch (err) {
      console.error('Failed to save credentials:', err);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await login(username, password);
      
      // Also save successful login credentials
      saveCredentials();
      
      console.log('✓ Login successful');
      console.log('✓ Token saved to localStorage');
      
      // Redirect to dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              IAAA Admin
            </h1>
            <p className="text-gray-600 mt-2">Content Management System</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Credentials Saved Status */}
          {credentialsSaved && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              ✓ Credentials saved to browser storage
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                disabled={loading}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loading}
                required
              />
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Demo Credentials Section */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Demo Credentials:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">
                  <strong>Username:</strong> {DEFAULT_ADMIN_CREDENTIALS.username}
                </span>
                <button
                  type="button"
                  onClick={() => setUsername(DEFAULT_ADMIN_CREDENTIALS.username)}
                  className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded hover:bg-blue-200"
                >
                  Use
                </button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">
                  <strong>Password:</strong> {DEFAULT_ADMIN_CREDENTIALS.password}
                </span>
                <button
                  type="button"
                  onClick={() => setPassword(DEFAULT_ADMIN_CREDENTIALS.password)}
                  className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded hover:bg-blue-200"
                >
                  Use
                </button>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> {DEFAULT_ADMIN_CREDENTIALS.email}
                </p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-700">
            <strong>⚠️ Development Only:</strong> Credentials are stored in localStorage. Change these in production!
          </div>
        </div>
      </div>
    </div>
  );
}
