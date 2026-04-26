'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/sell', label: 'Sellers' },
    { href: '/buy', label: 'Buyers' },
    { href: '/company', label: 'Company' },
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
            <Link href="/contact" className="btn btn--secondary">Sign in</Link>
            <Link href="/contact" className="btn btn--primary">Join KMS</Link>
          </div>

          <button
            className="header__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
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
            style={{ marginTop: 8 }}
            onClick={() => setMobileOpen(false)}
          >
            Join KMS
          </Link>
        </div>
      )}
    </>
  );
}
