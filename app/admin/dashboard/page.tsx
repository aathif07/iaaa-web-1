'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getAnnouncements,
  getEvents,
  getPrograms,
  getGalleryImages,
  getBlogPosts,
} from '@/lib/api';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Megaphone,
  Calendar,
  Image,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

interface Stats {
  announcements: number;
  events: number;
  programs: number;
  gallery: number;
  blog: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    announcements: 0,
    events: 0,
    programs: 0,
    gallery: 0,
    blog: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [announcements, events, programs, gallery, blog] = await Promise.all([
          getAnnouncements(),
          getEvents(),
          getPrograms(),
          getGalleryImages(),
          getBlogPosts(),
        ]);

        setStats({
          announcements: announcements.length,
          events: events.length,
          programs: programs.length,
          gallery: gallery.length,
          blog: blog.length,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load stats');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const modules = [
    {
      icon: Megaphone,
      label: 'Announcements',
      count: stats.announcements,
      href: '/admin/announcements',
      color: 'from-blue-500 to-blue-500',
      description: 'Manage news and updates',
    },
    {
      icon: Calendar,
      label: 'Events',
      count: stats.events,
      href: '/admin/events',
      color: 'from-purple-500 to-purple-600',
      description: 'Manage events and dates',
    },
    {
      icon: Image,
      label: 'Gallery',
      count: stats.gallery,
      href: '/admin/gallery',
      color: 'from-pink-500 to-pink-600',
      description: 'Manage photos',
    },
    {
      icon: BookOpen,
      label: 'Blog',
      count: stats.blog,
      href: '/admin/blog',
      color: 'from-orange-500 to-orange-600',
      description: 'Manage articles',
    },
    {
      icon: GraduationCap,
      label: 'Programs',
      count: stats.programs,
      href: '/admin/programs',
      color: 'from-green-500 to-green-600',
      description: 'Manage programs',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to IAAA Admin Panel. Manage all your content here.</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Link key={module.href} href={module.href}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-0 overflow-hidden">
                <div className={`bg-gradient-to-br ${module.color} h-24 flex items-center justify-center text-white`}>
                  <Icon size={40} />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{module.count}</h3>
                  <p className="text-sm text-gray-600 mb-2">{module.label}</p>
                  <p className="text-xs text-gray-500">{module.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Links */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {modules.map((module) => (
              <Link key={module.href} href={module.href}>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                  <span className="text-sm text-gray-700">{module.label}</span>
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
              </Link>
            ))}
          </div>
        </Card>

        {/* Welcome Card */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Welcome to your IAAA Content Management System. Use the sidebar to navigate between different
              content sections.
            </p>
            <p>
              • <strong>Announcements:</strong> Create and manage news updates
            </p>
            <p>
              • <strong>Events:</strong> Schedule and manage upcoming events
            </p>
            <p>
              • <strong>Gallery:</strong> Upload and organize photos
            </p>
            <p>
              • <strong>Blog:</strong> Write and publish articles
            </p>
            <p>
              • <strong>Programs:</strong> Manage educational programs
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
