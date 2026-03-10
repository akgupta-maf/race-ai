import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const CustomerSegmentation = () => {
  const features = [
    {
      icon: 'fa-users',
      title: 'Multi-Dimensional Segmentation',
      description: 'Segment customers based on demographics, behavior, and preferences'
    },
    {
      icon: 'fa-robot',
      title: 'ML-Powered Clustering',
      description: 'Automatically discover customer segments using machine learning'
    },
    {
      icon: 'fa-bullseye',
      title: 'Targeted Marketing',
      description: 'Create personalized campaigns for each customer segment'
    },
    {
      icon: 'fa-chart-pie',
      title: 'RFM Analysis',
      description: 'Analyze customers by Recency, Frequency, and Monetary value'
    },
    {
      icon: 'fa-exchange-alt',
      title: 'Lifecycle Tracking',
      description: 'Track customers across their entire lifecycle journey'
    },
    {
      icon: 'fa-dollar-sign',
      title: 'Value Prediction',
      description: 'Predict customer lifetime value and potential'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Customer Experience',
      description: 'Deliver tailored experiences that resonate with each customer segment'
    },
    {
      title: 'Higher Conversion Rates',
      description: 'Increase conversions with targeted, relevant messaging'
    },
    {
      title: 'Optimized Marketing Spend',
      description: 'Allocate marketing resources more effectively across segments'
    },
    {
      title: 'Improved Customer Retention',
      description: 'Identify and engage at-risk customers before they churn'
    }
  ];

  return (
    <PageTemplate
      title="Customer Segmentation"
      subtitle="Understand and Engage Your Customers Better"
      description="Our Customer Segmentation solution uses advanced analytics to divide your customer base into meaningful groups, enabling personalized marketing and improved customer experiences. Leverage AI-powered insights to understand what makes each segment unique."
      image="/img/cust_seg1.png"
      features={features}
      benefits={benefits}
    />
  );
};

export default CustomerSegmentation;
