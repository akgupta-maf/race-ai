import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Value {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const values: Value[] = [
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'Pioneering new approaches to retail analytics',
    },
    {
      icon: 'fa-users',
      title: 'Collaboration',
      description: 'Working together to achieve excellence',
    },
    {
      icon: 'fa-chart-line',
      title: 'Excellence',
      description: 'Delivering the highest quality solutions',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Integrity',
      description: 'Operating with transparency and trust',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - RACE.AI</title>
        <meta
          name='description'
          content='Learn about RACE.AI and our mission to revolutionize retail analytics'
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
              About RACE.AI
            </h1>
            <p className='mx-auto max-w-3xl text-lg text-white/90'>
              Empowering Retail Excellence Through Analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-5 grid items-center gap-8 lg:grid-cols-2'>
            <div>
              <img
                src={assetPath('/img/about_us.webp')}
                alt='About RACE.AI'
                className='w-full rounded-xl shadow-lg'
              />
            </div>
            <div>
              <h2 className='mb-4'>
                Transforming Retail with Data-Driven Insights
              </h2>
              <p className='mb-3 text-(--color-typography-secondary)'>
                RACE.AI (Retail Analytics Center Of Excellence) is a
                cutting-edge analytics platform dedicated to revolutionizing the
                retail industry through advanced data science and artificial
                intelligence.
              </p>
              <p className='mb-3 text-(--color-typography-secondary)'>
                Our mission is to empower retail businesses with actionable
                insights that drive growth, optimize operations, and enhance
                customer experiences. We combine deep industry expertise with
                state-of-the-art technology to deliver solutions that make a
                real difference.
              </p>
              <p className='text-(--color-typography-secondary)'>
                From customer analytics to supply chain optimization, we provide
                comprehensive solutions that address every aspect of retail
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className='w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                  <div className='mb-4'>
                    <i
                      className={`fas ${value.icon} text-5xl text-(--color-primary)`}
                    ></i>
                  </div>
                  <h4 className='mb-3'>{value.title}</h4>
                  <p className='text-(--color-typography-secondary)'>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-8 lg:grid-cols-2'>
            <div className='order-1 lg:order-2'>
              <img
                src={assetPath('/img/about_us1.webp')}
                alt='Our Approach'
                className='w-full rounded-xl shadow-lg max-h-150'
              />
            </div>
            <div className='order-2 lg:order-1'>
              <h2 className='mb-4'>Our Approach</h2>
              <div className='approach-list'>
                <div className='approach-item mb-4'>
                  <h5 className='text-(--color-primary)'>
                    <i className='fas fa-check-circle mr-2'></i>Data-Driven
                    Decision Making
                  </h5>
                  <p className='ml-6 text-(--color-typography-secondary)'>
                    We leverage advanced analytics to turn raw data into
                    actionable business intelligence
                  </p>
                </div>
                <div className='approach-item mb-4'>
                  <h5 className='text-(--color-primary)'>
                    <i className='fas fa-check-circle mr-2'></i>Customer-Centric
                    Solutions
                  </h5>
                  <p className='ml-6 text-(--color-typography-secondary)'>
                    Every solution is tailored to meet specific business needs
                    and challenges
                  </p>
                </div>
                <div className='approach-item mb-4'>
                  <h5 className='text-(--color-primary)'>
                    <i className='fas fa-check-circle mr-2'></i>Continuous
                    Innovation
                  </h5>
                  <p className='ml-6 text-(--color-typography-secondary)'>
                    We stay ahead of industry trends with cutting-edge
                    technology and methodologies
                  </p>
                </div>
                <div className='approach-item'>
                  <h5 className='text-(--color-primary)'>
                    <i className='fas fa-check-circle mr-2'></i>Measurable
                    Results
                  </h5>
                  <p className='ml-6 text-(--color-typography-secondary)'>
                    Focus on delivering tangible business outcomes and ROI
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

export default About;
