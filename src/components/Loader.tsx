import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <i className="fa fa-laptop-code fa-2x text-primary loader-icon"></i>
      </div>
    </div>
  );
};

export default Loader;
