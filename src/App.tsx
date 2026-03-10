import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import useBootstrap from './hooks/useBootstrap';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Business Insights
import InsightAnalysis from './pages/insights/InsightAnalysis';
import BoycottAnalysis from './pages/insights/BoycottAnalysis';

// Customer Value Management
import CustomerSegmentation from './pages/customer/CustomerSegmentation';
import Customer360 from './pages/customer/Customer360';
import CampaignDashboard from './pages/customer/CampaignDashboard';

// HR & Sustainability
import HumanCapitalAnalytics from './pages/hr/HumanCapitalAnalytics';
import CustomerExperience from './pages/hr/CustomerExperience';

// Negotiation Analytics
import SupplierNegotiation from './pages/negotiation/SupplierNegotiation';
import NegotiationGap from './pages/negotiation/NegotiationGap';
import CommodityAnalysis from './pages/negotiation/CommodityAnalysis';

// Category Optimization
import CategoryRoles from './pages/category/CategoryRoles';
import Localization from './pages/category/Localization';
import Rationalization from './pages/category/Rationalization';
import CustomerDecisionTree from './pages/category/CustomerDecisionTree';

// Other Pages
import Promotion from './pages/Promotion';
import Sustainability from './pages/Sustainability';
import RaceGPT from './pages/RaceGPT';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  useBootstrap(); // Initialize Bootstrap JS
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Business Insights */}
          <Route path="insights/analysis" element={<InsightAnalysis />} />
          <Route path="insights/boycott" element={<BoycottAnalysis />} />
          
          {/* Customer Value Management */}
          <Route path="customer/segmentation" element={<CustomerSegmentation />} />
          <Route path="customer/360" element={<Customer360 />} />
          <Route path="customer/campaign" element={<CampaignDashboard />} />
          
          {/* HR & Sustainability */}
          <Route path="hr/analytics" element={<HumanCapitalAnalytics />} />
          <Route path="hr/experience" element={<CustomerExperience />} />
          
          {/* Negotiation Analytics */}
          <Route path="negotiation/supplier" element={<SupplierNegotiation />} />
          <Route path="negotiation/gap" element={<NegotiationGap />} />
          <Route path="negotiation/commodity" element={<CommodityAnalysis />} />
          
          {/* Category Optimization */}
          <Route path="category/roles" element={<CategoryRoles />} />
          <Route path="category/localization" element={<Localization />} />
          <Route path="category/rationalization" element={<Rationalization />} />
          <Route path="category/decision-tree" element={<CustomerDecisionTree />} />
          
          {/* Other */}
          <Route path="promotion" element={<Promotion />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="race-gpt" element={<RaceGPT />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
