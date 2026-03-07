'use client';

import React from 'react';

interface Stat {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: number;
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[Math.min(columns, 4) as keyof typeof gridCols] || 'md:grid-cols-4';

  return (
    <div className={`grid ${gridCols} gap-6 md:gap-8`}>
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center">
          {stat.icon && <div className="flex justify-center mb-4 text-blue-500">{stat.icon}</div>}
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {stat.value}
            {stat.unit && <span className="text-xl ml-1">{stat.unit}</span>}
          </div>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
