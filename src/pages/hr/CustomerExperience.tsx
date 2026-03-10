import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CustomerExperience = () => {
  const features = [
    {
      icon: 'fa-comments',
      title: 'Feedback Collection',
      description: 'Gather customer feedback across all touchpoints'
    },
    {
      icon: 'fa-smile',
      title: 'Satisfaction Tracking',
      description: 'Monitor customer satisfaction scores and trends'
    },
    {
      icon: 'fa-route',
      title: 'Journey Mapping',
      description: 'Visualize and optimize the customer journey'
    },
    {
      icon: 'fa-exclamation-circle',
      title: 'Pain Point Identification',
      description: 'Identify and address customer pain points'
    },
    {
      icon: 'fa-handshake',
      title: 'Loyalty Measurement',
      description: 'Track Net Promoter Score and customer loyalty'
    },
    {
      icon: 'fa-magic',
      title: 'Experience Optimization',
      description: 'Get actionable recommendations to improve CX'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Customer Satisfaction',
      description: 'Improve satisfaction by addressing key pain points'
    },
    {
      title: 'Increased Customer Loyalty',
      description: 'Build stronger relationships and increase repeat business'
    },
    {
      title: 'Competitive Differentiation',
      description: 'Stand out from competitors with superior customer experience'
    },
    {
      title: 'Revenue Growth',
      description: 'Drive revenue through improved customer retention and advocacy'
    }
  ];

  return (
    <PageTemplate
      title="Customer Experience"
      subtitle="Deliver Exceptional Customer Experiences"
      description="Our Customer Experience solution helps you understand, measure, and improve every aspect of the customer journey. Use actionable insights to create experiences that delight your customers and drive loyalty."
      image="/img/customer_experience.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default CustomerExperience;
