import DashboardLaunchSection from '@/components/DashboardLaunchSection';
import PageTemplate from '../../components/PageTemplate';

const Rationalization = () => {
  const features = [
    {
      icon: 'fa-cut',
      title: 'SKU Analysis',
      description: 'Identify underperforming and redundant SKUs',
    },
    {
      icon: 'fa-chart-line',
      title: 'Performance Metrics',
      description: 'Track SKU performance across multiple dimensions',
    },
    {
      icon: 'fa-compress-arrows-alt',
      title: 'Assortment Optimization',
      description: 'Optimize assortment size for maximum efficiency',
    },
    {
      icon: 'fa-box-open',
      title: 'Space Liberation',
      description: 'Free up shelf space for better-performing products',
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Cost Reduction',
      description: 'Reduce costs associated with carrying excess SKUs',
    },
    {
      icon: 'fa-project-diagram',
      title: 'Scenario Planning',
      description: 'Model different rationalization scenarios',
    },
  ];

  const benefits = [
    {
      title: 'Improved Efficiency',
      description: 'Streamline operations with a more focused assortment',
    },
    {
      title: 'Better Margins',
      description: 'Improve margins by eliminating poor performers',
    },
    {
      title: 'Simplified Operations',
      description: 'Reduce complexity in supply chain and inventory management',
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Make shopping easier with a curated selection',
    },
  ];

  return (
    <PageTemplate
      title='Rationalization'
      subtitle='Optimize Your Product Portfolio'
      description='Our Rationalization solution helps you streamline your product assortment by identifying and eliminating underperforming SKUs, improving efficiency and profitability.'
      image='/img/rationalization_dashboard.png'
      features={features}
      benefits={benefits}
    >
      <DashboardLaunchSection
        sectionTitle='Launch Rationalization Instantly'
        sectionDescription='Jump directly into the rationalization workspace to review assortment opportunities and reduce SKU complexity.'
        badge='Assortment'
        cardTitle='Rationalization Dashboard'
        cardDescription='Analyze underperforming SKUs, compare rationalization scenarios, and move quickly from insight to execution.'
        icon='fa-cut'
        href='https://catman.mafcarrefour.local/rationalization/'
      />
    </PageTemplate>
  );
};

export default Rationalization;
