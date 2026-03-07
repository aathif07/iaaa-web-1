/**
 * Frontend API Client
 * Communicates with the Express.js backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

interface RequestOptions extends RequestInit {
  headers?: HeadersInit;
}

/**
 * Make an API request
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  const headers = new Headers(options.headers);

  // Add default headers
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  // Add token if available
  const token = localStorage.getItem('admin_token');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include' // Include cookies in requests
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// ============ AUTH API ============

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  const data = await apiRequest<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });

  // Store token
  if (data.token) {
    localStorage.setItem('admin_token', data.token);
  }

  return data;
}

export async function logout(): Promise<void> {
  await apiRequest('/auth/logout', { method: 'POST' });
  localStorage.removeItem('admin_token');
}

export async function getCurrentUser() {
  return apiRequest('/auth/me', { method: 'GET' });
}

// ============ ANNOUNCEMENTS API ============

export interface Announcement {
  _id: string;
  title: string;
  content: string;
  date: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getAnnouncements(published?: boolean): Promise<Announcement[]> {
  const params = new URLSearchParams();
  if (published !== undefined) {
    params.append('published', published.toString());
  }
  return apiRequest(`/announcements?${params}`);
}

export async function getAnnouncement(id: string): Promise<Announcement> {
  return apiRequest(`/announcements/${id}`);
}

export async function createAnnouncement(data: Omit<Announcement, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiRequest('/announcements', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function updateAnnouncement(id: string, data: Partial<Announcement>) {
  return apiRequest(`/announcements/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function deleteAnnouncement(id: string) {
  return apiRequest(`/announcements/${id}`, { method: 'DELETE' });
}

// ============ EVENTS API ============

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  registrationLink?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getEvents(published?: boolean): Promise<Event[]> {
  const params = new URLSearchParams();
  if (published !== undefined) {
    params.append('published', published.toString());
  }
  return apiRequest(`/events?${params}`);
}

export async function getEvent(id: string): Promise<Event> {
  return apiRequest(`/events/${id}`);
}

export async function createEvent(data: Omit<Event, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiRequest('/events', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function updateEvent(id: string, data: Partial<Event>) {
  return apiRequest(`/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function deleteEvent(id: string) {
  return apiRequest(`/events/${id}`, { method: 'DELETE' });
}

// ============ GALLERY API ============

export interface GalleryImage {
  _id: string;
  url: string;
  caption?: string;
  category?: string;
  uploadedAt: string;
  createdAt: string;
  updatedAt: string;
}

export async function getGalleryImages(category?: string): Promise<GalleryImage[]> {
  const params = new URLSearchParams();
  if (category) {
    params.append('category', category);
  }
  return apiRequest(`/gallery?${params}`);
}

export async function getGalleryImage(id: string): Promise<GalleryImage> {
  return apiRequest(`/gallery/${id}`);
}

export async function uploadGalleryImage(data: Omit<GalleryImage, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiRequest('/gallery', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function updateGalleryImage(id: string, data: Partial<GalleryImage>) {
  return apiRequest(`/gallery/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function deleteGalleryImage(id: string) {
  return apiRequest(`/gallery/${id}`, { method: 'DELETE' });
}

// ============ BLOG API ============

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getBlogPosts(published?: boolean): Promise<BlogPost[]> {
  const params = new URLSearchParams();
  if (published !== undefined) {
    params.append('published', published.toString());
  }
  return apiRequest(`/blog?${params}`);
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  return apiRequest(`/blog/${id}`);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  return apiRequest(`/blog/slug/${slug}`);
}

export async function createBlogPost(data: Omit<BlogPost, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiRequest('/blog', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
  return apiRequest(`/blog/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function deleteBlogPost(id: string) {
  return apiRequest(`/blog/${id}`, { method: 'DELETE' });
}

// ============ PROGRAMS API ============

export interface Program {
  _id: string;
  name: string;
  description: string;
  image?: string;
  details?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export async function getPrograms(published?: boolean): Promise<Program[]> {
  const params = new URLSearchParams();
  if (published !== undefined) {
    params.append('published', published.toString());
  }
  return apiRequest(`/programs?${params}`);
}

export async function getProgram(id: string): Promise<Program> {
  return apiRequest(`/programs/${id}`);
}

export async function createProgram(data: Omit<Program, '_id' | 'createdAt' | 'updatedAt'>) {
  return apiRequest('/programs', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function updateProgram(id: string, data: Partial<Program>) {
  return apiRequest(`/programs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

export async function deleteProgram(id: string) {
  return apiRequest(`/programs/${id}`, { method: 'DELETE' });
}

// ============ UTILITIES ============

/**
 * Check if user is logged in
 */
export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('admin_token');
}

/**
 * Get stored token
 */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin_token');
}

/**
 * Clear all stored auth data
 */
export function clearAuth(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_token');
  }
}

export default {
  // Auth
  login,
  logout,
  getCurrentUser,

  // Announcements
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,

  // Events
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,

  // Gallery
  getGalleryImages,
  getGalleryImage,
  uploadGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,

  // Blog
  getBlogPosts,
  getBlogPost,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,

  // Programs
  getPrograms,
  getProgram,
  createProgram,
  updateProgram,
  deleteProgram,

  // Utilities
  isLoggedIn,
  getToken,
  clearAuth
};
