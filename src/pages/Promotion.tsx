import PageTemplate from '@/components/PageTemplate';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';

type PromotionModule = {
  title: string;
  description: string;
  image: string;
  dashboardLink: string;
  icon: string;
};

const modules: PromotionModule[] = [
  {
    title: 'Promotion Planning Dashboard',
    description:
      'Design, schedule, and monitor promotional events with complete campaign visibility across teams and timelines.',
    image: '/img/promo_dashboard.png',
    dashboardLink: 'https://pnp.retailsso.com/promotions/dashboards/main',
    icon: 'fa-chart-pie',
  },
  {
    title: 'Price Optimization Dashboard',
    description:
      'Analyze KVI pricing behavior and optimize strategy with focused pricing insights built for faster commercial action.',
    image: '/img/pricing_dashboard.png',
    dashboardLink:
      'https://pnp.mafcarrefour.local/pricing/dashboard/pricing-kvi',
    icon: 'fa-tag',
  },
];

const Promotion = () => {
  const features = [
    {
      icon: 'fa-percent',
      title: 'Promotion Planning',
      description:
        'End-to-end event planning powered by AI-driven item recommendations, built-in seasonality and elasticity, competitor intelligence, and margin-optimized volume simulations to design high-impact, data-backed promotions.',
    },
    {
      icon: 'fa-bolt',
      title: 'Quick Forecast (New)',
      description:
        'Instant promotion volume forecasting and price simulation for any custom item list, enabling rapid scenario testing and on-the-fly promotion decisions.',
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Promotion Effectiveness',
      description:
        'Executive view of promotion effectiveness, highlighting sales uplift, customer reach, halo effects, and ROI, clearly showing what worked, what did not, and why, across departments, promo types, and time periods.',
    },
    {
      icon: 'fa-history',
      title: 'Historical Event Deep Dive',
      description:
        'In-depth analysis of past events with period-on-period comparison, item-level performance insights, financial effectiveness, and operational efficiency, supported by built-in performance segmentation.',
    },
    {
      icon: 'fa-tags',
      title: 'Price Optimization',
      description:
        'Science-based KVI, KCI, and Background item recommendations to strengthen price perception by investing in the products that matter most to customers, while protecting margins on background items.',
    },
    {
      icon: 'fa-globe',
      title: 'Price Intelligence',
      description:
        'Daily refreshed competitor price intelligence covering 10k+ items across major competitors and markets, providing a clear and consistent view of price index positioning.',
    },
  ];

  const benefits = [
    {
      title: 'Higher ROI',
      description: 'Maximize return on promotional investments.',
    },
    {
      title: 'Better Targeting',
      description: 'Target the right customers with the right offers.',
    },
    {
      title: 'Reduced Cannibalization',
      description: 'Minimize negative impacts on regular sales.',
    },
    {
      title: 'Improved Planning',
      description: 'Make data-driven promotion planning decisions.',
    },
  ];

  return (
    <PageTemplate
      title='Pricing & Promotion Effectiveness'
      subtitle='One Integrated Suite for Promotion & Pricing Intelligence'
      description='Plan, execute, and measure pricing and promotional campaigns for higher ROI. Align pricing depth, promotional strategy, and customer response in one integrated analytics framework designed for enterprise retail teams.'
      image='/img/pnp_hero.webp'
      features={features}
      benefits={benefits}
    >
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Pricing & Promotion Modules</h2>
            <p>Explore each module and open its dedicated dashboard.</p>
          </div>

          <div className='flex flex-col gap-6'>
            {modules.map((module, index) => (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className='w-full overflow-hidden rounded-2xl border border-(--color-primary-20) bg-white shadow-sm'
              >
                <div className='grid gap-0 grid-cols-12'>
                  <div className='h-full w-full p-4 col-span-5'>
                    <img
                      src={assetPath(module.image)}
                      alt={module.title}
                      className='h-full min-h-56 w-full rounded-xl object-cover'
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = assetPath('/img/project-1.jpg');
                      }}
                    />
                  </div>

                  <div className='flex h-full flex-col justify-between p-4 col-span-7'>
                    <div>
                      <div className='mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-secondary-20) text-(--color-primary)'>
                        <i className={`fas ${module.icon} text-xl`}></i>
                      </div>
                      <h3 className='mb-3 text-2xl font-bold text-(--color-primary)'>
                        {module.title}
                      </h3>
                      <p className='text-base leading-7 text-(--color-typography)'>
                        {module.description}
                      </p>
                    </div>

                    <div className='mt-6'>
                      <a
                        href={module.dashboardLink}
                        className='inline-flex items-center justify-center rounded-xl bg-(--color-primary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--color-primary-80)'
                      >
                        Open {module.title}
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

export default Promotion;
