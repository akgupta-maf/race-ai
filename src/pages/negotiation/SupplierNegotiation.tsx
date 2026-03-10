import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const SupplierNegotiation = () => {
  const features = [
    {
      icon: 'fa-handshake',
      title: 'Supplier Performance',
      description: 'Track and evaluate supplier performance metrics'
    },
    {
      icon: 'fa-chart-line',
      title: 'Price Benchmarking',
      description: 'Compare prices against market benchmarks and competitors'
    },
    {
      icon: 'fa-calculator',
      title: 'Cost Analysis',
      description: 'Detailed analysis of total cost of ownership'
    },
    {
      icon: 'fa-balance-scale',
      title: 'Contract Optimization',
      description: 'Optimize contract terms for better value'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Savings Tracking',
      description: 'Monitor and report on negotiation savings achieved'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Negotiation Intelligence',
      description: 'AI-powered insights for better negotiation outcomes'
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Achieve significant cost savings through data-driven negotiations'
    },
    {
      title: 'Better Supplier Relationships',
      description: 'Build stronger, more collaborative supplier partnerships'
    },
    {
      title: 'Improved Contract Terms',
      description: 'Negotiate better terms based on comprehensive data analysis'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and mitigate supply chain risks proactively'
    }
  ];

  return (
    <PageTemplate
      title="Supplier Negotiation"
      subtitle="Optimize Your Supplier Relationships and Costs"
      description="Our Supplier Negotiation solution provides comprehensive analytics to support your procurement negotiations. Make data-driven decisions and achieve better outcomes with suppliers."
      image="/img/Supplier_Negotiation.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default SupplierNegotiation;
