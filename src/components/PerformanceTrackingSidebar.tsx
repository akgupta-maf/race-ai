import { useAuth } from '@/contexts/AuthContext';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PerformanceTrackingSidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      path: '/performance-tracking',
      label: 'KPI Tracking',
      icon: '📊',
    },
    {
      path: '/performance-tracking/dashboard',
      label: 'Dashboard',
      icon: '📈',
    },
    {
      path: '/performance-tracking/metrics',
      label: 'Metrics',
      icon: '📉',
    },
    {
      path: '/performance-tracking/reports',
      label: 'Reports',
      icon: '📄',
    },
  ];

  return (
    <aside
      className={`flex flex-col border-r border-gray-200 bg-white transition-all ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Header */}
      <div className='flex items-center justify-between border-b border-gray-200 px-4 py-4'>
        {!isCollapsed && (
          <h2 className='text-sm font-bold text-gray-800'>Performance</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='rounded-lg p-1 text-gray-600 hover:bg-gray-100'
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Menu Items */}
      <nav className='flex-1 space-y-1 px-2 py-4'>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              isActive(item.path)
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className='text-lg'>{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className='border-t border-gray-200 px-2 py-4'>
        <button
          onClick={() => logout()}
          className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50'
        >
          <span className='text-lg'>🚪</span>
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default PerformanceTrackingSidebar;
