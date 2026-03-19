import { Feature } from '@/types';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
      <section className='hero py-16'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='mb-4'>
              <i className='fas fa-robot text-6xl'></i>
            </div>
            <h1 className='mb-3 text-4xl font-bold md:text-5xl'>RACE GPT</h1>
            <p className='text-lg text-white/90'>
              Your AI-Powered Retail Analytics Assistant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-5 grid items-center gap-8 lg:grid-cols-2'>
            <motion.div
              className='w-full'
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={assetPath('/img/race_logo.png')}
                alt='RACE GPT'
                className='w-full rounded-xl shadow-lg'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = assetPath('/img/project-1.jpg');
                }}
              />
            </motion.div>
            <motion.div
              className='w-full'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className='mb-4'>Meet Your Analytics Assistant</h2>
              <p className='text-lg text-(--color-typography-secondary)'>
                RACE GPT is an advanced AI assistant specifically designed for
                retail analytics. It understands your business context and helps
                you extract insights from your data using simple, natural
                language queries.
              </p>
              <p className='text-(--color-typography-secondary)'>
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
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Capabilities</h2>
            <p>What RACE GPT can do for you</p>
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
                <div className='h-full rounded-xl border border-(--color-primary-20) bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                  <div>
                    <div className='mb-3'>
                      <i
                        className={`fas ${feature.icon} text-5xl text-(--color-primary)`}
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

      {/* Use Cases */}
      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>How to Use RACE GPT</h2>
            <p>Example queries you can ask</p>
          </div>
          <div className='grid gap-6 lg:grid-cols-2'>
            <div>
              <div className='rounded-xl border border-(--color-primary-20) bg-white p-6 shadow-sm'>
                <div>
                  <h5 className='mb-3 text-xl font-semibold text-(--color-primary)'>
                    <i className='fas fa-question-circle mr-2'></i>Sample
                    Questions
                  </h5>
                  <ul className='list-none space-y-2 pl-0'>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right mr-2 text-(--color-typography-secondary)'></i>
                      "What were our top-selling products last month?"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right mr-2 text-(--color-typography-secondary)'></i>
                      "Show me customer segments with highest value"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right mr-2 text-(--color-typography-secondary)'></i>
                      "Analyze promotion effectiveness for Category A"
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-angle-right mr-2 text-(--color-typography-secondary)'></i>
                      "Which stores have declining sales trends?"
                    </li>
                    <li>
                      <i className='fas fa-angle-right mr-2 text-(--color-typography-secondary)'></i>
                      "Generate a summary report for Q4 performance"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='rounded-xl border border-(--color-primary-20) bg-white p-6 shadow-sm'>
                <div>
                  <h5 className='mb-3 text-xl font-semibold text-(--color-primary)'>
                    <i className='fas fa-magic mr-2'></i>Smart Features
                  </h5>
                  <ul className='list-none space-y-2 pl-0'>
                    <li className='mb-2'>
                      <i className='fas fa-check mr-2 text-(--color-success)'></i>
                      Understands industry terminology
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check mr-2 text-(--color-success)'></i>
                      Provides context-aware responses
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check mr-2 text-(--color-success)'></i>
                      Suggests follow-up analyses
                    </li>
                    <li className='mb-2'>
                      <i className='fas fa-check mr-2 text-(--color-success)'></i>
                      Creates visualizations on demand
                    </li>
                    <li>
                      <i className='fas fa-check mr-2 text-(--color-success)'></i>
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
        className='py-16'
        style={{
          background:
            'linear-gradient(135deg, var(--primary) 0%, #0085d6 100%)',
        }}
      >
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-white mb-3'>Try RACE GPT Today</h2>
            <p className='mb-4 text-lg text-white/80'>
              Experience the future of retail analytics
            </p>
            <Link
              to='/contact'
              className='inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-(--color-primary) transition hover:bg-(--color-secondary-20)'
            >
              Get Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RaceGPT;
