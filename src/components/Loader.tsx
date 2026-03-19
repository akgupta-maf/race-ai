import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className='loader-wrapper'>
      <div className='loader-content'>
        <div
          className='h-10 w-10 animate-spin rounded-full border-4 border-(--color-primary-20) border-t-(--color-primary)'
          role='status'
          aria-label='Loading'
        >
          <span className='sr-only'>Loading...</span>
        </div>
        <i className='fa fa-laptop-code text-3xl text-(--color-primary) loader-icon'></i>
      </div>
    </div>
  );
};

export default Loader;
