import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';
import PageTemplate from '../../components/PageTemplate';

type HumanCapitalTool = {
  title: string;
  description: string;
  image: string;
  dashboardLink: string;
  icon: string;
};

const humanCapitalTools: HumanCapitalTool[] = [
  {
    title: 'Attendance Insights Tool',
    description:
      'Track attendance patterns and workforce behavior trends to support better workforce planning and operational decision-making.',
    image: '/img/hr_tool_2.png',
    dashboardLink:
      'https://app.powerbi.com/groups/e835c377-b2d3-4973-a731-e6c335974ce1/reports/2da20f91-bb31-438f-b51e-042ecb3d1f55/8498ecd4d81e73824814?experience=power-bi',
    icon: 'fa-user-check',
  },
  {
    title: 'Store Management Productivity',
    description:
      "This tool provides a platform to compare a store's Span of Control with respect to overall Span of Control by country, format, and section or department. It also enables users to track SOC against monthly benchmarks.",
    image: '/img/hr_tool_3.png',
    dashboardLink:
      'https://app.powerbi.com/groups/e835c377-b2d3-4973-a731-e6c335974ce1/reports/76a03310-2385-4078-b5d8-080847fd8325/ReportSectionce671adc32c8a83ba925?experience=power-bi',
    icon: 'fa-store',
  },
  {
    title: 'Frontliner Productivity Tool',
    description:
      'This tool provides a platform to generate productivity standards or benchmarks at each store and section level. Using advanced forecasting and heuristic models, it gives forward-looking visibility into overstaffed or understaffed sections, improving resource efficiency and utilization.',
    image: '/img/hr_tool_4.png',
    dashboardLink:
      'https://app.powerbi.com/groups/e835c377-b2d3-4973-a731-e6c335974ce1/reports/6cb4f730-7271-437f-a14d-327d152d50d7/ReportSectionb5c9dce4dd4be24d4697?experience=power-bi',
    icon: 'fa-chart-line',
  },
  {
    title: 'Services Right Sizing Tool',
    description:
      'This tool leverages ML and regression models to benchmark services headcount required to support country growth plans. For each job family, single-factor and multi-factor models are built after identifying key drivers impacting headcount growth.',
    image: '/img/hr_tool_1.png',
    dashboardLink:
      'https://app.powerbi.com/groups/e835c377-b2d3-4973-a731-e6c335974ce1/reports/f5272372-d77b-4736-83f5-6d769d4b3360/81a46751b0226da963a2?experience=power-bi',
    icon: 'fa-balance-scale',
  },
];

const HumanCapitalAnalytics = () => {
  const features = [
    {
      icon: 'fa-users-cog',
      title: 'Workforce Analytics',
      description:
        'Comprehensive insights into workforce performance and productivity',
    },
    {
      icon: 'fa-user-check',
      title: 'Talent Management',
      description: 'Identify and develop high-potential employees',
    },
    {
      icon: 'fa-chart-area',
      title: 'Turnover Prediction',
      description: 'Predict and prevent employee attrition with AI',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Skills Gap Analysis',
      description:
        'Identify training needs and skill development opportunities',
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'Compensation Analysis',
      description: 'Ensure competitive and fair compensation practices',
    },
    {
      icon: 'fa-smile',
      title: 'Employee Engagement',
      description: 'Measure and improve employee satisfaction and engagement',
    },
  ];

  const benefits = [
    {
      title: 'Improved Retention',
      description:
        'Reduce turnover by identifying and addressing employee concerns early',
    },
    {
      title: 'Better Hiring Decisions',
      description: 'Make data-driven hiring decisions to build stronger teams',
    },
    {
      title: 'Increased Productivity',
      description:
        'Optimize workforce allocation and improve overall productivity',
    },
    {
      title: 'Enhanced Employee Experience',
      description:
        'Create a better workplace environment based on employee feedback',
    },
  ];

  return (
    <PageTemplate
      title='Human Capital Analytics'
      subtitle='Empower Your Workforce with Data-Driven HR'
      description='Human Capital Analytics uses data and advanced analytics to understand workforce trends, productivity, and employee behavior. It helps organizations make evidence-based decisions on hiring, workforce planning, performance, and retention. By linking people metrics to business outcomes, it enables better resource allocation and stronger operational efficiency.'
      image='/img/Human_resourse.jpg'
      features={features}
      benefits={benefits}
    >
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Human Capital Analytics Tools</h2>
          </div>

          <div className='flex flex-col gap-6'>
            {humanCapitalTools.map((tool, index) => (
              <motion.article
                key={tool.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className='w-full overflow-hidden rounded-2xl border border-(--color-primary-20) bg-white shadow-sm'
              >
                <div className='grid gap-0 grid-cols-12'>
                  <div className='h-full w-full p-4 col-span-5'>
                    <img
                      src={assetPath(tool.image)}
                      alt={tool.title}
                      className='h-full min-h-56 w-full rounded-xl object-cover'
                    />
                  </div>

                  <div className='flex h-full flex-col justify-between p-4 col-span-7'>
                    <div>
                      <div className='mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-secondary-20) text-(--color-primary)'>
                        <i className={`fas ${tool.icon} text-xl`}></i>
                      </div>
                      <h3 className='mb-3 text-2xl font-bold text-(--color-primary)'>
                        {tool.title}
                      </h3>
                      <p className='text-base leading-7 text-(--color-typography)'>
                        {tool.description}
                      </p>
                    </div>

                    <div className='mt-6'>
                      <a
                        href={tool.dashboardLink}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center justify-center rounded-xl bg-(--color-primary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--color-primary-80)'
                      >
                        Open {tool.title}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default HumanCapitalAnalytics;
