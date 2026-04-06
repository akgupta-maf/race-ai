import { motion } from 'framer-motion';
import React from 'react';

const PerformanceTrackingDashboard: React.FC = () => {
  const metrics = [
    { label: 'Total KPIs', value: '24', change: '+5%', icon: '📊' },
    { label: 'On Target', value: '18', change: '+2%', icon: '✅' },
    { label: 'At Risk', value: '4', change: '-1%', icon: '⚠️' },
    { label: 'Off Target', value: '2', change: '-1%', icon: '❌' },
  ];

  return (
    <div className='space-y-6 p-6'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-8'
      >
        <h1 className='text-3xl font-bold text-gray-800'>Dashboard</h1>
        <p className='mt-2 text-gray-600'>
          Overview of your performance metrics
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition'
          >
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-gray-600'>{metric.label}</p>
                <p className='mt-2 text-3xl font-bold text-gray-900'>
                  {metric.value}
                </p>
              </div>
              <span className='text-3xl'>{metric.icon}</span>
            </div>
            <p className='mt-4 text-sm text-green-600 font-medium'>
              {metric.change} from last month
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='grid grid-cols-1 gap-6 lg:grid-cols-2'
      >
        <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='text-lg font-semibold text-gray-800'>
            Performance Trend
          </h3>
          <div className='mt-6 flex items-end justify-around gap-2'>
            {[40, 65, 50, 75, 60, 80, 90].map((height, idx) => (
              <div
                key={idx}
                className='flex-1 rounded-t-lg bg-blue-500'
                style={{ height: `${height * 2}px` }}
              />
            ))}
          </div>
          <div className='mt-4 text-xs text-gray-600'>
            Jan • Feb • Mar • Apr • May • Jun • Jul
          </div>
        </div>

        <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='text-lg font-semibold text-gray-800'>
            Status Breakdown
          </h3>
          <div className='mt-6 space-y-3'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600'>On Target</span>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-40 rounded-full bg-gray-200'>
                  <div
                    className='h-full rounded-full bg-green-500'
                    style={{ width: '75%' }}
                  />
                </div>
                <span className='text-sm font-medium text-gray-800'>75%</span>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600'>At Risk</span>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-40 rounded-full bg-gray-200'>
                  <div
                    className='h-full rounded-full bg-yellow-500'
                    style={{ width: '17%' }}
                  />
                </div>
                <span className='text-sm font-medium text-gray-800'>17%</span>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600'>Off Target</span>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-40 rounded-full bg-gray-200'>
                  <div
                    className='h-full rounded-full bg-red-500'
                    style={{ width: '8%' }}
                  />
                </div>
                <span className='text-sm font-medium text-gray-800'>8%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceTrackingDashboard;
