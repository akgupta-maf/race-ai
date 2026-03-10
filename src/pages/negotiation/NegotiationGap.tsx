import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const NegotiationGap = () => {
  const features = [
    {
      icon: 'fa-object-ungroup',
      title: 'Gap Identification',
      description: 'Identify gaps between target and achieved prices'
    },
    {
      icon: 'fa-bullseye',
      title: 'Target Setting',
      description: 'Set realistic negotiation targets based on data'
    },
    {
      icon: 'fa-chart-line',
      title: 'Progress Tracking',
      description: 'Track negotiation progress against targets'
    },
    {
      icon: 'fa-sitemap',
      title: 'Category Analysis',
      description: 'Analyze gaps by category, supplier, and product'
    },
    {
      icon: 'fa-trophy',
      title: 'Best Practice Identification',
      description: 'Learn from successful negotiations'
    },
    {
      icon: 'fa-flag',
      title: 'Action Plans',
      description: 'Generate action plans to close identified gaps'
    }
  ];

  const benefits = [
    {
      title: 'Higher Savings',
      description: 'Close negotiation gaps to achieve higher cost savings'
    },
    {
      title: 'Better Visibility',
      description: 'Complete visibility into negotiation performance'
    },
    {
      title: 'Focused Actions',
      description: 'Prioritize efforts on areas with highest savings potential'
    },
    {
      title: 'Performance Tracking',
      description: 'Monitor team and individual negotiation performance'
    }
  ];

  return (
    <PageTemplate
      title="Negotiation Gap Analysis"
      subtitle="Close the Gap Between Target and Actual Prices"
      description="Our Negotiation Gap Analysis solution helps you identify and close gaps between target and achieved negotiation outcomes. Track performance and optimize your procurement strategy."
      image="/img/Negotiation_Gap_Analysis.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default NegotiationGap;
