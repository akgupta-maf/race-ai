import DashboardLaunchSection from '@/components/DashboardLaunchSection';
import PageTemplate from '../../components/PageTemplate';

const CategoryRoles = () => {
  const features = [
    {
      icon: 'fa-th',
      title: 'Role Assignment',
      description: 'Define strategic roles for each product category',
    },
    {
      icon: 'fa-chart-pie',
      title: 'Performance Tracking',
      description: 'Monitor category performance against defined roles',
    },
    {
      icon: 'fa-bullseye',
      title: 'Strategic Alignment',
      description: 'Ensure categories align with business strategy',
    },
    {
      icon: 'fa-balance-scale',
      title: 'Portfolio Optimization',
      description: 'Optimize category mix for maximum impact',
    },
    {
      icon: 'fa-trophy',
      title: 'Destination Categories',
      description: 'Identify and strengthen destination categories',
    },
    {
      icon: 'fa-sync-alt',
      title: 'Role Evolution',
      description: 'Track how category roles evolve over time',
    },
  ];

  const benefits = [
    {
      title: 'Strategic Clarity',
      description: "Clear understanding of each category's strategic role",
    },
    {
      title: 'Better Resource Allocation',
      description: 'Allocate resources based on category importance',
    },
    {
      title: 'Improved Performance',
      description: 'Drive better results with focused category strategies',
    },
    {
      title: 'Competitive Positioning',
      description: 'Strengthen competitive position in key categories',
    },
  ];

  return (
    <PageTemplate
      title='Category Roles'
      subtitle='Define and Optimize Strategic Category Roles'
      description='Our Category Roles solution helps you define and manage strategic roles for each product category, ensuring alignment with business objectives and optimal resource allocation.'
      image='/img/project-5.jpg'
      features={features}
      benefits={benefits}
    >
      <DashboardLaunchSection
        sectionTitle='Launch Category Review Instantly'
        sectionDescription='Access the Category Roles dashboard directly to define strategic roles and align category decisions faster.'
        badge='Category Review'
        cardTitle='Category Roles Dashboard'
        cardDescription='Review strategic role assignments, evaluate category positioning, and act on role-based portfolio decisions in one place.'
        icon='fa-th-large'
        href='https://catman.mafcarrefour.local/category-review/category-roles'
      />
    </PageTemplate>
  );
};

export default CategoryRoles;
