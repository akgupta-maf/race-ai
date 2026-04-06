import { useAuth } from '@/contexts/AuthContext';
import { assetPath } from '@/utils/assetPath';
import React from 'react';

const PerformanceTrackingHeader: React.FC = () => {
  const { userEmail, userName } = useAuth();

  return (
    <div className='flex items-center justify-between border-b border-black/10 bg-(--color-primary) px-6 py-4 shadow-[0_8px_22px_rgba(15,23,42,0.18)]'>
      <a
        href={import.meta.env.BASE_URL}
        className='flex min-w-0 items-center gap-3 text-white'
      >
        <span className='flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white shadow-sm'>
          <img
            src={assetPath('/img/logo_carr2.png')}
            alt='RACE.AI Logo'
            className='h-9 w-auto'
          />
        </span>
        <span className='flex min-w-0 flex-col leading-none'>
          <span className='text-[1.2rem] font-extrabold tracking-tight'>
            RACE.AI
          </span>
          <span className='mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55'>
            Retail Intelligence
          </span>
        </span>
      </a>

      <div className='flex items-center gap-3 text-right'>
        <div className='flex flex-col'>
          <span className='text-sm font-semibold text-white'>
            {userName || 'User'}
          </span>
          <span className='text-xs text-white/70'>{userEmail}</span>
        </div>
        <div className='flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/12'>
          <span className='text-sm font-semibold text-white'>
            {userName?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrackingHeader;
