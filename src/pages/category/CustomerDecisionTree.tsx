import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CustomerDecisionTree = () => {
  const features = [
    {
      icon: 'fa-sitemap',
      title: 'Decision Path Mapping',
      description: 'Map how customers navigate product decisions'
    },
    {
      icon: 'fa-brain',
      title: 'Choice Analysis',
      description: 'Understand key decision drivers and criteria'
    },
    {
      icon: 'fa-th',
      title: 'Shelf Optimization',
      description: 'Optimize product placement based on decision paths'
    },
    {
      icon: 'fa-arrows-alt-h',
      title: 'Adjacency Planning',
      description: 'Plan optimal product adjacencies'
    },
    {
      icon: 'fa-tag',
      title: 'Attribute Importance',
      description: 'Identify attributes that drive purchase decisions'
    },
    {
      icon: 'fa-chart-network',
      title: 'Path Visualization',
      description: 'Visualize customer decision journeys'
    }
  ];

  const benefits = [
    {
      title: 'Better Merchandising',
      description: 'Improve product placement and presentation'
    },
    {
      title: 'Increased Conversions',
      description: 'Help customers find what they need faster'
    },
    {
      title: 'Optimized Navigation',
      description: 'Make shopping easier and more intuitive'
    },
    {
      title: 'Enhanced Experience',
      description: 'Create a better shopping experience'
    }
  ];

  return (
    <PageTemplate
      title="Customer Decision Tree (CDT)"
      subtitle="Understand How Customers Make Purchase Decisions"
      description="Our Customer Decision Tree solution maps how customers navigate product choices, helping you optimize merchandising, product placement, and assortment strategy."
      image="/img/CDT.jpg"
      features={features}
      benefits={benefits}
    />
  );
};

export default CustomerDecisionTree;
