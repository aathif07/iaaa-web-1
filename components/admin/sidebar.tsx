'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Megaphone,
  Calendar,
  Image,
  BookOpen,
  GraduationCap,
  Settings,
  LogOut,
} from 'lucide-react';
import { logout } from '@/lib/api';
import { useRouter } from 'next/navigation';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Megaphone, label: 'Announcements', href: '/admin/announcements' },
  { icon: Calendar, label: 'Events', href: '/admin/events' },
  { icon: Image, label: 'Gallery', href: '/admin/gallery' },
  { icon: BookOpen, label: 'Blog', href: '/admin/blog' },
  { icon: GraduationCap, label: 'Programs', href: '/admin/programs' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-500 to-blue-400 text-white shadow-lg flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-blue-500">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-700 font-bold">
            A
          </div>
          <span>IAAA CMS</span>
        </h2>
        <p className="text-xs text-blue-100 mt-1">Admin Panel</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white text-blue-500 font-semibold shadow-md'
                  : 'text-blue-100 hover:bg-blue-500 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-500">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-blue-100 hover:bg-red-600 hover:text-white transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
