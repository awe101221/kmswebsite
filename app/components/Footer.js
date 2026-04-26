import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-name">
              <span className="header__logo-mark">K</span>
              KMS Wholesale
            </div>
            <p>
              The wholesale network where surplus meets demand. Forty years
              of connecting the right inventory with the right buyers.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Network</h4>
            <ul className="footer__links">
              <li><Link href="/buy">Buy</Link></li>
              <li><Link href="/sell">Sell</Link></li>
              <li><Link href="/team">Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link href="/team">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__links">
              <li><a href="tel:+17347222000">(734) 722-2000</a></li>
              <li><a href="mailto:info@kmswholesale.com">info@kmswholesale.com</a></li>
              <li><span>Westland, MI</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} KMS Wholesale</span>
          <span>Westland, Michigan</span>
        </div>
      </div>
    </footer>
  );
}
