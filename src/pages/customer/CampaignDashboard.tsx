import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CampaignDashboard = () => {
  const features = [
    {
      icon: 'fa-rocket',
      title: 'Campaign Performance',
      description: 'Track key metrics for all your marketing campaigns in one place'
    },
    {
      icon: 'fa-chart-line',
      title: 'ROI Analysis',
      description: 'Measure campaign ROI and understand what drives results'
    },
    {
      icon: 'fa-users',
      title: 'Audience Insights',
      description: 'Understand how different segments respond to campaigns'
    },
    {
      icon: 'fa-clock',
      title: 'Real-Time Tracking',
      description: 'Monitor campaign performance as it happens'
    },
    {
      icon: 'fa-flask',
      title: 'A/B Testing',
      description: 'Compare campaign variants and optimize performance'
    },
    {
      icon: 'fa-trophy',
      title: 'Goal Tracking',
      description: 'Set and monitor campaign goals and KPIs'
    }
  ];

  const benefits = [
    {
      title: 'Optimized Campaign Performance',
      description: 'Make data-driven adjustments to improve campaign effectiveness'
    },
    {
      title: 'Better Budget Allocation',
      description: 'Invest in campaigns that deliver the best returns'
    },
    {
      title: 'Faster Decision Making',
      description: 'Quickly identify and respond to campaign performance issues'
    },
    {
      title: 'Increased Marketing Efficiency',
      description: 'Streamline campaign management and reporting processes'
    }
  ];

  return (
    <PageTemplate
      title="Campaign Dashboard"
      subtitle="Measure and Optimize Your Marketing Campaigns"
      description="Our Campaign Dashboard provides comprehensive insights into your marketing campaign performance. Track, measure, and optimize all your campaigns from a single, intuitive interface."
      image="/img/project-4.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default CampaignDashboard;
