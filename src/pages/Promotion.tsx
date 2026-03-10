import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Benefit, Feature } from '@/types';

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
    <div className="mb-14 text-center">
      <h2 className="mb-3 text-3xl font-bold text-[var(--color-primary)] md:text-4xl">{title}</h2>
      <p className="mx-auto max-w-3xl text-base leading-7 text-[var(--color-typography-secondary)]">{description}</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Pricing & Promotion Effectiveness | RACE.AI</title>
        <meta name="description" content="Optimize promotional strategy with data-driven insights" />
      </Helmet>

      <main>
        <section
          className="py-24 text-white md:py-28"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-80) 55%, var(--color-secondary) 100%)'
          }}
        >
          <div className="container max-w-[1240px]">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">Pricing & Promotion Effectiveness</h1>
              <p className="mx-auto mb-7 max-w-3xl text-lg leading-8 text-white/85">
                Optimize promotion planning and pricing intelligence with a single, data-driven workflow designed
                for enterprise retail teams.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  className="rounded-xl border border-white bg-white px-6 py-3 text-base font-semibold text-[var(--color-primary)] shadow-sm transition hover:bg-[var(--color-secondary-20)]"
                  onClick={handlePromotionPlanningClick}
                >
                  Explore Promotion Planning
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-white/50 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  onClick={handlePriceOptimizationClick}
                >
                  View Optimization Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container max-w-[1240px]">
            <div className="row align-items-center g-5">
              <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/img/project-8.jpg"
                  alt="Pricing and Promotion Analytics"
                  className="max-h-[420px] w-full rounded-xl object-cover shadow-[0_12px_30px_rgba(49,37,28,0.12)]"
                />
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
                <p className="max-w-xl text-base leading-8 text-[var(--color-typography)]">
                  From campaign design to post-promotion analysis, teams can align pricing, promotional depth,
                  and customer response in one integrated analytics framework.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface-bg)] py-20 md:py-24">
          <div className="container max-w-[1240px]">
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
                  <article className="flex h-full flex-col gap-3 rounded-xl border border-[var(--color-primary-20)] bg-white p-7 shadow-[0_6px_16px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_26px_rgba(15,23,42,0.12)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary-20)] text-xl text-[var(--color-primary)]">
                      <i className={`fas ${feature.icon}`}></i>
                    </div>
                    <h3 className="m-0 text-lg font-bold text-[var(--color-primary)]">{feature.title}</h3>
                    <p className="m-0 leading-7 text-[var(--color-typography-secondary)]">{feature.description}</p>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container max-w-[1240px]">
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
                  <div className="flex items-start gap-3 px-1 py-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-success-20)] text-xs text-[var(--color-success)]"
                      aria-hidden="true"
                    >
                      <i className="fas fa-check"></i>
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-[var(--color-primary)]">{benefit.title}</h4>
                      <p className="m-0 leading-7 text-[var(--color-typography-secondary)]">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-20 md:py-24"
          style={{ background: 'linear-gradient(180deg, #fff 0%, var(--color-secondary-20) 100%)' }}
        >
          <div className="container max-w-[1240px]">
            <SectionHeader
              title="Launch Pricing Tools Instantly"
              description="Jump directly into your planning and optimization dashboards from one place."
            />
            <div className="row g-4">
              <div className="col-lg-6">
                <article className="flex h-full flex-col rounded-xl border border-[var(--color-primary-20)] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary-20)] text-xl text-[var(--color-primary)]">
                      <i className="fas fa-chart-pie"></i>
                    </div>
                    <span className="rounded-full bg-[var(--color-primary-20)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-80)]">
                      Planning
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">Promotion Planning Dashboard</h3>
                  <p className="mb-6 leading-7 text-[var(--color-typography-secondary)]">
                    Design, schedule, and monitor promotional events with complete campaign visibility.
                  </p>
                  <button
                    type="button"
                    className="mt-auto w-fit rounded-lg bg-[var(--color-primary)] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-80)]"
                    onClick={handlePromotionPlanningClick}
                  >
                    Open Dashboard
                  </button>
                </article>
              </div>

              <div className="col-lg-6">
                <article className="flex h-full flex-col rounded-xl border border-[var(--color-primary-20)] bg-white p-8 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-secondary-20)] text-xl text-[var(--color-secondary)]">
                      <i className="fas fa-tag"></i>
                    </div>
                    <span className="rounded-full bg-[var(--color-primary-20)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-80)]">
                      Optimization
                    </span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[var(--color-primary)]">Price Optimization Dashboard</h3>
                  <p className="mb-6 leading-7 text-[var(--color-typography-secondary)]">
                    Analyze KVI pricing behavior and optimize strategy with advanced pricing insights.
                  </p>
                  <button
                    type="button"
                    className="mt-auto w-fit rounded-lg bg-[var(--color-primary)] px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-80)]"
                    onClick={handlePriceOptimizationClick}
                  >
                    Open Dashboard
                  </button>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 md:py-24"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-burgundy) 100%)' }}
        >
          <div className="container max-w-[1240px]">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-3 text-4xl font-bold text-white">Ready to Get Started?</h3>
              <p className="mb-6 text-lg text-white/85">
                Contact us today to learn how Promotion Optimization can accelerate your retail performance.
              </p>
              <Link
                to="/contact"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-base font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary-20)]"
              >
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
