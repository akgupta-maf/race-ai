import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import PerformanceTracking from './pages/PerformanceTracking';
import './styles/main.css';

// Dummy page components
const Dashboard: React.FC = () => (
  <div className='p-8'>
    <h1 className='text-3xl font-bold'>Dashboard</h1>
    <p className='mt-4 text-gray-600'>Dashboard content coming soon</p>
  </div>
);

const Metrics: React.FC = () => (
  <div className='p-8'>
    <h1 className='text-3xl font-bold'>Metrics</h1>
    <p className='mt-4 text-gray-600'>Metrics content coming soon</p>
  </div>
);

const Reports: React.FC = () => (
  <div className='p-8'>
    <h1 className='text-3xl font-bold'>Reports</h1>
    <p className='mt-4 text-gray-600'>Reports content coming soon</p>
  </div>
);

const PerformanceTrackingApp: React.FC = () => {
  return (
    <BrowserRouter basename='/performance-tracking'>
      <AuthProvider>
        <ProtectedRoute>
          <Routes>
            <Route index element={<PerformanceTracking />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='metrics' element={<Metrics />} />
            <Route path='reports' element={<Reports />} />
          </Routes>
        </ProtectedRoute>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default PerformanceTrackingApp;
