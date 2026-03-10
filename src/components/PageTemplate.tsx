import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageTemplateProps } from '@/types';

const PageTemplate: React.FC<PageTemplateProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  features, 
  benefits,
  children
}) => {
  return (
    <>
      <Helmet>
        <title>{title} - RACE.AI</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Page Header */}
      <section className="hero py-5">
        <div className="container">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="display-5 fw-bold mb-3">{title}</h1>
            {subtitle && <p className="lead">{subtitle}</p>}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img 
                src={image || '/img/project-1.jpg'} 
                alt={title} 
                className="img-fluid rounded shadow"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/img/project-1.jpg';
                }}
              />
            </motion.div>
            <motion.div 
              className="col-lg-6 mt-4 mt-lg-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="mb-4">Overview</h2>
              <p className="text-secondary fs-5">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-title">
              <h2>Key Features</h2>
              <p>Powerful capabilities to drive your success</p>
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
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="mb-3">
                        <i className={`fas ${feature.icon} fa-2x text-primary`}></i>
                      </div>
                      <h5 className="card-title mb-3">{feature.title}</h5>
                      <p className="card-text text-secondary">{feature.description}</p>
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
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h2>Benefits</h2>
              <p>How this solution drives value for your business</p>
            </div>
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="col-lg-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <i className="fas fa-check-circle fa-2x text-primary"></i>
                    </div>
                    <div className="ms-3">
                      <h5>{benefit.title}</h5>
                      <p className="text-secondary">{benefit.description}</p>
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
      <section className="py-5" style={{background: 'linear-gradient(135deg, var(--primary) 0%, #0085d6 100%)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="text-white mb-3">Ready to Get Started?</h3>
              <p className="text-white-50 mb-0 fs-5">
                Contact us today to learn how this solution can transform your business
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a href="/contact" className="btn btn-light btn-lg px-4">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
