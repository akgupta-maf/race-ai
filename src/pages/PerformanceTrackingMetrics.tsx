import { motion } from 'framer-motion';
import React from 'react';

const PerformanceTrackingMetrics: React.FC = () => {
  const metricsData = [
    {
      name: 'Revenue Growth',
      value: 45.2,
      unit: '%',
      target: 50,
      status: 'on-track',
      quarter: 'Q1 2026',
    },
    {
      name: 'Customer Satisfaction',
      value: 88,
      unit: 'pts',
      target: 90,
      status: 'on-track',
      quarter: 'Q1 2026',
    },
    {
      name: 'Market Share',
      value: 32.5,
      unit: '%',
      target: 35,
      status: 'at-risk',
      quarter: 'Q1 2026',
    },
    {
      name: 'Operational Efficiency',
      value: 78,
      unit: '%',
      target: 85,
      status: 'at-risk',
      quarter: 'Q1 2026',
    },
    {
      name: 'Employee Retention',
      value: 92,
      unit: '%',
      target: 95,
      status: 'on-track',
      quarter: 'Q1 2026',
    },
    {
      name: 'Cost Reduction',
      value: 12.3,
      unit: '%',
      target: 10,
      status: 'exceeded',
      quarter: 'Q1 2026',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exceeded':
        return {
          bg: 'bg-green-50',
          text: 'text-green-600',
          badge: 'bg-green-100',
        };
      case 'on-track':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-600',
          badge: 'bg-blue-100',
        };
      case 'at-risk':
        return {
          bg: 'bg-yellow-50',
          text: 'text-yellow-600',
          badge: 'bg-yellow-100',
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-600',
          badge: 'bg-gray-100',
        };
    }
  };

  return (
    <div className='space-y-6 p-6'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-8'
      >
        <h1 className='text-3xl font-bold text-gray-800'>Key Metrics</h1>
        <p className='mt-2 text-gray-600'>
          Detailed view of all performance indicators
        </p>
      </motion.div>

      {/* Metrics Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'
      >
        <div className='overflow-x-auto'>
          <table className='w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-700'>
                  Metric
                </th>
                <th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-700'>
                  Current Value
                </th>
                <th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-700'>
                  Target
                </th>
                <th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-700'>
                  Variance
                </th>
                <th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-700'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {metricsData.map((metric, idx) => {
                const variance = metric.value - metric.target;
                const colors = getStatusColor(metric.status);

                return (
                  <motion.tr
                    key={metric.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`hover:${colors.bg} transition`}
                  >
                    <td className='whitespace-nowrap px-6 py-4'>
                      <p className='font-medium text-gray-900'>{metric.name}</p>
                      <p className='text-xs text-gray-500'>{metric.quarter}</p>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-center'>
                      <p className='text-lg font-semibold text-gray-900'>
                        {metric.value}
                        <span className='text-sm text-gray-600'>
                          {metric.unit}
                        </span>
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-center'>
                      <p className='text-gray-600'>
                        {metric.target}
                        <span className='text-sm text-gray-500'>
                          {metric.unit}
                        </span>
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-center'>
                      <p
                        className={`font-medium ${variance >= 0 ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {variance >= 0 ? '+' : ''}
                        {variance.toFixed(1)}
                        {metric.unit}
                      </p>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-center'>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.badge} ${colors.text}`}
                      >
                        {metric.status === 'exceeded'
                          ? '✓ Exceeded'
                          : metric.status === 'on-track'
                            ? '✓ On Track'
                            : metric.status === 'at-risk'
                              ? '⚠ At Risk'
                              : 'Off Track'}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceTrackingMetrics;
