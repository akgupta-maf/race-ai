import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Benefit, Feature } from '@/types';
import './Promotion.css';

const Promotion: React.FC = () => {
  const handlePromotionPlanningClick = (): void => {
    window.location.href = 'https://pnp.retailsso.com/promotions/dashboards/main';
  };

  const handlePriceOptimizationClick = (): void => {
    window.location.href = 'https://pnp.mafcarrefour.local/pricing/dashboard/pricing-kvi';
  };

  const features: Feature[] = [
    {
      icon: 'fa-percent',
      title: 'Promotion Planning',
      description: 'Plan and schedule promotions for maximum impact'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Effectiveness Measurement',
      description: 'Measure ROI and effectiveness of each promotion'
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Price Optimization',
      description: 'Optimize pricing strategies for promotions'
    },
    {
      icon: 'fa-users',
      title: 'Customer Response',
      description: 'Analyze customer response to different promotions'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Recommendation Engine',
      description: 'Get AI-powered promotion recommendations'
    },
    {
      icon: 'fa-history',
      title: 'Historical Analysis',
      description: 'Learn from past promotion performance'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Higher ROI',
      description: 'Maximize return on promotional investments'
    },
    {
      title: 'Better Targeting',
      description: 'Target the right customers with the right offers'
    },
    {
      title: 'Reduced Cannibalization',
      description: 'Minimize negative impacts on regular sales'
    },
    {
      title: 'Improved Planning',
      description: 'Make data-driven promotion planning decisions'
    }
  ];

  const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="section-title promo-section-title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Pricing & Promotion Effectiveness | RACE.AI</title>
        <meta name="description" content="Optimize promotional strategy with data-driven insights" />
      </Helmet>

      <main className="promotion-page">
        <section className="promo-hero">
          <div className="container">
            <motion.div
              className="promo-hero-content"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>Pricing & Promotion Effectiveness</h1>
              <p>
                Optimize promotion planning and pricing intelligence with a single, data-driven workflow designed
                for enterprise retail teams.
              </p>
              <div className="promo-hero-actions">
                <button type="button" className="btn btn-light btn-lg" onClick={handlePromotionPlanningClick}>
                  Explore Promotion Planning
                </button>
                <button type="button" className="btn btn-outline-light btn-lg" onClick={handlePriceOptimizationClick}>
                  View Optimization Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section promo-overview">
          <div className="container">
            <div className="row align-items-center g-5">
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src="/img/project-8.jpg" alt="Pricing and Promotion Analytics" className="promo-overview-image" />
              </motion.div>
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="Overview"
                  description="Our Pricing & Promotion Effectiveness solution helps you plan, execute, and measure campaigns for higher ROI and stronger pricing decisions across categories."
                />
                <p className="promo-overview-text">
                  From campaign design to post-promotion analysis, teams can align pricing, promotional depth,
                  and customer response in one integrated analytics framework.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section promo-features">
          <div className="container">
            <SectionHeader
              title="Key Features"
              description="Powerful capabilities for promotion optimization and pricing intelligence"
            />
            <div className="row g-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="col-lg-4 col-md-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <article className="promo-feature-card h-100">
                    <div className="promo-feature-icon">
                      <i className={`fas ${feature.icon}`}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section promo-benefits">
          <div className="container">
            <SectionHeader
              title="Benefits"
              description="How this solution creates measurable business impact"
            />
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="col-lg-6"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="promo-benefit-item">
                    <span className="promo-benefit-check" aria-hidden="true">
                      <i className="fas fa-check"></i>
                    </span>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section promo-tools">
          <div className="container">
            <SectionHeader
              title="Launch Pricing Tools Instantly"
              description="Jump directly into your planning and optimization dashboards from one place."
            />
            <div className="row g-4">
              <div className="col-lg-6">
                <article className="promo-tool-card h-100">
                  <div className="promo-tool-head">
                    <div className="promo-tool-icon">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                    <span className="promo-tool-tag">Planning</span>
                  </div>
                  <h3>Promotion Planning Dashboard</h3>
                  <p>Design, schedule, and monitor promotional events with complete campaign visibility.</p>
                  <button type="button" className="btn promo-btn-primary" onClick={handlePromotionPlanningClick}>
                    Open Dashboard
                  </button>
                </article>
              </div>

              <div className="col-lg-6">
                <article className="promo-tool-card h-100">
                  <div className="promo-tool-head">
                    <div className="promo-tool-icon promo-tool-icon-secondary">
                      <i className="fas fa-tag"></i>
                    </div>
                    <span className="promo-tool-tag">Optimization</span>
                  </div>
                  <h3>Price Optimization Dashboard</h3>
                  <p>Analyze KVI pricing behavior and optimize strategy with advanced pricing insights.</p>
                  <button type="button" className="btn promo-btn-primary" onClick={handlePriceOptimizationClick}>
                    Open Dashboard
                  </button>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-cta">
          <div className="container">
            <div className="promo-cta-content">
              <h3>Ready to Get Started?</h3>
              <p>Contact us today to learn how Promotion Optimization can accelerate your retail performance.</p>
              <Link to="/contact" className="btn btn-light btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Promotion;
