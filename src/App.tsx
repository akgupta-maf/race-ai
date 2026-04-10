import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

// Pages
import About from './pages/About';
import Contact from './pages/Contact';
import DemandForecasting from './pages/DemandForecasting';
import Home from './pages/Home';
import Services from './pages/Services';

// Business Insights
import BoycottAnalysis from './pages/insights/BoycottAnalysis';
import InsightAnalysis from './pages/insights/InsightAnalysis';

// Customer Value Management
import CampaignDashboard from './pages/customer/CampaignDashboard';
import Customer360 from './pages/customer/Customer360';
import CustomerSegmentation from './pages/customer/CustomerSegmentation';

// HR & Sustainability
import CustomerExperience from './pages/hr/CustomerExperience';
import HumanCapitalAnalytics from './pages/hr/HumanCapitalAnalytics';

// Negotiation Analytics
import CommodityAnalysis from './pages/negotiation/CommodityAnalysis';
import NegotiationGap from './pages/negotiation/NegotiationGap';
import SupplierNegotiation from './pages/negotiation/SupplierNegotiation';

// Category Optimization
import AssortmentOptimization from './pages/category/AssortmentOptimization';

// Other Pages
import NotFound from './pages/NotFound';
import Promotion from './pages/Promotion';
import RaceGPT from './pages/RaceGPT';
import Sustainability from './pages/Sustainability';

const App: React.FC = () => {
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
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='demand-forecasting' element={<DemandForecasting />} />

          {/* Business Insights */}
          <Route path='insights/analysis' element={<InsightAnalysis />} />
          <Route path='insights/boycott' element={<BoycottAnalysis />} />

          {/* Customer Value Management */}
          <Route
            path='customer/segmentation'
            element={<CustomerSegmentation />}
          />
          <Route path='customer/360' element={<Customer360 />} />
          <Route path='customer/campaign' element={<CampaignDashboard />} />

          {/* HR & Sustainability */}
          <Route path='hr/analytics' element={<HumanCapitalAnalytics />} />
          <Route path='hr/experience' element={<CustomerExperience />} />

          {/* Negotiation Analytics */}
          <Route
            path='negotiation/supplier'
            element={<SupplierNegotiation />}
          />
          <Route path='negotiation/gap' element={<NegotiationGap />} />
          <Route path='negotiation/commodity' element={<CommodityAnalysis />} />

          {/* Category Optimization */}
          <Route
            path='category/assortment-optimization'
            element={<AssortmentOptimization />}
          />
          <Route path='category/roles' element={<AssortmentOptimization />} />
          <Route
            path='category/localization'
            element={<AssortmentOptimization />}
          />
          <Route
            path='category/rationalization'
            element={<AssortmentOptimization />}
          />
          <Route
            path='category/whitespace'
            element={<AssortmentOptimization />}
          />

          {/* Other */}
          <Route path='promotion' element={<Promotion />} />
          <Route path='sustainability' element={<Sustainability />} />
          <Route path='race-gpt' element={<RaceGPT />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
