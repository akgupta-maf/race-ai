import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ServiceCategory } from '@/types';

const Services: React.FC = () => {
  const services: ServiceCategory[] = [
    {
      category: 'Business Insights',
      icon: 'fa-chart-line',
      image: '/img/service-1.jpg',
      items: [
        { name: 'Insight Analysis', link: '/insights/analysis' },
        { name: 'Boycott Analysis', link: '/insights/boycott' }
      ]
    },
    {
      category: 'Customer Value Management',
      icon: 'fa-users',
      image: '/img/service-2.jpg',
      items: [
        { name: 'Customer Segmentation', link: '/customer/segmentation' },
        { name: 'Customer 360 Dashboard', link: '/customer/360' },
        { name: 'Campaign Dashboard', link: '/customer/campaign' }
      ]
    },
    {
      category: 'Negotiation Analytics',
      icon: 'fa-handshake',
      image: '/img/service-3.jpg',
      items: [
        { name: 'Supplier Negotiation', link: '/negotiation/supplier' },
        { name: 'Negotiation Gap Analysis', link: '/negotiation/gap' },
        { name: 'Commodity Analysis', link: '/negotiation/commodity' }
      ]
    },
    {
      category: 'Category Optimization',
      icon: 'fa-th-large',
      image: '/img/service-4.jpg',
      items: [
        { name: 'Category Roles', link: '/category/roles' },
        { name: 'Localization', link: '/category/localization' },
        { name: 'Rationalization', link: '/category/rationalization' },
        { name: 'Customer Decision Tree', link: '/category/decision-tree' }
      ]
    },
    {
      category: 'Pricing & Promotion',
      icon: 'fa-percent',
      image: '/img/service-5.jpg',
      items: [
        { name: 'Promotion Effectiveness', link: '/promotion' }
      ]
    },
    {
      category: 'Sustainability',
      icon: 'fa-leaf',
      image: '/img/service-6.jpg',
      items: [
        { name: 'Sustainability Analytics', link: '/sustainability' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Expertise - RACE.AI</title>
        <meta name="description" content="Explore our comprehensive retail analytics solutions" />
      </Helmet>

      {/* Page Header */}
      <section className="hero py-5">
        <div className="container">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="display-4 fw-bold mb-3">Our Expertise</h1>
            <p className="lead">Comprehensive Analytics Solutions for Every Retail Need</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card h-100">
                  <img 
                    src={service.image} 
                    className="card-img-top" 
                    alt={service.category}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/img/project-1.jpg';
                    }}
                  />
                  <div className="card-body">
                    <div className="mb-3">
                      <i className={`fas ${service.icon} fa-2x text-primary`}></i>
                    </div>
                    <h4 className="card-title mb-3">{service.category}</h4>
                    <ul className="list-unstyled">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <Link 
                            to={item.link} 
                            className="text-decoration-none text-secondary hover-primary"
                          >
                            <i className="fas fa-angle-right text-primary me-2"></i>
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
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Services</h2>
            <p>What sets our analytics solutions apart</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-brain fa-3x text-primary mb-3"></i>
                  <h5>AI-Powered</h5>
                  <p className="text-secondary small">Advanced machine learning algorithms</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-bolt fa-3x text-primary mb-3"></i>
                  <h5>Real-Time</h5>
                  <p className="text-secondary small">Instant insights when you need them</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-cogs fa-3x text-primary mb-3"></i>
                  <h5>Customizable</h5>
                  <p className="text-secondary small">Tailored to your specific needs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card text-center h-100">
                <div className="card-body">
                  <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h5>Secure</h5>
                  <p className="text-secondary small">Enterprise-grade security standards</p>
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
