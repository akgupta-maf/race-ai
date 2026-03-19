import DashboardLaunchSection from '@/components/DashboardLaunchSection';
import PageTemplate from '../../components/PageTemplate';

const Whitespace = () => {
  const features = [
    {
      icon: 'fa-search',
      title: 'Whitespace Identification',
      description:
        'Identify gaps and opportunities in your product portfolio and shelf space',
    },
    {
      icon: 'fa-map-marked-alt',
      title: 'Opportunity Mapping',
      description:
        'Map whitespace opportunities across categories and segments',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Growth Potential Analysis',
      description:
        'Analyze and quantify the growth potential of whitespace opportunities',
    },
    {
      icon: 'fa-chart-line',
      title: 'Market Gap Analysis',
      description: 'Understand market gaps and competitive whitespace',
    },
    {
      icon: 'fa-cube',
      title: 'Product Placement Optimization',
      description: 'Optimize new product placement to capture whitespace value',
    },
    {
      icon: 'fa-rocket',
      title: 'Launch Strategy',
      description: 'Develop data-driven strategies to capitalize on whitespace',
    },
  ];

  const benefits = [
    {
      title: 'Revenue Growth',
      description: 'Unlock new revenue streams by filling strategic whitespace',
    },
    {
      title: 'Market Expansion',
      description: 'Expand into new categories and customer segments',
    },
    {
      title: 'Competitive Advantage',
      description:
        'Stay ahead by identifying and acting on whitespace faster than competitors',
    },
    {
      title: 'Improved Portfolio Mix',
      description: 'Create a more balanced and profitable product portfolio',
    },
  ];

  return (
    <PageTemplate
      title='Whitespace Solutions'
      subtitle='Unlock Hidden Growth Opportunities'
      description='Our Whitespace solution identifies gaps and untapped opportunities in your product portfolio, customer segments, and market presence. Develop targeted strategies to expand into new categories and drive revenue growth.'
      image='/img/whitespace_dashboard.png'
      features={features}
      benefits={benefits}
    >
      <DashboardLaunchSection
        sectionTitle='Explore Whitespace Opportunities'
        sectionDescription='Jump directly into the whitespace analysis workspace to discover growth opportunities and develop expansion strategies.'
        badge='Growth'
        cardTitle='Whitespace Dashboard'
        cardDescription='Analyze market gaps, evaluate growth potential, and prioritize whitespace opportunities for strategic expansion.'
        icon='fa-search'
        href='https://catman.mafcarrefour.local/whitespace/'
      />
    </PageTemplate>
  );
};

export default Whitespace;
