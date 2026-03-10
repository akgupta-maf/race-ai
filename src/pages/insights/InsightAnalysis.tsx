import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { Feature, Benefit } from '@/types';

const InsightAnalysis: React.FC = () => {
  const features: Feature[] = [
    {
      icon: 'fa-chart-bar',
      title: 'Advanced Analytics',
      description: 'Deep dive into your business data with powerful analytical tools'
    },
    {
      icon: 'fa-brain',
      title: 'AI-Powered Insights',
      description: 'Automatically discover hidden patterns and trends in your data'
    },
    {
      icon: 'fa-tachometer-alt',
      title: 'Real-Time Dashboards',
      description: 'Monitor key metrics with interactive, real-time visualizations'
    },
    {
      icon: 'fa-file-export',
      title: 'Custom Reports',
      description: 'Generate detailed reports tailored to your specific needs'
    },
    {
      icon: 'fa-bell',
      title: 'Smart Alerts',
      description: 'Get notified about important changes and anomalies instantly'
    },
    {
      icon: 'fa-sync',
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions backed by comprehensive data analysis'
    },
    {
      title: 'Increased Efficiency',
      description: 'Identify inefficiencies and optimize operations for better performance'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the market with actionable insights'
    },
    {
      title: 'Revenue Growth',
      description: 'Uncover new opportunities to increase sales and profitability'
    }
  ];

  return (
    <PageTemplate
      title="Insight Analysis"
      subtitle="Transform Data into Actionable Business Intelligence"
      description="Our Insight Analysis solution helps you unlock the full potential of your business data. Using advanced analytics and AI, we transform raw data into meaningful insights that drive strategic decision-making and business growth."
      image="/img/project-1.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default InsightAnalysis;
