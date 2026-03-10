import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const Customer360 = () => {
  const features = [
    {
      icon: 'fa-user-circle',
      title: 'Unified Customer View',
      description: 'Complete 360-degree view of each customer across all touchpoints'
    },
    {
      icon: 'fa-shopping-cart',
      title: 'Purchase History',
      description: 'Comprehensive tracking of all customer transactions and interactions'
    },
    {
      icon: 'fa-heart',
      title: 'Preference Tracking',
      description: 'Understand individual customer preferences and interests'
    },
    {
      icon: 'fa-comments',
      title: 'Interaction Timeline',
      description: 'View complete history of customer communications and engagements'
    },
    {
      icon: 'fa-star',
      title: 'Loyalty Insights',
      description: 'Track loyalty program participation and reward redemption'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Next Best Action',
      description: 'AI-driven recommendations for optimal customer engagement'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Customer Understanding',
      description: 'Get a complete picture of each customer for better decision-making'
    },
    {
      title: 'Improved Service Quality',
      description: 'Provide personalized service based on complete customer context'
    },
    {
      title: 'Increased Cross-Sell Opportunities',
      description: 'Identify and act on cross-selling and upselling opportunities'
    },
    {
      title: 'Better Customer Retention',
      description: 'Proactively address issues and strengthen customer relationships'
    }
  ];

  return (
    <PageTemplate
      title="Customer 360 Dashboard"
      subtitle="Complete View of Your Customer Journey"
      description="Our Customer 360 Dashboard provides a comprehensive, unified view of each customer's interactions, preferences, and history. Make informed decisions with complete customer context at your fingertips."
      image="/img/project-3.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default Customer360;
