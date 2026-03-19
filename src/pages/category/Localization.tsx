import DashboardLaunchSection from '@/components/DashboardLaunchSection';
import PageTemplate from '../../components/PageTemplate';

const Localization = () => {
  const features = [
    {
      icon: 'fa-map-marked-alt',
      title: 'Store Clustering',
      description: 'Group stores based on demographics and characteristics',
    },
    {
      icon: 'fa-shopping-basket',
      title: 'Assortment Customization',
      description: 'Tailor product assortments to local preferences',
    },
    {
      icon: 'fa-chart-bar',
      title: 'Local Performance',
      description: 'Track performance of localized assortments',
    },
    {
      icon: 'fa-users',
      title: 'Customer Insights',
      description: 'Understand local customer preferences and needs',
    },
    {
      icon: 'fa-layer-group',
      title: 'Space Optimization',
      description: 'Optimize shelf space for local assortments',
    },
    {
      icon: 'fa-sync',
      title: 'Dynamic Adaptation',
      description: 'Continuously adapt assortments to local trends',
    },
  ];

  const benefits = [
    {
      title: 'Increased Sales',
      description:
        'Boost sales by offering products that match local preferences',
    },
    {
      title: 'Reduced Waste',
      description: 'Minimize markdowns and waste with better assortments',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Improve satisfaction with relevant product offerings',
    },
    {
      title: 'Inventory Efficiency',
      description: 'Optimize inventory levels across locations',
    },
  ];

  return (
    <PageTemplate
      title='Localization'
      subtitle='Tailor Your Assortments to Local Markets'
      description='Our Localization solution helps you customize product assortments based on local market characteristics and customer preferences, driving sales and customer satisfaction.'
      image='/img/project-6.jpg'
      features={features}
      benefits={benefits}
    >
      <DashboardLaunchSection
        sectionTitle='Launch Localization Instantly'
        sectionDescription='Open the localization workspace to tailor assortments by store cluster, shopper profile, and local demand.'
        badge='Localization'
        cardTitle='Localization Dashboard'
        cardDescription='Explore localized assortment opportunities, compare store needs, and optimize offer relevance across markets.'
        icon='fa-map-marked-alt'
        href='https://catman.mafcarrefour.local/localization/'
      />
    </PageTemplate>
  );
};

export default Localization;
