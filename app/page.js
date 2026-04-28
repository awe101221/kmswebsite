import Link from "next/link";
import ShipmentMap from "./components/ShipmentMap";

const sellerPillars = [
  {
    index: "01",
    title: "Turn inventory into liquidity",
    description:
      "Convert existing inventory into cash you can deploy, reinvest, or pocket — typically within 48 hours.",
  },
  {
    index: "02",
    title: "Control where your inventory ends up",
    description:
      "Choose the distribution channels, retailers, and geographies where your product is sold.",
  },
  {
    index: "03",
    title: "Sell with absolute discretion",
    description:
      "Our network is only accessible to vetted buyers — we'll never publish who buys and sells on kms.deals.",
  },
  {
    index: "04",
    title: "Set your price, maximize revenue",
    description:
      "Forty years of pricing data means a competitive offer on every load — backed by buyers ready to move.",
  },
];

const buyerPillars = [
  {
    index: "01",
    title: "Products from the world's best brands",
    description:
      "Get access to wholesale and surplus inventory from brands consumers love — from mass market to designer.",
  },
  {
    index: "02",
    title: "Discover the next big thing",
    description:
      "Identify trending brands and hero SKUs through forty years of category and pricing data.",
  },
  {
    index: "03",
    title: "Support to hit the ground running",
    description:
      "The expertise and logistics you need for a seamless transaction — from quote to pickup.",
  },
  {
    index: "04",
    title: "An exclusive distribution network",
    description:
      "A network of individually vetted, high-caliber buyers and sellers — no marketplace noise.",
  },
];

const testimonials = [
  {
    quote:
      "We weren't willing to be associated with off-price markets, and kms.deals gives us peace of mind regarding buyer identity and product destination.",
    name: "Direct brand seller",
    role: "Apparel",
  },
  {
    quote:
      "kms.deals has enabled discovery of untapped revenue channels and distribution approaches we'd never considered.",
    name: "Wholesale reseller",
    role: "Multi-category",
  },
  {
    quote:
      "We needed efficient excess-inventory solutions, and kms.deals finally delivers the streamlined operations we require.",
    name: "Big-box retailer",
    role: "National",
  },
];

const valueMetrics = [
  {
    metric: "1,000+",
    title: "Connected partners",
    description:
      "Leading brands and retailers move inventory through kms.deals with built-in controls and brand protection.",
  },
  {
    metric: "$2B+",
    title: "Transactions completed",
    description:
      "Trusted by buyers large and small, from Fortune 500 retailers to independent operators across every channel.",
  },
  {
    metric: "40 yrs",
    title: "Of market intelligence",
    description:
      "Where established brands and global retailers connect through trusted, intelligent inventory distribution.",
  },
];

const megaStats = [
  { number: "14K+", label: "Posted listings" },
  { number: "$12B+", label: "Total MSRP moved" },
  { number: "50+", label: "Active categories" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <ShipmentMap />
        <div className="container">
          <div className="hero__frame">
            <div className="hero__content">
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                Private wholesale network
              </div>

              <h1 className="hero__title">
                The private network for
                <br />
                off-price inventory.
              </h1>

              <p className="hero__subtitle">
                kms.deals connects brands, retailers, and distributors through
                a relationship-led wholesale channel built for discretion,
                control, and velocity.
              </p>

              <div className="hero__actions">
                <Link href="/contact" className="btn btn--primary btn--large">
                  Join kms.deals
                </Link>
                <Link href="/company" className="btn btn--secondary btn--large">
                  Learn more
                </Link>
              </div>

              <div className="hero__meta">
                <div className="hero__meta-item">
                  <span className="hero__meta-label">Network</span>
                  <span className="hero__meta-value">Vetted buyers and sellers only</span>
                </div>
                <div className="hero__meta-item">
                  <span className="hero__meta-label">Approach</span>
                  <span className="hero__meta-value">Directed distribution, not marketplace volume</span>
                </div>
              </div>
            </div>

            <aside className="hero__panel" aria-label="Network highlights">
              <div className="hero__panel-eyebrow">Built for controlled distribution</div>
              <h2 className="hero__panel-title">
                Move inventory with the confidence of a known counterparty.
              </h2>
              <p className="hero__panel-copy">
                Every opportunity runs through a curated network shaped by
                long-standing relationships, pricing intelligence, and brand
                protection.
              </p>

              <div className="hero__panel-stats">
                <div className="hero__panel-stat">
                  <span className="hero__panel-number tabular">48 hrs</span>
                  <span className="hero__panel-label">Typical speed to offer</span>
                </div>
                <div className="hero__panel-stat">
                  <span className="hero__panel-number tabular">40 yrs</span>
                  <span className="hero__panel-label">Relationship equity in market</span>
                </div>
              </div>

              <ul className="hero__panel-list">
                <li>Buyer identity and destination are known before product moves.</li>
                <li>Distribution can be steered by channel, region, and retailer fit.</li>
                <li>Operators stay close to the transaction from quote to pickup.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="value-band">
        <div className="container">
          <div className="section-lead">
            <span className="eyebrow">Why kms.deals</span>
            <h2>Wholesale infrastructure with the polish of a private network.</h2>
            <p>
              Trusted infrastructure built for off-price scale, speed, and
              control — backed by forty years of relationships.
            </p>
          </div>

          <div className="value-band__grid">
            {valueMetrics.map((item) => (
              <div key={item.title} className="value-band__cell">
                <div className="value-band__metric tabular">{item.metric}</div>
                <div className="value-band__title">{item.title}</div>
                <p className="value-band__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="megastats">
        <div className="container">
          <div className="megastats__shell">
            <div className="megastats__intro">
              <span className="eyebrow">Operating at scale</span>
              <p>
                Serious inventory moves through kms.deals every day, with the
                category reach and pricing memory to keep pace.
              </p>
            </div>

            <div className="megastats__grid">
              {megaStats.map((item) => (
                <div key={item.label} className="megastats__item">
                  <div className="megastats__num tabular">{item.number}</div>
                  <div className="megastats__label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container">
          <div className="section-lead">
            <span className="eyebrow">For sellers</span>
            <h2>New revenue streams for all types of inventory.</h2>
            <p>
              Move surplus, closeouts, and wholesale inventory without
              sacrificing brand protection or margin.
            </p>
          </div>

          <div className="pillars__grid">
            {sellerPillars.map((item) => (
              <div key={item.index} className="pillars__cell">
                <div className="pillars__index">{item.index}</div>
                <div className="pillars__title">{item.title}</div>
                <p className="pillars__desc">{item.description}</p>
                <Link href="/sell" className="pillars__link">
                  Apply to sell <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars pillars--divided">
        <div className="container">
          <div className="section-lead">
            <span className="eyebrow">For buyers</span>
            <h2>Inventory intelligence at off-price scale.</h2>
            <p>
              Access wholesale and surplus inventory from brands consumers
              love — matched to your categories, daily.
            </p>
          </div>

          <div className="pillars__grid">
            {buyerPillars.map((item) => (
              <div key={item.index} className="pillars__cell">
                <div className="pillars__index">{item.index}</div>
                <div className="pillars__title">{item.title}</div>
                <p className="pillars__desc">{item.description}</p>
                <Link href="/buy" className="pillars__link">
                  Apply to buy <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-lead">
            <span className="eyebrow">Partner trust</span>
            <h2>What our partners are saying.</h2>
            <p>Trusted by the world&apos;s top brands and retailers.</p>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial">
                <p className="testimonial__quote">{item.quote}</p>
                <div className="testimonial__attribution">
                  <span className="testimonial__name">{item.name}</span>
                  <span className="testimonial__role">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <span className="eyebrow">Join the network</span>
            <h2>The future of off-price is connected.</h2>
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
