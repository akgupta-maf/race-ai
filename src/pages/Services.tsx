import { ServiceCategory } from '@/types';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services: ServiceCategory[] = [
    {
      category: 'Business Insights',
      icon: 'fa-chart-line',
      image: '/img/service-1.jpg',
      items: [
        { name: 'Insight Analysis', link: '/insights/analysis' },
        { name: 'Boycott Analysis', link: '/insights/boycott' },
      ],
    },
    {
      category: 'Customer Value Management',
      icon: 'fa-users',
      image: '/img/service-2.jpg',
      items: [
        { name: 'Customer Segmentation', link: '/customer/segmentation' },
        { name: 'Customer 360 Dashboard', link: '/customer/360' },
        { name: 'Campaign Dashboard', link: '/customer/campaign' },
      ],
    },
    {
      category: 'Negotiation Analytics',
      icon: 'fa-handshake',
      image: '/img/service-3.jpg',
      items: [
        { name: 'Supplier Negotiation', link: '/negotiation/supplier' },
        { name: 'Negotiation Gap Analysis', link: '/negotiation/gap' },
        { name: 'Commodity Analysis', link: '/negotiation/commodity' },
      ],
    },
    {
      category: 'Assortment Optimization',
      icon: 'fa-th-large',
      image: '/img/service-4.jpg',
      items: [
        {
          name: 'Assortment Optimization',
          link: '/category/assortment-optimization',
        },
      ],
    },
    {
      category: 'Pricing & Promotion',
      icon: 'fa-percent',
      image: '/img/service-5.jpg',
      items: [{ name: 'Promotion Effectiveness', link: '/promotion' }],
    },
    {
      category: 'Sustainability',
      icon: 'fa-leaf',
      image: '/img/service-6.jpg',
      items: [{ name: 'Sustainability Analytics', link: '/sustainability' }],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Expertise - RACE.AI</title>
        <meta
          name='description'
          content='Explore our comprehensive retail analytics solutions'
        />
      </Helmet>

      {/* Page Header */}
      <section className='hero py-16'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='mb-3 text-4xl font-bold md:text-5xl'>
              Our Expertise
            </h1>
            <p className='mx-auto max-w-3xl text-lg text-white'>
              Comprehensive Analytics Solutions for Every Retail Need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className='w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='h-full overflow-hidden rounded-xl border border-(--color-primary-20) bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                  <img
                    src={assetPath(service.image)}
                    className='h-56 w-full object-cover'
                    alt={service.category}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = assetPath('/img/project-1.jpg');
                    }}
                  />
                  <div className='p-6'>
                    <div className='mb-3'>
                      <i
                        className={`fas ${service.icon} text-3xl text-(--color-primary)`}
                      ></i>
                    </div>
                    <h4 className='mb-3 text-xl font-semibold text-(--color-primary)'>
                      {service.category}
                    </h4>
                    <ul className='list-none space-y-2 pl-0'>
                      {service.items.map((item, idx) => (
                        <li key={idx} className='mb-2'>
                          <Link
                            to={item.link}
                            className='text-(--color-typography-secondary) transition hover:text-(--color-primary)'
                          >
                            <i className='fas fa-angle-right mr-2 text-(--color-primary)'></i>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Why Choose Our Services</h2>
            <p>What sets our analytics solutions apart</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm'>
                <div>
                  <i className='fas fa-brain mb-3 text-5xl text-(--color-primary)'></i>
                  <h5>AI-Powered</h5>
                  <p className='text-sm text-(--color-typography-secondary)'>
                    Advanced machine learning algorithms
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm'>
                <div>
                  <i className='fas fa-bolt mb-3 text-5xl text-(--color-primary)'></i>
                  <h5>Real-Time</h5>
                  <p className='text-sm text-(--color-typography-secondary)'>
                    Instant insights when you need them
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm'>
                <div>
                  <i className='fas fa-cogs mb-3 text-5xl text-(--color-primary)'></i>
                  <h5>Customizable</h5>
                  <p className='text-sm text-(--color-typography-secondary)'>
                    Tailored to your specific needs
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm'>
                <div>
                  <i className='fas fa-shield-alt mb-3 text-5xl text-(--color-primary)'></i>
                  <h5>Secure</h5>
                  <p className='text-sm text-(--color-typography-secondary)'>
                    Enterprise-grade security standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
