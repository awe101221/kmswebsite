'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/buy', label: 'Buy' },
    { href: '/sell', label: 'Sell' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <span className="header__logo-mark">K</span>
            KMS
          </Link>

          <nav className="header__nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header__link ${pathname === link.href ? 'header__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <Link href="/contact" className="btn btn--primary">
              Connect
            </Link>
          </div>

          <button
            className="header__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav mobile-nav--open">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn--primary"
            onClick={() => setMobileOpen(false)}
          >
            Connect
          </Link>
        </div>
      )}
    </>
  );
}
