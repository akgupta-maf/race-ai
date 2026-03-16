import { assetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Promotion.css";

/* ─── data ─────────────────────────────────────────────── */
const features = [
  {
    icon: "fa-percent",
    title: "Promotion Planning",
    description: "Plan and schedule promotions for maximum impact.",
  },
  {
    icon: "fa-chart-bar",
    title: "Effectiveness Measurement",
    description: "Measure ROI and effectiveness of each campaign.",
  },
  {
    icon: "fa-money-bill-wave",
    title: "Price Optimization",
    description: "Optimize pricing strategies across categories.",
  },
  {
    icon: "fa-users",
    title: "Customer Response",
    description: "Analyze how customers respond to different offers.",
  },
  {
    icon: "fa-lightbulb",
    title: "Recommendation Engine",
    description: "AI-powered suggestions for your next promotion.",
  },
  {
    icon: "fa-history",
    title: "Historical Analysis",
    description: "Learn from past promotion performance trends.",
  },
];

const benefits = [
  {
    icon: "fa-arrow-trend-up",
    title: "Higher ROI",
    description: "Maximize return on every promotional investment.",
  },
  {
    icon: "fa-bullseye",
    title: "Better Targeting",
    description: "Reach the right customers with the right offers.",
  },
  {
    icon: "fa-shield-halved",
    title: "Reduced Cannibalization",
    description: "Minimize impact on regular sales performance.",
  },
  {
    icon: "fa-chart-line",
    title: "Improved Planning",
    description: "Drive decisions with real-time data intelligence.",
  },
];

const dashboards = [
  {
    icon: "fa-chart-pie",
    badge: "Planning",
    title: "Promotion Planning Dashboard",
    description:
      "Design, schedule, and monitor promotional events with complete campaign visibility.",
    cta: "Open Dashboard",
    accentClass: "promo-accent-primary",
    onClick: () => {
      window.open(
        "https://pnp.retailsso.com/promotions/dashboards/main",
        "_blank",
        "noopener,noreferrer"
      );
    },
  },
  {
    icon: "fa-tag",
    badge: "Optimization",
    title: "Price Optimization Dashboard",
    description:
      "Analyze KVI pricing behavior and optimize strategy with advanced pricing insights.",
    cta: "Open Dashboard",
    accentClass: "promo-accent-secondary",
    onClick: () => {
      window.open(
        "https://pnp.mafcarrefour.local/pricing/dashboard/pricing-kvi",
        "_blank",
        "noopener,noreferrer"
      );
    },
  },
];

/* ─── animation presets ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

/* ─── component ─────────────────────────────────────────── */
const Promotion: React.FC = () => (
  <>
    <Helmet>
      <title>Pricing &amp; Promotion Effectiveness | RACE.AI</title>
      <meta
        name="description"
        content="Optimize promotional strategy with data-driven insights"
      />
    </Helmet>

    <main>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="promo-hero">
        <div className="container">
          <motion.div
            className="promo-hero-content"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="promo-eyebrow">Pricing &amp; Promotion</span>
            <h1>Promotion Effectiveness</h1>
            <p>
              Plan, execute, and measure campaigns for higher ROI — powered by
              enterprise-grade pricing intelligence.
            </p>
            <div className="promo-hero-actions">
              <button
                type="button"
                className="promo-btn-white"
                onClick={dashboards[0].onClick}
              >
                Explore Promotion Planning
              </button>
              <button
                type="button"
                className="promo-btn-ghost"
                onClick={dashboards[1].onClick}
              >
                View Price Optimization
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────── */}
      <section className="promo-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp()}>
              <img
                src={assetPath("/img/project-8.jpg")}
                alt="Pricing and Promotion Analytics"
                className="promo-overview-img"
              />
            </motion.div>

            <motion.div className="col-lg-6" {...fadeUp(0.1)}>
              <span className="promo-label-secondary">Overview</span>
              <h2 className="promo-section-heading">
                One Platform for Pricing &amp; Promotions
              </h2>
              <p className="promo-body-text">
                Our solution helps teams plan, execute, and measure campaigns
                for higher ROI. From campaign design to post-promotion analysis,
                align pricing depth and customer response in a single integrated
                framework.
              </p>
              <p className="promo-body-text">
                Leverage AI recommendations, historical patterns, and real-time
                dashboards to make every promotion count.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className="promo-section promo-bg-surface">
        <div className="container">
          <motion.div className="promo-section-header" {...fadeUp()}>
            <span className="promo-label-secondary">Capabilities</span>
            <h2 className="promo-section-heading">Key Features</h2>
          </motion.div>

          <div className="row g-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="col-lg-4 col-md-6"
                {...fadeUp(i * 0.06)}
              >
                <div className="promo-feature-card h-100">
                  <div className="promo-icon-box promo-icon-primary">
                    <i className={`fas ${f.icon}`} />
                  </div>
                  <h3 className="promo-card-title">{f.title}</h3>
                  <p className="promo-card-text">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────── */}
      <section className="promo-section">
        <div className="container">
          <motion.div className="promo-section-header" {...fadeUp()}>
            <span className="promo-label-secondary">Impact</span>
            <h2 className="promo-section-heading">Business Benefits</h2>
          </motion.div>

          <div className="row g-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="col-lg-6"
                {...fadeUp(i * 0.07)}
              >
                <div className="promo-benefit-card h-100">
                  <div className="promo-icon-box promo-icon-success">
                    <i className={`fas ${b.icon}`} />
                  </div>
                  <div>
                    <h4 className="promo-card-title">{b.title}</h4>
                    <p className="promo-card-text mb-0">{b.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboards ────────────────────────────────────── */}
      <section className="promo-section promo-bg-surface">
        <div className="container">
          <motion.div className="promo-section-header" {...fadeUp()}>
            <span className="promo-label-secondary">Tools</span>
            <h2 className="promo-section-heading">Launch Your Dashboards</h2>
          </motion.div>

          <div className="row g-4">
            {dashboards.map((d, i) => (
              <motion.div
                key={d.title}
                className="col-lg-6"
                {...fadeUp(i * 0.1)}
              >
                <div className={`promo-dashboard-card h-100 ${d.accentClass}`}>
                  <div className="promo-dashboard-header">
                    <div className="promo-dashboard-icon">
                      <i className={`fas ${d.icon}`} />
                    </div>
                    <span className="promo-dashboard-badge">{d.badge}</span>
                  </div>
                  <h3 className="promo-dashboard-title">{d.title}</h3>
                  <p className="promo-card-text">{d.description}</p>
                  <button
                    type="button"
                    className="promo-btn-cta mt-auto"
                    onClick={d.onClick}
                  >
                    {d.cta} &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="promo-cta-section">
        <div className="container">
          <motion.div className="promo-cta-content" {...fadeUp()}>
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us to learn how Promotion Optimization can accelerate your
              retail performance.
            </p>
            <Link to="/contact" className="promo-btn-white">
              Contact Us &rarr;
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default Promotion;
