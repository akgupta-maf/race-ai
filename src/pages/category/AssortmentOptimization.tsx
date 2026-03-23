import PageTemplate from '@/components/PageTemplate';
import { assetPath } from '@/utils/assetPath';
import { motion } from 'framer-motion';

type AssortmentModule = {
  title: string;
  description: string;
  image: string;
  dashboardLink: string;
  icon: string;
};

const modules: AssortmentModule[] = [
  {
    title: 'Category Roles',
    description:
      'Define and manage strategic roles for each product category to align with business objectives and improve resource allocation.',
    image: '/img/category_roles.png',
    dashboardLink:
      'https://catman.mafcarrefour.local/category-review/category-roles',
    icon: 'fa-th-large',
  },
  {
    title: 'Localization',
    description:
      'Customize assortments by store cluster and local demand signals to improve relevance, conversion, and inventory efficiency.',
    image: '/img/localization_dashboard.png',
    dashboardLink: 'https://catman.mafcarrefour.local/localization/',
    icon: 'fa-map-marked-alt',
  },
  {
    title: 'Rationalization',
    description:
      'Identify and remove underperforming SKUs, simplify portfolio complexity, and improve margins through focused assortment decisions.',
    image: '/img/rationalization_dashboard.png',
    dashboardLink: 'https://catman.mafcarrefour.local/rationalization/',
    icon: 'fa-cut',
  },
  {
    title: 'Whitespace',
    description:
      'Discover market gaps and untapped opportunities to expand assortment into high-potential areas and unlock growth.',
    image: '/img/whitespace_dashboard.png',
    dashboardLink: 'https://catman.mafcarrefour.local/whitespace/',
    icon: 'fa-search',
  },
];

const AssortmentOptimization = () => {
  const features = [
    {
      icon: 'fa-layer-group',
      title: 'Unified Assortment View',
      description:
        'Bring all category optimization capabilities into one strategic workspace.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Actionable Growth Decisions',
      description:
        'Translate data into clear decisions across role, localization, rationalization, and whitespace.',
    },
    {
      icon: 'fa-bullseye',
      title: 'Portfolio Precision',
      description:
        'Balance productivity, shopper relevance, and long-term category growth in one place.',
    },
  ];

  const benefits = [
    {
      title: 'Faster Decision Cycles',
      description:
        'Reduce time-to-action by centralizing key assortment optimization modules.',
    },
    {
      title: 'Higher Portfolio Productivity',
      description:
        'Improve assortment efficiency, margin quality, and growth outcomes.',
    },
    {
      title: 'Stronger Market Relevance',
      description:
        'Adapt category strategies to shopper behavior and local demand patterns.',
    },
  ];

  return (
    <PageTemplate
      title='Assortment Optimization'
      subtitle='One Unified Suite for Category Growth'
      description='Assortment Optimization unifies Category Roles, Localization, Rationalization, and Whitespace into a single strategic solution. Use this umbrella workflow to design better assortments, improve category performance, and unlock profitable growth.'
      image='/img/assortment_home.png'
      features={features}
      benefits={benefits}
    >
      <section className='section bg-light'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='section-title'>
            <h2>Assortment Optimization Modules</h2>
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
                      className='h-full min-h-56 w-full rouned-xl'
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
                        Open {module.title} Dashboard
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

export default AssortmentOptimization;
