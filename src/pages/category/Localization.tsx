import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const Localization = () => {
  const features = [
    {
      icon: 'fa-map-marked-alt',
      title: 'Store Clustering',
      description: 'Group stores based on demographics and characteristics'
    },
    {
      icon: 'fa-shopping-basket',
      title: 'Assortment Customization',
      description: 'Tailor product assortments to local preferences'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Local Performance',
      description: 'Track performance of localized assortments'
    },
    {
      icon: 'fa-users',
      title: 'Customer Insights',
      description: 'Understand local customer preferences and needs'
    },
    {
      icon: 'fa-layer-group',
      title: 'Space Optimization',
      description: 'Optimize shelf space for local assortments'
    },
    {
      icon: 'fa-sync',
      title: 'Dynamic Adaptation',
      description: 'Continuously adapt assortments to local trends'
    }
  ];

  const benefits = [
    {
      title: 'Increased Sales',
      description: 'Boost sales by offering products that match local preferences'
    },
    {
      title: 'Reduced Waste',
      description: 'Minimize markdowns and waste with better assortments'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve satisfaction with relevant product offerings'
    },
    {
      title: 'Inventory Efficiency',
      description: 'Optimize inventory levels across locations'
    }
  ];

  return (
    <PageTemplate
      title="Localization"
      subtitle="Tailor Your Assortments to Local Markets"
      description="Our Localization solution helps you customize product assortments based on local market characteristics and customer preferences, driving sales and customer satisfaction."
      image="/img/project-6.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default Localization;
