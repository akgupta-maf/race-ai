import { motion } from 'framer-motion';
import React from 'react';

type DashboardLaunchSectionProps = {
  sectionTitle: string;
  sectionDescription: string;
  badge: string;
  cardTitle: string;
  cardDescription: string;
  icon: string;
  href: string;
};

const DashboardLaunchSection: React.FC<DashboardLaunchSectionProps> = ({
  sectionTitle,
  sectionDescription,
  badge,
  cardTitle,
  cardDescription,
  icon,
  href,
}) => {
  const handleOpenDashboard = (): void => {
    window.location.href = href;
  };

  return (
    <section className='relative overflow-hidden py-20 md:py-24 mb-4'>
      <div className='mx-auto w-full max-w-310 px-4 sm:px-6 lg:px-8'>
        {/* <div className='mx-auto mb-10 max-w-3xl text-center md:mb-12'>
          <h2 className='mb-3 text-4xl font-extrabold tracking-tight text-(--color-primary) md:text-5xl'>
            {sectionTitle}
          </h2>
          <p className='mx-auto max-w-2xl text-base leading-8 text-(--color-typography-secondary) md:text-lg'>
            {sectionDescription}
          </p>
        </div> */}

        <motion.div
          className='mx-auto max-w-5xl'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <article className='group relative overflow-hidden rounded-3xl border border-[rgba(49,37,28,0.10)] bg-white/95 p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)] md:p-8'>
            <div className='absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-(--color-primary) to-(--color-burgundy)' />

            <div className='grid gap-6 pl-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-7 p-4'>
              <div className='min-w-0'>
                <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'>
                  <div className='inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--color-secondary-20) text-2xl text-(--color-primary) shadow-[inset_0_0_0_1px_rgba(49,37,28,0.08)]'>
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <span className='inline-flex w-fit items-center rounded-full bg-(--color-primary-20) px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-(--color-primary-80)'>
                    {badge}
                  </span>
                </div>

                <h3 className='mb-3 text-3xl font-extrabold tracking-tight text-(--color-primary) md:text-[2rem]'>
                  {cardTitle}
                </h3>
                <p className='max-w-3xl text-base leading-8 text-(--color-typography)'>
                  {cardDescription}
                </p>
              </div>

              <div className='flex items-center md:justify-center'>
                <button
                  type='button'
                  className='inline-flex w-full items-center justify-center overflow-hidden rounded-xl! bg-linear-to-r from-(--color-primary) to-(--color-burgundy) px-6 py-2 text-sm font-bold text-white shadow-[0_16px_28px_rgba(49,37,28,0.22)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[rgba(180,151,90,0.35)] sm:w-auto sm:min-w-48'
                  onClick={handleOpenDashboard}
                >
                  Open Dashboard
                </button>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardLaunchSection;
