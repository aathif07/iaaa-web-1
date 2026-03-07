/**
 * IAAA Admin Credentials
 * Default credentials for development
 * 
 * ⚠️ IMPORTANT: Change these credentials in production!
 */

export const DEFAULT_ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
  email: 'admin@iaaa.org',
  role: 'admin'
};

/**
 * Save credentials to localStorage
 */
export function saveCredentials() {
  const credsKey = 'iaaa_admin_credentials';
  localStorage.setItem(credsKey, JSON.stringify(DEFAULT_ADMIN_CREDENTIALS));
}

/**
 * Get credentials from localStorage
 */
export function getCredentials() {
  const credsKey = 'iaaa_admin_credentials';
  const stored = localStorage.getItem(credsKey);
  return stored ? JSON.parse(stored) : DEFAULT_ADMIN_CREDENTIALS;
}

/**
 * Clear credentials from localStorage
 */
export function clearCredentials() {
  const credsKey = 'iaaa_admin_credentials';
  localStorage.removeItem(credsKey);
}
