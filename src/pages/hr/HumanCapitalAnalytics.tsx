import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const HumanCapitalAnalytics = () => {
  const features = [
    {
      icon: 'fa-users-cog',
      title: 'Workforce Analytics',
      description: 'Comprehensive insights into workforce performance and productivity'
    },
    {
      icon: 'fa-user-check',
      title: 'Talent Management',
      description: 'Identify and develop high-potential employees'
    },
    {
      icon: 'fa-chart-area',
      title: 'Turnover Prediction',
      description: 'Predict and prevent employee attrition with AI'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Skills Gap Analysis',
      description: 'Identify training needs and skill development opportunities'
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'Compensation Analysis',
      description: 'Ensure competitive and fair compensation practices'
    },
    {
      icon: 'fa-smile',
      title: 'Employee Engagement',
      description: 'Measure and improve employee satisfaction and engagement'
    }
  ];

  const benefits = [
    {
      title: 'Improved Retention',
      description: 'Reduce turnover by identifying and addressing employee concerns early'
    },
    {
      title: 'Better Hiring Decisions',
      description: 'Make data-driven hiring decisions to build stronger teams'
    },
    {
      title: 'Increased Productivity',
      description: 'Optimize workforce allocation and improve overall productivity'
    },
    {
      title: 'Enhanced Employee Experience',
      description: 'Create a better workplace environment based on employee feedback'
    }
  ];

  return (
    <PageTemplate
      title="Human Capital Analytics"
      subtitle="Empower Your Workforce with Data-Driven HR"
      description="Our Human Capital Analytics solution provides comprehensive insights into your workforce, helping you make informed decisions about talent management, retention, and employee development."
      image="/img/Human_resourse.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default HumanCapitalAnalytics;
