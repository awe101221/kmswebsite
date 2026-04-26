import Link from "next/link";

export const metadata = {
  title: "For sellers — kms.deals",
  description:
    "Unlock new revenue streams for all your inventory. kms.deals provides distribution channels for surplus and wholesale inventory without sacrificing brand protection or margin.",
};

export default function SellPage() {
  return (
    <>
      {/* Hero */}
      <section className="eyebrow-hero">
        <div className="container">
          <div className="eyebrow-hero__inner">
            <span className="eyebrow-hero__label">For sellers</span>
            <h1>Unlock new revenue streams for all your inventory.</h1>
            <p>
              kms.deals provides new distribution channels for surplus and
              wholesale inventory, allowing sellers to move product quickly
              without sacrificing brand protection or margin.
            </p>
            <div className="eyebrow-hero__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Sell on kms.deals
              </Link>
              <Link href="/buy" className="btn btn--secondary btn--large">
                For buyers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="pillars__header">
            <h2>Why sellers choose kms.deals.</h2>
            <p>Four ways the network turns surplus into revenue.</p>
          </div>

          <div className="pillars__grid">
            <div className="pillars__cell">
              <div className="pillars__index">01</div>
              <div className="pillars__title">Turn inventory into liquidity</div>
              <p className="pillars__desc">
                Convert your existing inventory into cash you can deploy,
                reinvest, or pocket — typically within 48 hours of evaluation.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">02</div>
              <div className="pillars__title">Control where your inventory ends up</div>
              <p className="pillars__desc">
                Choose the distribution channels, retailers, and geographies
                where your product is sold — and where it isn&apos;t.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">03</div>
              <div className="pillars__title">Sell with absolute discretion</div>
              <p className="pillars__desc">
                The network is only accessible to vetted members — we&apos;ll
                never publish who buys and sells on kms.deals.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">04</div>
              <div className="pillars__title">Set your price to maximize revenue</div>
              <p className="pillars__desc">
                Forty years of pricing data means a fair, competitive offer
                on every load — backed by buyers ready to move.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <h2>Trusted by innovators and industry leaders.</h2>
          </div>

          <div className="testimonials__grid">
            <div className="testimonial">
              <p className="testimonial__quote">
                We weren&apos;t willing to be associated with off-price
                markets, and kms.deals gives us peace of mind regarding buyer
                identity and product destination.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Direct brand seller</span>
                <span className="testimonial__role">Apparel</span>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                kms.deals has enabled discovery of untapped revenue channels and
                distribution approaches we&apos;d never considered.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Wholesale reseller</span>
                <span className="testimonial__role">Multi-category</span>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                We needed efficient excess-inventory solutions, and kms.deals
                finally delivers the streamlined operations we require.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Big-box retailer</span>
                <span className="testimonial__role">National</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Join the world&apos;s best distribution network.</h2>
            <p>Apply as a trusted buyer or seller and get started today.</p>
            <div className="cta__actions cta__actions--multi">
              <Link href="/contact" className="btn btn--primary btn--large">
                Sell on kms.deals
              </Link>
              <Link href="/buy" className="btn btn--secondary btn--large">
                Apply to buy
              </Link>
              <Link href="/contact" className="btn btn--secondary btn--large">
                Apply to sell
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
