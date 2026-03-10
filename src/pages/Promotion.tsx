import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Promotion = () => {
  const features = [
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

  const benefits = [
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

  return (
    <PageTemplate
      title="Pricing & Promotion Effectiveness"
      subtitle="Optimize Your Promotional Strategy"
      description="Our Pricing & Promotion Effectiveness solution helps you plan, execute, and measure promotional campaigns for maximum ROI. Use data-driven insights to optimize pricing and promotional strategies."
      image="/img/project-8.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default Promotion;
