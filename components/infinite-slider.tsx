'use client';
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const animationName = reverse ? 'scrollReverse' : 'scroll';
  
  const styles: CSSProperties = {
    '--animation-duration': `${duration}s`,
    '--animation-duration-hover': `${durationOnHover || duration}s`,
    '--gap': `${gap}px`,
  } as CSSProperties & { [key: string]: string };

  return (
    <div className={cn('overflow-hidden', className)}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - var(--gap))); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(calc(-50% - var(--gap))); }
          100% { transform: translateX(0); }
        }
        @keyframes scrollVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - var(--gap))); }
        }
        @keyframes scrollVerticalReverse {
          0% { transform: translateY(calc(-50% - var(--gap))); }
          100% { transform: translateY(0); }
        }
        .infinite-slider-content {
          animation: ${direction === 'horizontal' ? animationName : reverse ? 'scrollVerticalReverse' : 'scrollVertical'} var(--animation-duration) linear infinite;
        }
        .infinite-slider-content:hover {
          animation-duration: var(--animation-duration-hover);
        }
      `}</style>
      <div
        className='infinite-slider-content flex w-max'
        style={{
          ...styles,
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
