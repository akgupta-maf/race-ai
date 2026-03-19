import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='border-t border-(--color-primary-20) bg-white'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-(--color-typography-secondary) sm:px-6 md:flex-row lg:px-8'>
        <div className='text-center md:text-left'>
          <span>© 2026 RACE.AI. All rights reserved.</span>
        </div>
        <div className='text-center md:text-right'>
          <span>Powered by MAF Carrefour</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
