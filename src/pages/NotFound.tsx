import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - RACE.AI</title>
      </Helmet>

      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='mb-5'>
              <h1 className='text-8xl font-bold text-(--color-primary) md:text-9xl'>
                404
              </h1>
              <h2 className='mb-3'>Page Not Found</h2>
              <p className='mb-4 text-lg text-(--color-typography-secondary)'>
                Oops! The page you're looking for doesn't exist.
              </p>
              <Link
                to='/'
                className='inline-flex items-center rounded-xl bg-(--color-primary) px-6 py-3 font-semibold text-white transition hover:bg-(--color-primary-80)'
              >
                <i className='fas fa-home mr-2'></i>
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
