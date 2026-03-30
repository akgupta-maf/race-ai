import { motion } from 'framer-motion';
import React, { useState } from 'react';

type KpiRow = {
  kpi: string;
  target: string;
};

type SolutionGroup = {
  solution: string;
  isTotal?: boolean;
  rows: KpiRow[];
};

const data: SolutionGroup[] = [
  {
    solution: 'CVM',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '21.2' },
      { kpi: 'Loyalty Incremental Revenue (M AED)', target: '288.3' },
      { kpi: '% Adoption', target: '11.7' },
      { kpi: 'Active Customers (K)', target: '7,180.0' },
      { kpi: '%Loyalty Penetration', target: '' },
    ],
  },
  {
    solution: 'Assortment',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '10.3' },
      { kpi: 'Incremental Revenue (M AED)', target: '88.8' },
      { kpi: '%SKU Reduction **', target: '-' },
      { kpi: '%Adoption', target: '-' },
    ],
  },
  {
    solution: 'Promotions',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '28.1' },
      { kpi: 'Incremental Revenue (M AED)', target: '256.0' },
      { kpi: '%Promo Sales Adoption', target: '-' },
    ],
  },
  {
    solution: 'Demand Forecasting',
    rows: [
      { kpi: 'NOPAT (M AED)', target: '12.0' },
      { kpi: 'Incremental Revenue (M AED)', target: '92.0' },
      { kpi: 'Forecast Accuracy', target: '-' },
      { kpi: 'Forecast Adoption', target: '-' },
    ],
  },
  {
    solution: 'Human Capital',
    rows: [
      { kpi: 'Frontliner Productivity', target: '109.1' },
      { kpi: 'Services Roles Centralization (8 Job Families)*', target: '54%' },
    ],
  },
  {
    solution: 'Total',
    isTotal: true,
    rows: [
      { kpi: 'NOPAT (M AED)', target: '71.6' },
      { kpi: 'Incremental Revenue (M AED)', target: '725.0' },
    ],
  },
];

const PerformanceTracking: React.FC = () => {
  const [actuals, setActuals] = useState<Record<string, string>>({});

  const getKey = (solution: string, kpi: string) => `${solution}::${kpi}`;

  const handleChange = (solution: string, kpi: string, value: string) => {
    setActuals((prev) => ({ ...prev, [getKey(solution, kpi)]: value }));
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Page Header */}
      <section className='hero py-16'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center text-white'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className='mb-3 text-4xl font-bold md:text-5xl'>
              Performance Tracking
            </h1>
            <p className='mx-auto max-w-3xl text-lg text-white'>
              2026 KPI targets and year-to-date actuals across all solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table Section */}
      <div className='mx-auto max-w-6xl px-4 py-10'>
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
                    const bgClass = group.isTotal
                      ? 'bg-slate-100'
                      : isEvenGroup
                        ? 'bg-sky-50'
                        : 'bg-white';

                    return (
                      <tr
                        key={getKey(group.solution, row.kpi)}
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
                          <span
                            className={
                              group.isTotal ? 'font-bold text-slate-800' : ''
                            }
                          >
                            {row.kpi}
                          </span>
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
                        <td className='px-4 py-2 text-center'>
                          <input
                            type='text'
                            value={
                              actuals[getKey(group.solution, row.kpi)] ?? ''
                            }
                            onChange={(e) =>
                              handleChange(
                                group.solution,
                                row.kpi,
                                e.target.value,
                              )
                            }
                            placeholder='—'
                            className='w-full rounded-lg border border-gray-200 bg-white/80 px-3 py-1.5 text-center text-sm font-medium text-slate-700 outline-none transition placeholder:text-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
                          />
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
