import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FeatureCard, Stat } from '@/types';
import './Home.css';

const Home: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: 'fa-chart-line',
      title: 'Business Insights',
      description: 'Advanced analytics to drive data-driven decisions and boost business performance',
      link: '/insights/analysis'
    },
    {
      icon: 'fa-users',
      title: 'Customer Analytics',
      description: 'Deep customer segmentation and 360-degree view for better engagement',
      link: '/customer/segmentation'
    },
    {
      icon: 'fa-handshake',
      title: 'Negotiation Analytics',
      description: 'Optimize supplier negotiations with data-backed insights',
      link: '/negotiation/supplier'
    },
    {
      icon: 'fa-tags',
      title: 'Category Optimization',
      description: 'Maximize category performance with intelligent optimization',
      link: '/category/roles'
    },
    {
      icon: 'fa-percent',
      title: 'Pricing & Promotion',
      description: 'Measure and improve promotion effectiveness for better ROI',
      link: '/promotion'
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainability',
      description: 'Track and enhance sustainability metrics across operations',
      link: '/sustainability'
    }
  ];

  const stats: Stat[] = [
    { number: '50+', label: 'Analytics Solutions' },
    { number: '100K+', label: 'Data Points Analyzed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>RACE.AI - Retail Analytics Center Of Excellence</title>
        <meta name="description" content="Leading retail analytics platform providing AI-driven insights for business growth" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-4 fw-bold text-white mb-4">
                Transform Your Retail Business with <span className="text-warning">AI-Powered Analytics</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                RACE.AI delivers cutting-edge analytics solutions that empower retail businesses 
                to make smarter decisions, optimize operations, and drive sustainable growth.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/services" className="btn btn-light btn-lg px-4">
                  Explore Solutions <i className="fas fa-arrow-right ms-2"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                  Get Started
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="col-lg-6 mt-5 mt-lg-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/img/hero_image1.jpg" 
                alt="Analytics Dashboard" 
                className="img-fluid rounded shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-card text-center p-4">
                  <h2 className="display-4 fw-bold text-primary mb-2">{stat.number}</h2>
                  <p className="text-secondary mb-0 fs-5">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Solutions</h2>
            <p>Comprehensive analytics solutions designed to address every aspect of retail excellence</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link} className="text-decoration-none">
                  <div className="feature-card card h-100">
                    <div className="card-body text-center">
                      <div className="feature-icon mb-4">
                        <i className={`fas ${feature.icon} fa-3x text-primary`}></i>
                      </div>
                      <h4 className="card-title mb-3">{feature.title}</h4>
                      <p className="card-text text-secondary">{feature.description}</p>
                      <span className="text-primary fw-bold">
                        Learn More <i className="fas fa-arrow-right ms-2"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/img/about_us1.jpg" 
                alt="Why Choose RACE.AI" 
                className="img-fluid rounded shadow"
              />
            </motion.div>
            <motion.div 
              className="col-lg-6 mt-5 mt-lg-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">Why Choose RACE.AI?</h2>
              <div className="why-choose-list">
                <div className="why-item mb-4">
                  <div className="d-flex">
                    <div className="icon-box me-3">
                      <i className="fas fa-check-circle text-primary fa-2x"></i>
                    </div>
                    <div>
                      <h5>Advanced AI Technology</h5>
                      <p className="text-secondary">Leveraging cutting-edge AI and machine learning for accurate insights</p>
                    </div>
                  </div>
                </div>
                <div className="why-item mb-4">
                  <div className="d-flex">
                    <div className="icon-box me-3">
                      <i className="fas fa-check-circle text-primary fa-2x"></i>
                    </div>
                    <div>
                      <h5>Industry Expertise</h5>
                      <p className="text-secondary">Deep understanding of retail operations and challenges</p>
                    </div>
                  </div>
                </div>
                <div className="why-item mb-4">
                  <div className="d-flex">
                    <div className="icon-box me-3">
                      <i className="fas fa-check-circle text-primary fa-2x"></i>
                    </div>
                    <div>
                      <h5>Actionable Insights</h5>
                      <p className="text-secondary">Transform data into clear, actionable business strategies</p>
                    </div>
                  </div>
                </div>
                <div className="why-item">
                  <div className="d-flex">
                    <div className="icon-box me-3">
                      <i className="fas fa-check-circle text-primary fa-2x"></i>
                    </div>
                    <div>
                      <h5>Proven Results</h5>
                      <p className="text-secondary">Track record of driving measurable business improvements</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary mt-4">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5" style={{background: 'linear-gradient(135deg, var(--primary) 0%, #0085d6 100%)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-3">Ready to Transform Your Retail Analytics?</h2>
              <p className="text-white-50 mb-0 fs-5">
                Join leading retailers who trust RACE.AI for their analytics needs
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
