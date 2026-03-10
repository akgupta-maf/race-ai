import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Loader from './Loader';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
