'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Wordmark from './Wordmark';
import Icon from './Icon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/sell', label: 'Sellers', icon: 'uploadCloud' },
    { href: '/buy', label: 'Buyers', icon: 'shoppingBag' },
    { href: '/company', label: 'Company', icon: 'building' },
    { href: '/contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__brand" aria-label="kms.deals home">
            <span className="logo-mark" aria-hidden>K</span>
            <Wordmark />
          </Link>

          <nav className="header__nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header__link ${pathname === link.href ? 'header__link--active' : ''}`}
              >
                <Icon name={link.icon} size={16} />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <Link href="/contact" className="btn btn--ghost">Sign in</Link>
            <Link href="/contact" className="btn btn--primary">Join kms.deals</Link>
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
              <Icon name={link.icon} size={16} />
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn--primary"
            style={{ marginTop: 8 }}
            onClick={() => setMobileOpen(false)}
          >
            Join kms.deals
          </Link>
        </div>
      )}
    </>
  );
}
