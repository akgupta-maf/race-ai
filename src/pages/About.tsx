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
      <section className='hero py-5'>
        <div className='container'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='display-4 fw-bold mb-3'>About RACE.AI</h1>
            <p className='lead'>
              Empowering Retail Excellence Through Analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className='section'>
        <div className='container'>
          <div className='row align-items-center mb-5'>
            <div className='col-lg-6'>
              <img
                src={assetPath('/img/about_us.jpg')}
                alt='About RACE.AI'
                className='img-fluid rounded shadow'
              />
            </div>
            <div className='col-lg-6 mt-4 mt-lg-0'>
              <h2 className='mb-4'>
                Transforming Retail with Data-Driven Insights
              </h2>
              <p className='text-secondary mb-3'>
                RACE.AI (Retail Analytics Center Of Excellence) is a
                cutting-edge analytics platform dedicated to revolutionizing the
                retail industry through advanced data science and artificial
                intelligence.
              </p>
              <p className='text-secondary mb-3'>
                Our mission is to empower retail businesses with actionable
                insights that drive growth, optimize operations, and enhance
                customer experiences. We combine deep industry expertise with
                state-of-the-art technology to deliver solutions that make a
                real difference.
              </p>
              <p className='text-secondary'>
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
        <div className='container'>
          <div className='section-title'>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className='row g-4'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className='col-lg-3 col-md-6'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='card text-center h-100'>
                  <div className='card-body'>
                    <div className='mb-4'>
                      <i className={`fas ${value.icon} fa-3x text-primary`}></i>
                    </div>
                    <h4 className='mb-3'>{value.title}</h4>
                    <p className='text-secondary'>{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className='section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 order-lg-2'>
              <img
                src={assetPath('/img/expertise.jpg')}
                alt='Our Approach'
                className='img-fluid rounded shadow'
              />
            </div>
            <div className='col-lg-6 order-lg-1 mt-4 mt-lg-0'>
              <h2 className='mb-4'>Our Approach</h2>
              <div className='approach-list'>
                <div className='approach-item mb-4'>
                  <h5 className='text-primary'>
                    <i className='fas fa-check-circle me-2'></i>Data-Driven
                    Decision Making
                  </h5>
                  <p className='text-secondary ms-4'>
                    We leverage advanced analytics to turn raw data into
                    actionable business intelligence
                  </p>
                </div>
                <div className='approach-item mb-4'>
                  <h5 className='text-primary'>
                    <i className='fas fa-check-circle me-2'></i>Customer-Centric
                    Solutions
                  </h5>
                  <p className='text-secondary ms-4'>
                    Every solution is tailored to meet specific business needs
                    and challenges
                  </p>
                </div>
                <div className='approach-item mb-4'>
                  <h5 className='text-primary'>
                    <i className='fas fa-check-circle me-2'></i>Continuous
                    Innovation
                  </h5>
                  <p className='text-secondary ms-4'>
                    We stay ahead of industry trends with cutting-edge
                    technology and methodologies
                  </p>
                </div>
                <div className='approach-item'>
                  <h5 className='text-primary'>
                    <i className='fas fa-check-circle me-2'></i>Measurable
                    Results
                  </h5>
                  <p className='text-secondary ms-4'>
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
