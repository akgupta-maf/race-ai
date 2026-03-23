/// <reference types="react" />

import { assetPath } from '@/utils/assetPath';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type QuickLinkItem = {
  label: string;
  to?: string;
  href?: string;
};

type QuickLinkGroup = {
  title: string;
  links: QuickLinkItem[];
};

const quickLinksGroups: QuickLinkGroup[] = [
  {
    title: 'Assortment Optimization',
    links: [
      {
        label: 'Category Roles Dashboard',
        href: 'https://catman.mafcarrefour.local/category-review/category-roles',
      },
      {
        label: 'Localization Dashboard',
        href: 'https://catman.mafcarrefour.local/localization/',
      },
      {
        label: 'Rationalization Dashboard',
        href: 'https://catman.mafcarrefour.local/rationalization/',
      },
      {
        label: 'Whitespace Dashboard',
        href: 'https://catman.mafcarrefour.local/whitespace/',
      },
    ],
  },
  {
    title: 'Pricing & Promotion',
    links: [
      {
        label: 'Promotion Planning Dashboard',
        href: 'https://pnp.retailsso.com/promotions/dashboards/main',
      },
      {
        label: 'Price Optimization Dashboard',
        href: 'https://pnp.mafcarrefour.local/pricing/dashboard/pricing-kvi',
      },
    ],
  },
  // {
  //   title: 'Business',
  //   links: [
  //     { to: '/insights/analysis', label: 'Insight Analysis' },
  //     { to: '/insights/boycott', label: 'Boycott Analysis' },
  //   ],
  // },
  {
    title: 'Customer',
    links: [
      { to: '/customer/segmentation', label: 'Customer Segmentation' },
      { to: '/customer/360', label: 'Dashboard Customer 360' },
      { to: '/customer/campaign', label: 'Campaign Dashboard' },
    ],
  },
  {
    title: 'Operations',
    links: [
      { to: '/negotiation/supplier', label: 'Supplier Negotiation' },
      {
        to: '/category/assortment-optimization',
        label: 'Assortment Optimization',
      },
      { to: '/promotion', label: 'Pricing & Promotion' },
      { to: '/sustainability', label: 'Sustainability' },
    ],
  },
];

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
    `inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold leading-none transition ${
      isActive
        ? 'bg-white text-(--color-primary) shadow-[0_8px_20px_rgba(15,23,42,0.18)]'
        : 'text-white/88 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className='sticky top-0 z-50'>
      <nav
        className={`border-b border-black/10 bg-(--color-primary) transition-all ${
          isScrolled
            ? 'shadow-[0_14px_34px_rgba(15,23,42,0.28)]'
            : 'shadow-[0_8px_22px_rgba(15,23,42,0.18)]'
        }`}
      >
        <div className='flex min-h-20 w-full items-center justify-between gap-6 px-4'>
          <Link
            to='/'
            className='flex shrink-0 items-center gap-3 text-white'
            onClick={closeMobileMenu}
          >
            <span className='flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white shadow-sm'>
              <img
                src={assetPath('/img/logo_carr2.png')}
                alt='RACE.AI Logo'
                className='h-9 w-auto'
              />
            </span>
            <span className='flex flex-col leading-none'>
              <span className='text-[1.4rem] font-extrabold tracking-tight'>
                RACE.AI
              </span>
              <span className='mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55'>
                Retail Intelligence
              </span>
            </span>
          </Link>

          <button
            className='inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 lg:hidden'
            type='button'
            onClick={toggleMobileMenu}
            aria-label='Toggle navigation'
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>

          <div className='hidden items-center gap-2.5 lg:flex'>
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
                className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold leading-none transition ${
                  isQuickLinksOpen
                    ? 'bg-white text-(--color-primary) shadow-[0_8px_20px_rgba(15,23,42,0.18)]'
                    : 'text-white/88 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsQuickLinksOpen((prev) => !prev)}
              >
                Quick Links
                <i
                  className={`fas fa-chevron-down text-xs transition ${isQuickLinksOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isQuickLinksOpen && (
                <div className='absolute right-0 mt-3 w-88 overflow-hidden rounded-2xl border border-white/10 bg-(--color-primary) text-white shadow-[0_26px_50px_rgba(15,23,42,0.34)]'>
                  <div className='border-b border-white/10 bg-white/6 px-5 py-4'>
                    <p className='text-sm font-bold text-white'>Quick Links</p>
                    <p className='mt-1 text-xs text-white/60'>
                      Jump directly into core retail workflows.
                    </p>
                  </div>

                  <div className='max-h-[70vh] overflow-y-auto p-4'>
                    {quickLinksGroups.map((group) => (
                      <div
                        key={group.title}
                        className='mb-3 rounded-xl border border-white/8 bg-white/4 p-2 last:mb-0'
                      >
                        <p className='px-2 pb-2 pt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-(--color-secondary-80)'>
                          {group.title}
                        </p>
                        <ul className=''>
                          {group.links.map((item) => (
                            <li key={item.to || item.href || item.label}>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className='block rounded-xl px-3 py-3 text-sm font-medium text-white/88 transition hover:bg-white/10 hover:text-white'
                                  onClick={closeMobileMenu}
                                  target='_blank'
                                  rel='noreferrer'
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <Link
                                  to={item.to || '/'}
                                  className='block rounded-xl px-3 py-3 text-sm font-medium text-white/88 transition hover:bg-white/10 hover:text-white'
                                  onClick={closeMobileMenu}
                                >
                                  {item.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to='/contact' className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='border-t border-white/10 bg-(--color-primary) px-4 pb-5 pt-3 lg:hidden'>
            <ul className='space-y-1.5'>
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
                <p className='px-3 pb-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/55'>
                  Quick Links
                </p>
                <div className='space-y-3'>
                  {quickLinksGroups.map((group) => (
                    <div
                      key={group.title}
                      className='rounded-xl border border-white/8 bg-white/4 p-2'
                    >
                      <p className='px-3 pb-1 text-xs font-semibold text-(--color-secondary-80)'>
                        {group.title}
                      </p>
                      <div className='space-y-1'>
                        {group.links.map((item) =>
                          item.href ? (
                            <a
                              key={item.href || item.label}
                              href={item.href}
                              className='block rounded-xl px-3 py-2.5 text-sm font-medium text-white/88 transition hover:bg-white/10 hover:text-white'
                              onClick={closeMobileMenu}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              key={item.to || item.label}
                              to={item.to || '/'}
                              className='block rounded-xl px-3 py-2.5 text-sm font-medium text-white/88 transition hover:bg-white/10 hover:text-white'
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
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
