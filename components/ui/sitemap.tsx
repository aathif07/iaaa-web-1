'use client';

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Clubs & Hubs', href: '/clubs' },
  ],
  programs: [
    { name: 'PTDC', href: '/ptdc', description: 'Professional Training & Development Center' },
    { name: 'Startup Forum', href: '/startup-forum', description: 'IASF - Innovation Pipeline' },
    { name: 'Membership', href: '/membership', description: 'Join IAAA' },
  ],
  resources: [
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Leadership', href: '/leadership' },
  ],
  org: [
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Accreditations', href: '/accreditations' },
    { name: 'Contact', href: '/contact' },
  ],
};

export const allPages = [
  { path: '/', title: 'Home', description: 'Institute of Aeronautics, Astronautics and Aviation' },
  { path: '/about', title: 'About IAAA', description: 'Learn about our mission and vision' },
  { path: '/leadership', title: 'Leadership', description: 'Meet our leadership team' },
  { path: '/membership', title: 'Membership', description: 'Become a member' },
  { path: '/clubs', title: 'Clubs & Hubs', description: 'Join our clubs and communities' },
  { path: '/ptdc', title: 'PTDC Programs', description: 'Professional training and development' },
  { path: '/startup-forum', title: 'Startup Forum', description: 'Innovation and entrepreneurship' },
  { path: '/events', title: 'Events', description: 'Upcoming and past events' },
  { path: '/gallery', title: 'Gallery', description: 'Photo gallery and media' },
  { path: '/announcements', title: 'Announcements', description: 'Latest news and updates' },
  { path: '/contact', title: 'Contact', description: 'Get in touch with us' },
  { path: '/collaborations', title: 'Collaborations', description: 'Our partnerships' },
  { path: '/accreditations', title: 'Accreditations', description: 'Certifications and awards' },
];
