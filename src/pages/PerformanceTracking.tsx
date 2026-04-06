import PerformanceTrackingHeader from '@/components/PerformanceTrackingHeader';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  FiActivity,
  FiBarChart2,
  FiDollarSign,
  FiLayers,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';

type KpiRow = {
  kpi: string;
  target: string;
  actual: string;
};

type SolutionGroup = {
  solution: string;
  isTotal?: boolean;
  rows: KpiRow[];
};

type GaugeCardProps = {
  title: string;
  actual: number;
  target: number;
  unit: string;
  accentClass: string;
};

const getMetricKey = (solution: string, kpi: string) => `${solution}::${kpi}`;

const data: SolutionGroup[] = [
  {
    solution: 'CVM',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '21.2', actual: '0' },
      {
        kpi: 'Loyalty Incremental Revenue (M AED)',
        target: '288.3',
        actual: '0',
      },
      { kpi: '% Adoption', target: '11.7', actual: '0' },
      { kpi: 'Active Customers (K)', target: '7,180.0', actual: '0' },
      { kpi: '%Loyalty Penetration', target: '', actual: '0' },
    ],
  },
  {
    solution: 'Assortment',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '10.3', actual: '0' },
      { kpi: 'Incremental Revenue (M AED)', target: '88.8', actual: '0' },
      { kpi: '%SKU Reduction **', target: '-', actual: '0' },
      { kpi: '%Adoption', target: '-', actual: '0' },
    ],
  },
  {
    solution: 'Promotions',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '28.1', actual: '0' },
      { kpi: 'Incremental Revenue (M AED)', target: '256.0', actual: '0' },
      { kpi: '%Promo Sales Adoption', target: '-', actual: '0' },
    ],
  },
  {
    solution: 'Demand Forecasting',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '12.0', actual: '0' },
      { kpi: 'Incremental Revenue (M AED)', target: '92.0', actual: '0' },
      { kpi: 'Forecast Accuracy', target: '-', actual: '0' },
      { kpi: 'Forecast Adoption', target: '-', actual: '0' },
    ],
  },
  {
    solution: 'Human Capital',
    rows: [
      { kpi: 'Frontliner Productivity', target: '109.1', actual: '0' },
      {
        kpi: 'Services Roles Centralization (8 Job Families)*',
        target: '54%',
        actual: '0',
      },
    ],
  },
  {
    solution: 'Total',
    isTotal: true,
    rows: [
      { kpi: 'NOPAT (M AED)', target: '71.6', actual: '0' },
      { kpi: 'Incremental Revenue (M AED)', target: '725.0', actual: '0' },
    ],
  },
];

const initialActuals = data.reduce<Record<string, string>>(
  (accumulator, group) => {
    group.rows.forEach((row) => {
      accumulator[getMetricKey(group.solution, row.kpi)] = row.actual;
    });

    return accumulator;
  },
  {},
);

const parseMetricValue = (value: string | undefined): number => {
  if (!value) {
    return 0;
  }

  const normalizedValue = value.replace(/,/g, '').trim();
  const parsedValue = Number.parseFloat(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
};

const getKpiIcon = (kpi: string): IconType => {
  const normalizedKpi = kpi.toLowerCase();

  if (normalizedKpi.includes('nopat') || normalizedKpi.includes('revenue')) {
    return FiDollarSign;
  }

  if (normalizedKpi.includes('forecast')) {
    return FiBarChart2;
  }

  if (normalizedKpi.includes('customer')) {
    return FiUsers;
  }

  if (normalizedKpi.includes('promo')) {
    return FiSend;
  }

  if (normalizedKpi.includes('adoption')) {
    return FiTrendingUp;
  }

  if (normalizedKpi.includes('penetration') || normalizedKpi.includes('%')) {
    return FiTarget;
  }

  if (normalizedKpi.includes('sku') || normalizedKpi.includes('roles')) {
    return FiLayers;
  }

  return FiActivity;
};

const getProgressTone = (): string => 'bg-(--color-secondary)';

const GaugeCard: React.FC<GaugeCardProps> = ({
  title,
  actual,
  target,
  unit,
  accentClass,
}) => {
  const safeTarget = target > 0 ? target : 1;
  const progress = Math.min(actual / safeTarget, 1);
  const percentLabel = Math.round((actual / safeTarget) * 100);
  const radius = 76;
  const circumference = Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className='rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.08)]'
    >
      <div className='mb-3 flex items-start justify-between gap-3'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-400'>
            Summary
          </p>
          <h3 className='mt-1.5 text-lg font-bold text-slate-900'>{title}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${accentClass}`}
        >
          {percentLabel}%
        </span>
      </div>

      <div className='relative mx-auto flex w-full max-w-55 justify-center'>
        <svg viewBox='0 0 200 120' className='h-32 w-full overflow-visible'>
          <path
            d='M 24 100 A 76 76 0 0 1 176 100'
            fill='none'
            stroke='rgb(226 232 240)'
            strokeWidth='18'
            strokeLinecap='round'
          />
          <path
            d='M 24 100 A 76 76 0 0 1 176 100'
            fill='none'
            stroke='url(#gaugeGradient)'
            strokeWidth='18'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
          <defs>
            <linearGradient
              id='gaugeGradient'
              x1='0%'
              x2='100%'
              y1='0%'
              y2='0%'
            >
              <stop offset='0%' stopColor='var(--color-secondary-60)' />
              <stop offset='45%' stopColor='var(--color-secondary-80)' />
              <stop offset='100%' stopColor='var(--color-secondary)' />
            </linearGradient>
          </defs>
        </svg>

        <div className='absolute bottom-2 flex flex-col items-center text-center'>
          <span className='text-[1.8rem] font-black tracking-tight text-slate-900'>
            {actual.toFixed(1)}
          </span>
          <span className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>
            {unit} achieved
          </span>
        </div>
      </div>

      <div className='mt-1 grid grid-cols-2 gap-2.5'>
        <div className='rounded-2xl bg-slate-50 px-3 py-2.5'>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>
            Actual
          </p>
          <p className='mt-1 text-base font-bold text-slate-900'>
            {actual.toFixed(1)} {unit}
          </p>
        </div>
        <div className='rounded-2xl bg-slate-50 px-3 py-2.5'>
          <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-400'>
            Target
          </p>
          <p className='mt-1 text-base font-bold text-slate-900'>
            {target.toFixed(1)} {unit}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PerformanceTracking: React.FC = () => {
  const [actuals, setActuals] =
    useState<Record<string, string>>(initialActuals);

  const handleChange = (solution: string, kpi: string, value: string) => {
    setActuals((prev) => ({ ...prev, [getMetricKey(solution, kpi)]: value }));
  };

  const totalGroup = data.find((group) => group.solution === 'Total');
  const totalNopatTarget = parseMetricValue(
    totalGroup?.rows.find((row) => row.kpi === 'NOPAT (M AED)')?.target,
  );
  const totalRevenueTarget = parseMetricValue(
    totalGroup?.rows.find((row) => row.kpi === 'Incremental Revenue (M AED)')
      ?.target,
  );
  const totalNopatActual = parseMetricValue(
    actuals[getMetricKey('Total', 'NOPAT (M AED)')],
  );
  const totalRevenueActual = parseMetricValue(
    actuals[getMetricKey('Total', 'Incremental Revenue (M AED)')],
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <PerformanceTrackingHeader />

      {/* Page Header */}
      <section className='hero py-1'>
        <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='mx-auto max-w-lg text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='mb-0 text-xl font-bold md:text-2xl'>
              Performance Tracking
            </h1>
            <p className='mx-auto max-w-lg text-[11px] leading-3 text-white/85 md:text-lg'>
              2026 KPI targets and year-to-date actuals across all solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table Section */}
      <div className='mx-auto max-w-6xl px-4 py-10'>
        <div className='mb-8 grid gap-6 lg:grid-cols-2'>
          <GaugeCard
            title='Total NOPAT Achieved'
            actual={totalNopatActual}
            target={totalNopatTarget}
            unit='M AED'
            accentClass='bg-sky-100 text-sky-700'
          />
          <GaugeCard
            title='Incremental Revenue Achieved'
            actual={totalRevenueActual}
            target={totalRevenueTarget}
            unit='M AED'
            accentClass='bg-emerald-100 text-emerald-700'
          />
        </div>

        <div className='overflow-hidden rounded-2xl border border-gray-200 shadow-md'>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              {/* Table Header */}
              <thead>
                <tr style={{ background: 'var(--color-primary, #1e3a5f)' }}>
                  <th className='w-40 border-r border-white/20 px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-white'>
                    Solution
                  </th>
                  <th className='border-r border-white/20 px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-white'>
                    KPI
                  </th>
                  <th className='w-44 border-r border-white/20 px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white'>
                    2026 Target
                  </th>
                  <th className='w-48 px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white'>
                    2026 Actuals YTD
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {data.map((group) =>
                  group.rows.map((row, rowIdx) => {
                    const isFirst = rowIdx === 0;
                    const rowCount = group.rows.length;
                    const isEvenGroup = data.indexOf(group) % 2 === 0;
                    const actualKey = getMetricKey(group.solution, row.kpi);
                    const actualValue = actuals[actualKey] ?? '';
                    const targetValue = parseMetricValue(row.target);
                    const parsedActualValue = parseMetricValue(actualValue);
                    const progress =
                      targetValue > 0
                        ? Math.min(parsedActualValue / targetValue, 1)
                        : 0;
                    const progressPercent = Math.round(progress * 100);
                    const KpiIcon = getKpiIcon(row.kpi);
                    const bgClass = group.isTotal
                      ? 'bg-slate-100'
                      : isEvenGroup
                        ? 'bg-sky-50'
                        : 'bg-white';

                    return (
                      <tr
                        key={getMetricKey(group.solution, row.kpi)}
                        className={`${bgClass} border-t border-gray-200 transition-colors hover:brightness-95`}
                      >
                        {/* Solution cell — only rendered for the first row of each group */}
                        {isFirst && (
                          <td
                            rowSpan={rowCount}
                            className='border-r border-gray-200 px-6 py-3 align-middle'
                            style={{
                              borderRight: '1px solid #e5e7eb',
                            }}
                          >
                            <span
                              className={`text-sm ${group.isTotal ? 'font-extrabold text-slate-800' : 'font-semibold text-slate-700'}`}
                            >
                              {group.solution}
                            </span>
                          </td>
                        )}

                        {/* KPI */}
                        <td className='border-r border-gray-200 px-6 py-3 text-slate-700'>
                          <div className='flex items-center gap-3'>
                            <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500'>
                              <KpiIcon className='h-4 w-4' />
                            </span>
                            <span
                              className={
                                group.isTotal ? 'font-bold text-slate-800' : ''
                              }
                            >
                              {row.kpi}
                            </span>
                          </div>
                        </td>

                        {/* 2026 Target */}
                        <td className='border-r border-gray-200 px-6 py-3 text-center'>
                          <span
                            className={`font-bold ${row.target === '-' || row.target === '' ? 'text-slate-400' : 'text-slate-800'}`}
                          >
                            {row.target === '' ? '—' : row.target}
                          </span>
                        </td>

                        {/* 2026 Actuals YTD */}
                        <td className='px-4 py-2'>
                          <div className='space-y-2'>
                            <div className='flex items-center gap-3'>
                              <input
                                type='text'
                                value={actualValue}
                                onChange={(e) =>
                                  handleChange(
                                    group.solution,
                                    row.kpi,
                                    e.target.value,
                                  )
                                }
                                placeholder='—'
                                className='w-24 rounded-lg border border-gray-200 bg-white/80 px-3 py-1.5 text-center text-sm font-medium text-slate-700 outline-none transition placeholder:text-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                              />
                              <span className='min-w-12 text-right text-xs font-semibold text-slate-500'>
                                {targetValue > 0
                                  ? `${progressPercent}%`
                                  : 'N/A'}
                              </span>
                            </div>
                            <div className='h-2.5 overflow-hidden rounded-full bg-slate-200'>
                              <div
                                className={`h-full rounded-full transition-all ${getProgressTone()}`}
                                style={{
                                  width: `${targetValue > 0 ? progressPercent : 0}%`,
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }),
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className='mt-4 text-xs text-gray-400'>
          * Services Roles Centralization covers 8 Job Families. &nbsp; ** SKU
          Reduction target TBD.
        </p>
      </div>
    </div>
  );
};

export default PerformanceTracking;
