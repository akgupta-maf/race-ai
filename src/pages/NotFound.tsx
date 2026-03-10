import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - RACE.AI</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5">
              <h1 className="display-1 fw-bold text-primary">404</h1>
              <h2 className="mb-3">Page Not Found</h2>
              <p className="text-secondary mb-4 fs-5">
                Oops! The page you're looking for doesn't exist.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="fas fa-home me-2"></i>
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
