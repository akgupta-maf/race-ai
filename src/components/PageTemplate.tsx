import { PageTemplateProps } from '@/types';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  children,
}) => {
  return (
    <>
      <Helmet>
        <title>{title} - RACE.AI</title>
        <meta name='description' content={description} />
      </Helmet>

      {/* Page Header */}
      <section className='hero py-16'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='mb-3 text-4xl font-bold md:text-5xl'>{title}</h1>
            {subtitle && (
              <p className='mx-auto max-w-3xl text-lg text-white'>{subtitle}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-5 grid items-center gap-8 grid-cols-12'>
            <motion.div
              className='w-full col-span-7'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={assetPath(image || '/img/project-1.jpg')}
                alt={title}
                className='h-96 w-full rounded-xl shadow-lg'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = assetPath('/img/project-1.jpg');
                }}
              />
            </motion.div>
            <motion.div
              className='w-full col-span-5'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className='mb-4'>Overview</h2>
              <p className='text-lg text-(--color-typography-secondary)'>
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className='section bg-light'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='section-title'>
              <h2>Key Features</h2>
              <p>Powerful capabilities to drive your success</p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className='w-full'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                    <div>
                      <div className='mb-3'>
                        <i
                          className={`fas ${feature.icon} text-3xl text-(--color-primary)`}
                        ></i>
                      </div>
                      <h5 className='mb-3 text-xl font-semibold text-(--color-primary)'>
                        {feature.title}
                      </h5>
                      <p className='text-(--color-typography-secondary)'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className='section'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='section-title'>
              <h2>Benefits</h2>
              <p>How this solution drives value for your business</p>
            </div>
            <div className='grid gap-6 lg:grid-cols-2'>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className='w-full'
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className='mb-4 flex items-start gap-3'>
                    <div className='shrink-0'>
                      <i className='fas fa-check-circle text-3xl text-(--color-primary)'></i>
                    </div>
                    <div>
                      <h5 className='text-xl font-semibold text-(--color-primary)'>
                        {benefit.title}
                      </h5>
                      <p className='text-(--color-typography-secondary)'>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      {/* CTA */}
      <section
        className='py-16'
        style={{
          background:
            'linear-gradient(135deg, var(--primary) 0%, #0085d6 100%)',
        }}
      >
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-6 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
              <h3 className='text-white mb-3'>Ready to Get Started?</h3>
              <p className='mb-0 text-lg text-white/80'>
                Contact us today to learn how this solution can transform your
                business
              </p>
            </div>
            <div className='lg:text-right'>
              <Link
                to='/contact'
                className='inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-(--color-primary) transition hover:bg-(--color-secondary-20)'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
