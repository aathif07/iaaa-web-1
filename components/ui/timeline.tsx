'use client';

import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  layout?: 'vertical' | 'horizontal';
}

export function Timeline({ items, layout = 'vertical' }: TimelineProps) {
  if (layout === 'horizontal') {
    return (
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex-shrink-0 w-64">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon && <div className="text-blue-500">{item.icon}</div>}
                  <span className="text-sm font-bold text-blue-500 uppercase tracking-wide">{item.year}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {item.icon || idx + 1}
            </div>
            {idx !== items.length - 1 && <div className="w-1 h-16 bg-blue-200 mt-2" />}
          </div>
          <div className="pt-2 pb-8">
            <span className="text-sm font-bold text-blue-500 uppercase tracking-wide">{item.year}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
