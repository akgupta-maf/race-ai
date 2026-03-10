import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container footer-container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span>© 2026 RACE.AI. All rights reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span>Powered by MAF Carrefour</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
