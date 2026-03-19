/// <reference types="react" />

import { assetPath } from '@/utils/assetPath';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState<boolean>(false);
  const quickLinksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        quickLinksRef.current &&
        !quickLinksRef.current.contains(event.target as Node)
      ) {
        setIsQuickLinksOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
    setIsQuickLinksOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-(--color-primary-20) text-(--color-primary)'
        : 'text-(--color-typography) hover:bg-(--color-primary-20) hover:text-(--color-primary)'
    }`;

  return (
    <header className='sticky top-0 z-50'>
      <nav
        className={`border-b border-(--color-primary-20)/60 bg-white/95 backdrop-blur transition-shadow ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'>
          <Link
            to='/'
            className='flex items-center gap-2 text-lg font-bold text-(--color-primary)'
            onClick={closeMobileMenu}
          >
            <img
              src={assetPath('/img/logo_carr2.png')}
              alt='RACE.AI Logo'
              className='h-9 w-auto'
            />
            <span>RACE.AI</span>
          </Link>

          <button
            className='inline-flex items-center rounded-lg border border-(--color-primary-20) px-3 py-2 text-(--color-primary) transition hover:bg-(--color-primary-20) lg:hidden'
            type='button'
            onClick={toggleMobileMenu}
            aria-label='Toggle navigation'
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>

          <div className='hidden items-center gap-2 lg:flex'>
            <NavLink to='/' className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to='/about' className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to='/services' className={navLinkClass}>
              Expertise
            </NavLink>

            <div className='relative' ref={quickLinksRef}>
              <button
                type='button'
                className='inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-(--color-typography) transition hover:bg-(--color-primary-20) hover:text-(--color-primary)'
                onClick={() => setIsQuickLinksOpen((prev) => !prev)}
              >
                Quick Links
                <i
                  className={`fas fa-chevron-down text-xs transition ${isQuickLinksOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isQuickLinksOpen && (
                <ul className='absolute right-0 mt-2 w-72 rounded-xl border border-(--color-primary-20) bg-white p-2 shadow-xl'>
                  <li className='px-3 py-2 text-xs font-bold uppercase tracking-wide text-(--color-typography-secondary)'>
                    Business
                  </li>
                  <li>
                    <Link
                      to='/insights/analysis'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Insight Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/insights/boycott'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Boycott Analysis
                    </Link>
                  </li>
                  <li className='mt-1 px-3 py-2 text-xs font-bold uppercase tracking-wide text-(--color-typography-secondary)'>
                    Customer
                  </li>
                  <li>
                    <Link
                      to='/customer/segmentation'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Customer Segmentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/customer/360'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Dashboard Customer 360
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/customer/campaign'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Campaign Dashboard
                    </Link>
                  </li>
                  <li className='mt-1 px-3 py-2 text-xs font-bold uppercase tracking-wide text-(--color-typography-secondary)'>
                    Operations
                  </li>
                  <li>
                    <Link
                      to='/negotiation/supplier'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Supplier Negotiation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/category/roles'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Category Roles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/promotion'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Pricing & Promotion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/sustainability'
                      className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                      onClick={closeMobileMenu}
                    >
                      Sustainability
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <NavLink to='/contact' className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='border-t border-(--color-primary-20) bg-white px-4 pb-4 pt-2 lg:hidden'>
            <ul className='space-y-1'>
              <li>
                <NavLink
                  to='/'
                  className={navLinkClass}
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={navLinkClass}
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  className={navLinkClass}
                  onClick={closeMobileMenu}
                >
                  Expertise
                </NavLink>
              </li>

              <li className='pt-2'>
                <p className='px-3 pb-1 text-xs font-bold uppercase tracking-wide text-(--color-typography-secondary)'>
                  Quick Links
                </p>
                <div className='space-y-1'>
                  <Link
                    to='/insights/analysis'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Insight Analysis
                  </Link>
                  <Link
                    to='/insights/boycott'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Boycott Analysis
                  </Link>
                  <Link
                    to='/customer/segmentation'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Customer Segmentation
                  </Link>
                  <Link
                    to='/customer/360'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Dashboard Customer 360
                  </Link>
                  <Link
                    to='/customer/campaign'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Campaign Dashboard
                  </Link>
                  <Link
                    to='/negotiation/supplier'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Supplier Negotiation
                  </Link>
                  <Link
                    to='/category/roles'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Category Roles
                  </Link>
                  <Link
                    to='/promotion'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Pricing & Promotion
                  </Link>
                  <Link
                    to='/sustainability'
                    className='block rounded-lg px-3 py-2 text-sm text-(--color-typography) hover:bg-(--color-primary-20)'
                    onClick={closeMobileMenu}
                  >
                    Sustainability
                  </Link>
                </div>
              </li>

              <li>
                <NavLink
                  to='/contact'
                  className={navLinkClass}
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
