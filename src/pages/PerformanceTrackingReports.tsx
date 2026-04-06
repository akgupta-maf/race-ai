import { motion } from 'framer-motion';
import React, { useState } from 'react';

const PerformanceTrackingReports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reports = [
    {
      id: 'quarterly-review',
      title: 'Quarterly Review',
      description: 'Comprehensive review of Q1 2026 performance',
      date: '2026-03-31',
      format: 'PDF',
      size: '2.4 MB',
      icon: '📋',
    },
    {
      id: 'monthly-summary',
      title: 'Monthly Summary',
      description: 'March 2026 performance summary',
      date: '2026-03-30',
      format: 'PDF',
      size: '1.2 MB',
      icon: '📊',
    },
    {
      id: 'kpi-analysis',
      title: 'KPI Deep Dive Analysis',
      description: 'Detailed analysis of Q1 KPI performance',
      date: '2026-03-28',
      format: 'XLSX',
      size: '3.8 MB',
      icon: '📈',
    },
    {
      id: 'variance-report',
      title: 'Variance Report',
      description: 'Variance analysis and root cause identification',
      date: '2026-03-25',
      format: 'PDF',
      size: '1.8 MB',
      icon: '📉',
    },
    {
      id: 'predictive-forecast',
      title: 'Predictive Forecast',
      description: 'Q2 2026 forecast and predictions',
      date: '2026-03-20',
      format: 'XLSX',
      size: '2.1 MB',
      icon: '🔮',
    },
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      description: 'High-level summary for executives',
      date: '2026-03-15',
      format: 'PDF',
      size: '0.9 MB',
      icon: '👔',
    },
  ];

  return (
    <div className='space-y-6 p-6'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-8'
      >
        <h1 className='text-3xl font-bold text-gray-800'>Reports</h1>
        <p className='mt-2 text-gray-600'>
          Access detailed performance reports and analysis
        </p>
      </motion.div>

      {/* Reports Grid */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {reports.map((report, idx) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedReport(report.id)}
            className={`cursor-pointer rounded-lg border-2 p-6 transition ${
              selectedReport === report.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-md'
            }`}
          >
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <div className='mb-2 flex items-center gap-2'>
                  <span className='text-2xl'>{report.icon}</span>
                  <span className='rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600'>
                    {report.format}
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {report.title}
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  {report.description}
                </p>
                <div className='mt-4 flex items-center justify-between text-xs text-gray-500'>
                  <span>{new Date(report.date).toLocaleDateString()}</span>
                  <span>{report.size}</span>
                </div>
              </div>
            </div>

            {selectedReport === report.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='mt-4 border-t border-blue-200 pt-4'
              >
                <button className='w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700'>
                  ⬇️ Download
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
      >
        <h3 className='mb-4 text-lg font-semibold text-gray-800'>
          Quick Actions
        </h3>
        <div className='flex flex-wrap gap-3'>
          <button className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700'>
            🔄 Generate Report
          </button>
          <button className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50'>
            📧 Email Report
          </button>
          <button className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50'>
            📊 Export to Excel
          </button>
          <button className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50'>
            🔗 Share
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceTrackingReports;
