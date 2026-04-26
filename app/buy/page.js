import Link from "next/link";

export const metadata = {
  title: "For buyers — kms.deals",
  description:
    "Access to the world's best inventory. kms.deals connects established brands and global retailers through trusted, intelligent inventory distribution.",
};

export default function BuyPage() {
  return (
    <>
      {/* Hero */}
      <section className="eyebrow-hero">
        <div className="container">
          <div className="eyebrow-hero__inner">
            <span className="eyebrow-hero__label">For buyers</span>
            <h1>Access to the world&apos;s best inventory.</h1>
            <p>
              Where established brands and global retailers connect through
              trusted, intelligent inventory distribution — backed by forty
              years of relationships.
            </p>
            <div className="eyebrow-hero__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Buy on kms.deals
              </Link>
              <Link href="/sell" className="btn btn--secondary btn--large">
                For sellers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="pillars__header">
            <h2>Why buyers plug in.</h2>
            <p>Four ways the network surfaces the right inventory.</p>
          </div>

          <div className="pillars__grid">
            <div className="pillars__cell">
              <div className="pillars__index">01</div>
              <div className="pillars__title">Products from the world&apos;s best brands</div>
              <p className="pillars__desc">
                Get access to wholesale and surplus inventory from brands
                consumers love — from mass market to designer.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">02</div>
              <div className="pillars__title">Discover the next big thing</div>
              <p className="pillars__desc">
                Identify trending brands and hero SKUs through forty years
                of pricing and category intelligence.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">03</div>
              <div className="pillars__title">Support to hit the ground running</div>
              <p className="pillars__desc">
                The expertise and logistics you need to ensure a seamless
                transaction — from quote to pickup.
              </p>
              <Link href="/contact" className="pillars__link">
                Get started <span className="arrow">→</span>
              </Link>
            </div>
            <div className="pillars__cell">
              <div className="pillars__index">04</div>
              <div className="pillars__title">An exclusive distribution network</div>
              <p className="pillars__desc">
                A network of individually vetted, high-caliber buyers and
                sellers — no marketplace noise, just signal.
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
                kms.deals&apos; seamless transactions and incredible logistics
                support empower me to close more deals than ever before.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Streetwear reseller</span>
                <span className="testimonial__role">Apparel & footwear</span>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                kms.deals is the most impactful surplus disrupter I&apos;ve seen
                in twenty-five years in this business.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Online reseller</span>
                <span className="testimonial__role">Multi-category</span>
              </div>
            </div>
            <div className="testimonial">
              <p className="testimonial__quote">
                Access to kms.deals&apos; inventory of sought-after brands has
                fueled a remarkable surge in my business.
              </p>
              <div className="testimonial__attribution">
                <span className="testimonial__name">Boutique reseller</span>
                <span className="testimonial__role">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Get access to the world&apos;s best brands.</h2>
            <p>
              Join the only exclusive distribution network — apply as a
              trusted buyer or seller.
            </p>
            <div className="cta__actions cta__actions--multi">
              <Link href="/contact" className="btn btn--primary btn--large">
                Buy on kms.deals
              </Link>
              <Link href="/contact" className="btn btn--secondary btn--large">
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
