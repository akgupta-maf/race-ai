import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CommodityAnalysis = () => {
  const features = [
    {
      icon: 'fa-box',
      title: 'Commodity Tracking',
      description: 'Track commodity prices and market trends'
    },
    {
      icon: 'fa-chart-area',
      title: 'Price Forecasting',
      description: 'Predict future commodity price movements'
    },
    {
      icon: 'fa-exclamation-triangle',
      title: 'Risk Assessment',
      description: 'Assess and manage commodity price risks'
    },
    {
      icon: 'fa-globe',
      title: 'Market Intelligence',
      description: 'Stay informed about global commodity markets'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Hedging Strategies',
      description: 'Develop effective hedging strategies'
    },
    {
      icon: 'fa-file-contract',
      title: 'Contract Timing',
      description: 'Optimize timing of commodity purchases'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce costs through better commodity management'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize exposure to commodity price volatility'
    },
    {
      title: 'Informed Decisions',
      description: 'Make better purchasing decisions with market intelligence'
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain advantage through superior commodity insights'
    }
  ];

  return (
    <PageTemplate
      title="Commodity Analysis"
      subtitle="Navigate Commodity Markets with Confidence"
      description="Our Commodity Analysis solution provides comprehensive insights into commodity markets and price trends. Make informed purchasing decisions and manage commodity risks effectively."
      image="/img/Commodity_Analysis.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default CommodityAnalysis;
