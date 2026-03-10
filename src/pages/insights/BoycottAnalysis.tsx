import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const BoycottAnalysis = () => {
  const features = [
    {
      icon: 'fa-search',
      title: 'Sentiment Analysis',
      description: 'Track public sentiment and brand perception across channels'
    },
    {
      icon: 'fa-chart-line',
      title: 'Impact Assessment',
      description: 'Measure the actual impact of boycott campaigns on sales and reputation'
    },
    {
      icon: 'fa-exclamation-triangle',
      title: 'Early Warning System',
      description: 'Detect potential boycott risks before they escalate'
    },
    {
      icon: 'fa-bullhorn',
      title: 'Social Media Monitoring',
      description: 'Monitor social media conversations and trending hashtags'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Crisis Management',
      description: 'Get actionable recommendations for crisis response'
    },
    {
      icon: 'fa-history',
      title: 'Historical Analysis',
      description: 'Learn from past boycott patterns and outcomes'
    }
  ];

  const benefits = [
    {
      title: 'Proactive Risk Management',
      description: 'Identify and mitigate boycott risks before they impact your business'
    },
    {
      title: 'Brand Protection',
      description: 'Safeguard your brand reputation with timely interventions'
    },
    {
      title: 'Strategic Communication',
      description: 'Develop effective communication strategies based on data insights'
    },
    {
      title: 'Business Continuity',
      description: 'Maintain operations and minimize disruption during challenging times'
    }
  ];

  return (
    <PageTemplate
      title="Boycott Analysis"
      subtitle="Protect Your Brand with Intelligent Boycott Monitoring"
      description="Our Boycott Analysis solution provides comprehensive monitoring and analysis of boycott campaigns, helping you understand their impact and respond effectively. We combine social listening, sentiment analysis, and sales data to give you a complete picture."
      image="/img/project-2.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default BoycottAnalysis;
