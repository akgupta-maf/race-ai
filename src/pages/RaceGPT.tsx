import { Feature } from '@/types';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const RaceGPT: React.FC = () => {
  const features: Feature[] = [
    {
      icon: 'fa-robot',
      title: 'AI-Powered Assistant',
      description: 'Get instant answers to your retail analytics questions',
    },
    {
      icon: 'fa-chart-line',
      title: 'Data Analysis',
      description: 'Analyze your data with natural language queries',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Smart Insights',
      description: 'Receive intelligent insights and recommendations',
    },
    {
      icon: 'fa-comments',
      title: 'Natural Conversation',
      description: 'Interact naturally, just like talking to an expert',
    },
    {
      icon: 'fa-file-alt',
      title: 'Report Generation',
      description: 'Generate reports and summaries automatically',
    },
    {
      icon: 'fa-clock',
      title: '24/7 Availability',
      description: 'Access analytics support anytime, anywhere',
    },
  ];

  return (
    <>
      <Helmet>
        <title>RACE GPT - AI-Powered Analytics Assistant</title>
        <meta
          name='description'
          content='Your intelligent retail analytics assistant powered by AI'
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
            <div className='mb-4'>
              <i className='fas fa-robot fa-4x'></i>
            </div>
            <h1 className='display-4 fw-bold mb-3'>RACE GPT</h1>
            <p className='lead'>Your AI-Powered Retail Analytics Assistant</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section'>
        <div className='container'>
          <div className='row align-items-center mb-5'>
            <motion.div
              className='col-lg-6'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={assetPath('/img/race_logo.png')}
                alt='RACE GPT'
                className='img-fluid rounded shadow'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = assetPath('/img/project-1.jpg');
                }}
              />
            </motion.div>
            <motion.div
              className='col-lg-6 mt-4 mt-lg-0'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className='mb-4'>Meet Your Analytics Assistant</h2>
              <p className='text-secondary fs-5'>
                RACE GPT is an advanced AI assistant specifically designed for
                retail analytics. It understands your business context and helps
                you extract insights from your data using simple, natural
                language queries.
              </p>
              <p className='text-secondary'>
                Whether you need quick insights, detailed analysis, or help
                understanding complex data patterns, RACE GPT is here to help
                24/7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='section bg-light'>
        <div className='container'>
          <div className='section-title'>
            <h2>Capabilities</h2>
            <p>What RACE GPT can do for you</p>
          </div>
          <div className='row g-4'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className='col-lg-4 col-md-6'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='card h-100'>
                  <div className='card-body text-center'>
                    <div className='mb-3'>
                      <i
                        className={`fas ${feature.icon} fa-3x text-primary`}
                      ></i>
                    </div>
                    <h5 className='card-title mb-3'>{feature.title}</h5>
                    <p className='card-text text-secondary'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className='section'>
        <div className='container'>
          <div className='section-title'>
            <h2>How to Use RACE GPT</h2>
            <p>Example queries you can ask</p>
          </div>
          <div className='row g-4'>
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='text-primary mb-3'>
                    <i className='fas fa-question-circle me-2'></i>Sample
                    Questions
                  </h5>
                  <ul className='list-unstyled'>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right text-secondary me-2'></i>
                      "What were our top-selling products last month?"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right text-secondary me-2'></i>
                      "Show me customer segments with highest value"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right text-secondary me-2'></i>
                      "Analyze promotion effectiveness for Category A"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right text-secondary me-2'></i>
                      "Which stores have declining sales trends?"
                    </li>
                    <li>
                      <i className='fas fa-angle-right text-secondary me-2'></i>
                      "Generate a summary report for Q4 performance"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='text-primary mb-3'>
                    <i className='fas fa-magic me-2'></i>Smart Features
                  </h5>
                  <ul className='list-unstyled'>
                    <li className='mb-2'>
                      <i className='fas fa-check text-success me-2'></i>
                      Understands industry terminology
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check text-success me-2'></i>
                      Provides context-aware responses
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check text-success me-2'></i>
                      Suggests follow-up analyses
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check text-success me-2'></i>
                      Creates visualizations on demand
                    </li>
                    <li>
                      <i className='fas fa-check text-success me-2'></i>
                      Learns from your preferences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className='py-5'
        style={{
          background:
            'linear-gradient(135deg, var(--primary) 0%, #0085d6 100%)',
        }}
      >
        <div className='container'>
          <div className='text-center'>
            <h2 className='text-white mb-3'>Try RACE GPT Today</h2>
            <p className='text-white-50 mb-4 fs-5'>
              Experience the future of retail analytics
            </p>
            <a href='/contact' className='btn btn-light btn-lg px-5'>
              Get Access
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RaceGPT;
