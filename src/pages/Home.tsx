import { FeatureCard, Stat } from '@/types';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

interface Metric extends Stat {
  icon: string;
  value: number;
  suffix?: string;
}

interface PlatformCapability {
  title: string;
  description: string;
}

const MetricCard: React.FC<{ metric: Metric; delay: number }> = ({
  metric,
  delay,
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!started) {
      return;
    }

    const duration = 1200;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number): void => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(metric.value * eased));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [started, metric.value]);

  return (
    <motion.div
      className='col-xl-3 col-md-6'
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      onViewportEnter={() => setStarted(true)}
    >
      <article className='home-metric-card h-100'>
        <span className='home-metric-icon' aria-hidden='true'>
          <i className={`fas ${metric.icon}`}></i>
        </span>
        <h3>
          {current}
          {metric.suffix || ''}
        </h3>
        <p>{metric.label}</p>
      </article>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: 'fa-chart-line',
      title: 'Business Insights',
      description:
        'Advanced analytics to drive data-driven decisions and boost business performance',
      link: '/insights/analysis',
    },
    {
      icon: 'fa-users',
      title: 'Customer Analytics',
      description:
        'Deep customer segmentation and 360-degree view for better engagement',
      link: '/customer/segmentation',
    },
    {
      icon: 'fa-handshake',
      title: 'Negotiation Analytics',
      description: 'Optimize supplier negotiations with data-backed insights',
      link: '/negotiation/supplier',
    },
    {
      icon: 'fa-tags',
      title: 'Category Optimization',
      description:
        'Maximize category performance with intelligent optimization',
      link: '/category/roles',
    },
    {
      icon: 'fa-percent',
      title: 'Pricing & Promotion',
      description: 'Measure and improve promotion effectiveness for better ROI',
      link: '/promotion',
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainability',
      description: 'Track and enhance sustainability metrics across operations',
      link: '/sustainability',
    },
  ];

  const stats: Metric[] = [
    {
      number: '50+',
      value: 50,
      suffix: '+',
      icon: 'fa-layer-group',
      label: 'Analytics Solutions',
    },
    {
      number: '100K+',
      value: 100,
      suffix: 'K+',
      icon: 'fa-database',
      label: 'Data Points Processed',
    },
    {
      number: '95%',
      value: 95,
      suffix: '%',
      icon: 'fa-chart-line',
      label: 'Client Satisfaction',
    },
    {
      number: '24/7',
      value: 24,
      suffix: '/7',
      icon: 'fa-headset',
      label: 'Enterprise Support',
    },
  ];

  const capabilities: PlatformCapability[] = [
    {
      title: 'Promotion Optimization',
      description: 'Model promotion uplift and margin impact before launch.',
    },
    {
      title: 'Price Elasticity Analysis',
      description: 'Measure demand sensitivity and optimize pricing decisions.',
    },
    {
      title: 'Supplier Negotiation Intelligence',
      description:
        'Identify negotiation gaps and opportunities with live data.',
    },
    {
      title: 'Customer Segmentation',
      description:
        'Build actionable segments based on behavior and value signals.',
    },
    {
      title: 'Category Performance Analytics',
      description:
        'Track assortment, role, and productivity across categories.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>RACE.AI - Retail Analytics Center Of Excellence</title>
        <meta
          name='description'
          content='Leading retail analytics platform providing AI-driven insights for business growth'
        />
      </Helmet>

      <section className='home-hero'>
        <div className='container'>
          <div className='row align-items-center g-4'>
            <motion.div
              className='col-lg-6'
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='home-hero-badge'>
                Retail Intelligence Platform
              </div>
              <h1>
                Transform Your Retail Business with{' '}
                <span>AI-Powered Analytics</span>
              </h1>
              <p>
                RACE.AI helps enterprise retail teams optimize pricing,
                promotions, and category strategy using production-grade
                analytics and explainable AI insights.
              </p>
              <div className='home-hero-actions'>
                <Link to='/services' className='btn home-btn-primary btn-lg'>
                  Explore Solutions
                </Link>
                <Link to='/race-gpt' className='btn home-btn-secondary btn-lg'>
                  View Platform
                </Link>
              </div>
            </motion.div>

            <motion.div
              className='col-lg-6'
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='home-hero-visual'>
                <img
                  src={assetPath('/img/hero_image1.jpg')}
                  alt='RACE AI analytics platform dashboard'
                  className='img-fluid'
                />
                <div className='home-float-chip chip-one'>
                  <i className='fas fa-chart-bar'></i> Live Performance
                </div>
                <div className='home-float-chip chip-two'>
                  <i className='fas fa-bolt'></i> AI Recommendations
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='home-metrics section'>
        <div className='container'>
          <div className='row g-4'>
            {stats.map((metric, index) => (
              <MetricCard
                key={metric.label}
                metric={metric}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='section home-solutions'>
        <div className='container'>
          <div className='section-title home-section-title'>
            <h2>Our Core Solutions</h2>
            <p>
              Comprehensive analytics solutions designed to address every aspect
              of retail excellence
            </p>
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
                <Link to={feature.link} className='text-decoration-none'>
                  <article className='home-solution-card h-100'>
                    <div className='home-solution-icon'>
                      <i
                        className={`fas ${feature.icon}`}
                        aria-hidden='true'
                      ></i>
                    </div>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <span className='home-inline-cta'>
                        Learn More <i className='fas fa-arrow-right ms-2'></i>
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='section home-platform'>
        <div className='container'>
          <div className='section-title home-section-title'>
            <h2>Retail Intelligence Platform</h2>
            <p>
              Built for enterprise teams that need fast, reliable, and
              actionable decision intelligence.
            </p>
          </div>
          <div className='row g-4'>
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className='col-lg col-md-6'
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <article className='home-capability-card h-100'>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='section home-why'>
        <div className='container'>
          <div className='row align-items-center g-5'>
            <motion.div
              className='col-lg-6'
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={assetPath('/img/about_us1.jpg')}
                alt='RACE AI product platform view'
                className='home-why-image img-fluid'
              />
            </motion.div>
            <motion.div
              className='col-lg-6'
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className='section-title home-section-title text-start'>
                <h2>Why Choose RACE.AI</h2>
                <p>
                  Enterprise-grade product design and retail domain intelligence
                  built into every workflow.
                </p>
              </div>

              <div className='home-why-list'>
                {[
                  'Advanced AI Technology',
                  'Industry Expertise',
                  'Actionable Insights',
                  'Proven Results',
                ].map((item) => (
                  <div className='home-why-item' key={item}>
                    <span className='home-why-icon' aria-hidden='true'>
                      <i className='fas fa-check'></i>
                    </span>
                    <div>
                      <h4>{item}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <Link to='/about' className='btn home-btn-primary mt-4'>
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='home-cta'>
        <div className='container'>
          <div className='home-cta-content'>
            <h2>Ready to Transform Your Retail Analytics?</h2>
            <p>
              Join leading retailers using RACE.AI to optimize pricing,
              promotions, and operations.
            </p>
            <div className='home-cta-actions'>
              <Link to='/contact' className='btn btn-light btn-lg'>
                Contact Us
              </Link>
              <Link to='/contact' className='btn btn-outline-light btn-lg'>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
