import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Powering the off-price
              <br />
              wholesale economy.
            </h1>

            <p className="hero__subtitle">
              kms.deals is a relationship-native distribution network for the
              world&apos;s best brands and the buyers who move their inventory.
            </p>

            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Join kms.deals
              </Link>
              <Link href="/company" className="btn btn--secondary btn--large">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value prop */}
      <section className="value-band">
        <div className="container">
          <div className="value-band__header">
            <h2>Where the world&apos;s best brands meet the world&apos;s best retailers.</h2>
            <p>
              Trusted infrastructure built for off-price scale, speed, and
              control — backed by forty years of relationships.
            </p>
          </div>

          <div className="value-band__grid">
            <div className="value-band__cell">
              <div className="value-band__metric tabular">1,000+</div>
              <div className="value-band__title">Connected partners</div>
              <p className="value-band__desc">
                Leading brands and retailers move inventory through kms.deals with
                built-in controls and brand protection.
              </p>
            </div>
            <div className="value-band__cell">
              <div className="value-band__metric tabular">$2B+</div>
              <div className="value-band__title">Transactions completed</div>
              <p className="value-band__desc">
                Trusted by buyers large and small, from Fortune 500 retailers
                to independent operators across every channel.
              </p>
            </div>
            <div className="value-band__cell">
              <div className="value-band__metric tabular">40 yrs</div>
              <div className="value-band__title">Of market intelligence</div>
              <p className="value-band__desc">
                Where established brands and global retailers connect through
                trusted, intelligent inventory distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Megastats */}
      <section className="megastats">
        <div className="container">
          <div className="megastats__grid">
            <div className="megastats__item">
              <div className="megastats__num tabular">14K+</div>
              <div className="megastats__label">Posted listings</div>
            </div>
            <div className="megastats__item">
              <div className="megastats__num tabular">$12B+</div>
              <div className="megastats__label">Total MSRP moved</div>
            </div>
            <div className="megastats__item">
              <div className="megastats__num tabular">50+</div>
              <div className="megastats__label">Active categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sellers section */}
      <section className="pillars">
        <div className="container">
          <div className="pillars__header">
            <span className="eyebrow">For sellers</span>
            <h2 style={{ marginTop: 12 }}>New revenue streams for all types of inventory.</h2>
            <p>
              Move surplus, closeouts, and wholesale inventory without
              sacrificing brand protection or margin.
            </p>
          </div>

          <div className="pillars__grid">
            <div className="pillars__cell">
              <div className="pillars__index">01</div>
              <div className="pillars__title">Turn inventory into liquidity</div>
              <p className="pillars__desc">
                Convert existing inventory into cash you can deploy,
                reinvest, or pocket — typically within 48 hours.
              </p>
              <Link href="/sell" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">02</div>
              <div className="pillars__title">Control where your inventory ends up</div>
              <p className="pillars__desc">
                Choose the distribution channels, retailers, and geographies
                where your product is sold.
              </p>
              <Link href="/sell" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">03</div>
              <div className="pillars__title">Sell with absolute discretion</div>
              <p className="pillars__desc">
                Our network is only accessible to vetted buyers — we&apos;ll
                never publish who buys and sells on kms.deals.
              </p>
              <Link href="/sell" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">04</div>
              <div className="pillars__title">Set your price, maximize revenue</div>
              <p className="pillars__desc">
                Forty years of pricing data means a competitive offer on
                every load — backed by buyers ready to move.
              </p>
              <Link href="/sell" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers section */}
      <section className="pillars" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="pillars__header">
            <span className="eyebrow">For buyers</span>
            <h2 style={{ marginTop: 12 }}>Inventory intelligence at off-price scale.</h2>
            <p>
              Access wholesale and surplus inventory from brands consumers
              love — matched to your categories, daily.
            </p>
          </div>

          <div className="pillars__grid">
            <div className="pillars__cell">
              <div className="pillars__index">01</div>
              <div className="pillars__title">Products from the world&apos;s best brands</div>
              <p className="pillars__desc">
                Get access to wholesale and surplus inventory from brands
                consumers love — from mass market to designer.
              </p>
              <Link href="/buy" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">02</div>
              <div className="pillars__title">Discover the next big thing</div>
              <p className="pillars__desc">
                Identify trending brands and hero SKUs through forty years
                of category and pricing data.
              </p>
              <Link href="/buy" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">03</div>
              <div className="pillars__title">Support to hit the ground running</div>
              <p className="pillars__desc">
                The expertise and logistics you need for a seamless
                transaction — from quote to pickup.
              </p>
              <Link href="/buy" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">04</div>
              <div className="pillars__title">An exclusive distribution network</div>
              <p className="pillars__desc">
                A network of individually vetted, high-caliber buyers and
                sellers — no marketplace noise.
              </p>
              <Link href="/buy" className="pillars__link">
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
            <h2>What our partners are saying.</h2>
            <p>Trusted by the world&apos;s top brands and retailers.</p>
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

      {/* Closing CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>The future of off-price wholesale is connected.</h2>
            <p>
              Apply as a trusted buyer or seller and plug into the network
              today.
            </p>
            <div className="cta__actions cta__actions--multi">
              <Link href="/contact" className="btn btn--primary btn--large">
                Join kms.deals
              </Link>
              <Link href="/buy" className="btn btn--secondary btn--large">
                Apply to buy
              </Link>
              <Link href="/sell" className="btn btn--secondary btn--large">
                Apply to sell
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
