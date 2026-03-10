/// <reference types="react" />

import { assetPath } from '@/utils/assetPath';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-navbar ${isScrolled ? 'site-navbar-scrolled' : ''}`}
    >
      <nav className='navbar navbar-expand-lg'>
        <div className='container nav-shell'>
          <Link
            to='/'
            className='navbar-brand nav-brand'
            onClick={closeMobileMenu}
          >
            <img
              src={assetPath('/img/logo_carr2.png')}
              alt='RACE.AI Logo'
              className='nav-logo'
            />
            <span>RACE.AI</span>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            onClick={toggleMobileMenu}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className={`collapse navbar-collapse nav-collapse ${isMobileMenuOpen ? 'show' : ''}`}
          >
            <ul className='navbar-nav ms-auto nav-links'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about'
                  className='nav-link'
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/services'
                  className='nav-link'
                  onClick={closeMobileMenu}
                >
                  Expertise
                </NavLink>
              </li>

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                >
                  Quick Links
                </a>
                <ul className='dropdown-menu quick-links-menu'>
                  <li>
                    <h6 className='dropdown-header'>Business</h6>
                  </li>
                  <li>
                    <Link
                      to='/insights/analysis'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Insight Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/insights/boycott'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Boycott Analysis
                    </Link>
                  </li>
                  <li>
                    <h6 className='dropdown-header'>Customer</h6>
                  </li>
                  <li>
                    <Link
                      to='/customer/segmentation'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Customer Segmentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/customer/360'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Dashboard Customer 360
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/customer/campaign'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Campaign Dashboard
                    </Link>
                  </li>
                  <li>
                    <h6 className='dropdown-header'>Operations</h6>
                  </li>
                  <li>
                    <Link
                      to='/negotiation/supplier'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Supplier Negotiation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/category/roles'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Category Roles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/promotion'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Pricing & Promotion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/sustainability'
                      className='dropdown-item'
                      onClick={closeMobileMenu}
                    >
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  className='nav-link'
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
