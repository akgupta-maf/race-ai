import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Sustainability = () => {
  const features = [
    {
      icon: 'fa-leaf',
      title: 'Carbon Footprint',
      description: 'Track and reduce your carbon footprint'
    },
    {
      icon: 'fa-recycle',
      title: 'Waste Management',
      description: 'Monitor and optimize waste reduction efforts'
    },
    {
      icon: 'fa-battery-three-quarters',
      title: 'Energy Efficiency',
      description: 'Track energy consumption and identify savings'
    },
    {
      icon: 'fa-tint',
      title: 'Water Conservation',
      description: 'Monitor water usage and conservation efforts'
    },
    {
      icon: 'fa-certificate',
      title: 'Compliance Tracking',
      description: 'Ensure compliance with sustainability regulations'
    },
    {
      icon: 'fa-file-invoice',
      title: 'ESG Reporting',
      description: 'Generate comprehensive ESG reports'
    }
  ];

  const benefits = [
    {
      title: 'Environmental Impact',
      description: 'Reduce your environmental footprint significantly'
    },
    {
      title: 'Cost Savings',
      description: 'Lower costs through improved efficiency'
    },
    {
      title: 'Brand Reputation',
      description: 'Enhance brand reputation with sustainability leadership'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with evolving regulations'
    }
  ];

  return (
    <PageTemplate
      title="Sustainability Analytics"
      subtitle="Drive Environmental Responsibility with Data"
      description="Our Sustainability Analytics solution helps you measure, track, and improve your environmental performance. Make data-driven decisions to reduce your carbon footprint and build a more sustainable business."
      image="/img/sustainability.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default Sustainability;
