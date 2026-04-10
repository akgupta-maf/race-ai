import PageTemplate from '@/components/PageTemplate';
import { motion } from 'framer-motion';

type DemandModule = {
  title: string;
  description: string;
  image: string;
  icon: string;
  cta: string;
};

type ArchitectureStage = {
  title: string;
  description: string;
  icon: string;
};

const modules: DemandModule[] = [
  {
    title: 'Forecast Engine',
    description:
      'Generate daily and weekly forecasts across item, store, region, and category hierarchies using AI models tuned for retail demand behavior.',
    image: '/img/demand_forcasting.jpg',
    icon: 'fa-chart-line',
    cta: 'Explore Forecasting Flow',
  },
  {
    title: 'Replenishment Engine',
    description:
      'Convert demand signals into replenishment recommendations that reduce stockouts, control overstock risk, and support service-level targets.',
    image: '/img/forecast.jpg',
    icon: 'fa-boxes-stacked',
    cta: 'View Replenishment Logic',
  },
  {
    title: 'Control Tower Dashboards',
    description:
      'Monitor anomalies, review scenario simulations, and align planners on a business-friendly dashboard layer with alerts and drill-down visibility.',
    image: '/img/project-1.jpg',
    icon: 'fa-gauge-high',
    cta: 'See Planning Insights',
  },
];

const architecture: ArchitectureStage[] = [
  {
    title: 'Data Sources',
    description:
      'POS, inventory, promotions, and external signals are unified into a single planning foundation.',
    icon: 'fa-database',
  },
  {
    title: 'Data Processing',
    description:
      'Spark-based pipelines prepare high-volume datasets for reliable downstream modeling and automation.',
    icon: 'fa-gears',
  },
  {
    title: 'Feature Engineering',
    description:
      'Seasonality, trends, events, and local demand patterns are transformed into predictive retail signals.',
    icon: 'fa-sliders',
  },
  {
    title: 'Model Layer',
    description:
      'Machine learning and deep learning models such as XGBoost, Random Forest, and LSTM drive forecast accuracy.',
    icon: 'fa-brain',
  },
  {
    title: 'Forecast Engine',
    description:
      'Daily and weekly predictions are generated across multiple geographies and product hierarchies.',
    icon: 'fa-chart-column',
  },
  {
    title: 'Replenishment Engine',
    description:
      'Automated order recommendations improve availability while managing working capital and waste.',
    icon: 'fa-truck-ramp-box',
  },
  {
    title: 'Visualization',
    description:
      'Dashboards and alerting layers make planning outcomes accessible to commercial and supply chain teams.',
    icon: 'fa-display',
  },
  {
    title: 'Integration',
    description:
      'API-first integration supports ERP, middleware, and operational systems such as SMAPP.',
    icon: 'fa-plug',
  },
];

const DemandForecasting = () => {
  const features = [
    {
      icon: 'fa-sitemap',
      title: 'Multi-Level Forecasting',
      description:
        'Forecast demand at item, store, region, and weekly views with one connected planning model.',
    },
    {
      icon: 'fa-robot',
      title: 'Advanced ML Models',
      description:
        'Blend tree-based models and sequence models to capture retail seasonality, trends, and event-driven demand.',
    },
    {
      icon: 'fa-box-open',
      title: 'Automated Replenishment',
      description:
        'Turn forecast outputs into replenishment recommendations that support service levels and margin goals.',
    },
    {
      icon: 'fa-bell',
      title: 'Demand Alerts',
      description:
        'Detect anomalies and flag sudden shifts in demand before they disrupt operations.',
    },
    {
      icon: 'fa-arrows-spin',
      title: 'Scenario Planning',
      description:
        'Simulate promotions, events, and supply constraints to compare planning options before execution.',
    },
    {
      icon: 'fa-network-wired',
      title: 'API-First Integration',
      description:
        'Connect seamlessly with ERP and middleware ecosystems through real-time integration workflows.',
    },
  ];

  const benefits = [
    {
      title: 'Improved Forecast Accuracy',
      description:
        'Increase forecast accuracy by up to 15% with AI models trained on granular retail demand signals.',
    },
    {
      title: 'Lower Stockout Risk',
      description:
        'Reduce stockouts by 8 to 10% through earlier detection of demand shifts and better replenishment timing.',
    },
    {
      title: 'Lean Inventory Position',
      description:
        'Cut inventory holding by 6 to 12% while improving product availability across locations.',
    },
    {
      title: 'Scalable Planning Operations',
      description:
        'Support millions of SKU-store combinations with a cloud-ready, automated planning architecture.',
    },
  ];

  const challenges = [
    'Inaccurate forecasts driving stockouts and lost sales.',
    'Overstocking that locks working capital and increases waste.',
    'Limited real-time visibility into fast-changing demand patterns.',
    'Manual replenishment processes that react too late to market signals.',
    'Fragmented data spread across operational systems.',
  ];

  const differentiators = [
    'Fully automated ML pipeline from ingestion to decision output.',
    'Scales to millions of SKU-store combinations across regions.',
    'Real-time alerting for anomaly detection and planner intervention.',
    'Business-friendly dashboards for supply chain and commercial teams.',
    'Cloud-ready architecture with API-first integration design.',
  ];

  return (
    <PageTemplate
      title='Demand Forecasting'
      subtitle='AI-Driven Demand Planning & Replenishment Platform'
      description='A next-generation AI-powered demand planning platform designed to transform retail and supply chain operations with accurate forecasts, intelligent replenishment, and real-time planning visibility across geographies and product hierarchies.'
      image='/img/demand_forcasting.jpg'
      features={features}
      benefits={benefits}
    >
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Why Demand Planning Breaks Down</h2>
            <p>
              The platform is designed to solve the planning gaps that create
              stockouts, excess inventory, and slow decision cycles.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-5'>
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className='w-full'
              >
                <article className='h-full rounded-2xl border border-(--color-primary-20) bg-white p-6 shadow-sm'>
                  <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-secondary-20) text-(--color-primary)'>
                    <i className='fas fa-triangle-exclamation text-xl'></i>
                  </div>
                  <p className='m-0 leading-7 text-(--color-typography-secondary)'>
                    {challenge}
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Solution Architecture</h2>
            <p>
              An end-to-end planning ecosystem that unifies data, modeling,
              decision automation, and operational integration.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {architecture.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className='w-full'
              >
                <article className='h-full rounded-2xl border border-(--color-primary-20) bg-white p-6 shadow-sm'>
                  <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-primary-20) text-(--color-primary)'>
                    <i className={`fas ${stage.icon} text-xl`}></i>
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-(--color-primary)'>
                    {stage.title}
                  </h3>
                  <p className='m-0 leading-7 text-(--color-typography-secondary)'>
                    {stage.description}
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-10 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className='section-title text-left'>
                <h2>Business Impact</h2>
                <p>
                  AI-driven planning improves service levels while reducing
                  working capital pressure and planner effort.
                </p>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                {[
                  { label: 'Forecast Accuracy', value: '+15%' },
                  { label: 'Stockouts', value: '8-10% lower' },
                  { label: 'Inventory Holding', value: '6-12% lower' },
                  { label: 'Wastage', value: 'Significantly reduced' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className='rounded-2xl border border-(--color-primary-20) bg-white p-6 shadow-sm'
                  >
                    <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-(--color-primary-80)'>
                      {item.label}
                    </p>
                    <h3 className='m-0 text-3xl font-bold text-(--color-primary)'>
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className='section-title text-left'>
                <h2>Use Case & Differentiators</h2>
                <p>
                  Built for regional retailers that need scalable forecasting
                  and replenishment decisions across complex store networks.
                </p>
              </div>
              <div className='rounded-2xl border border-(--color-primary-20) bg-white p-6 shadow-sm'>
                <p className='mb-6 leading-7 text-(--color-typography-secondary)'>
                  A retail chain operating across UAE, KSA, and neighboring
                  markets uses the platform to generate weekly store-item
                  forecasts, automate replenishment quantities, and improve
                  service levels with less manual planning effort.
                </p>

                <div className='space-y-4'>
                  {differentiators.map((item) => (
                    <div key={item} className='flex items-start gap-3'>
                      <span className='mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--color-success-20) text-(--color-success)'>
                        <i className='fas fa-check text-xs'></i>
                      </span>
                      <p className='m-0 leading-7 text-(--color-typography-secondary)'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default DemandForecasting;
