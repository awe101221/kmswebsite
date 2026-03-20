import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Trusted by 1,000+ partners nationwide
            </div>

            <h1 className="hero__title">
              Connect into
              <br />
              the network.
            </h1>

            <p className="hero__subtitle">
              KMS is the wholesale network where surplus meets demand.
              Plug in to access data-driven deal matching, powered by
              40&nbsp;years of market intelligence and relationships.
            </p>

            <div className="hero__actions">
              <Link href="/buy" className="btn btn--primary btn--large">
                Find Deals
              </Link>
              <Link href="/sell" className="btn btn--secondary btn--large">
                Sell Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {[
              { number: "$2B+", label: "Transactions completed" },
              { number: "40+", label: "Years of market data" },
              { number: "1M+", label: "Sq ft, single facility" },
              { number: "1,000s", label: "Connected partners" },
            ].map((stat) => (
              <div key={stat.label} className="stats__item">
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENTO — TWO SIDES ===== */}
      <section className="bento">
        <div className="container">
          <div className="bento__header">
            <h2>One network, two sides.</h2>
            <p>
              Whether you&apos;re sourcing deals or moving surplus — plug in
              and let the network work for you.
            </p>
          </div>

          <div className="bento__grid">
            {/* Buyers */}
            <div className="bento__cell">
              <div className="bento__cell-label">For Buyers</div>
              <h3>Deals matched to your categories.</h3>
              <p>
                Tell us what you need. Our data-driven platform matches you
                with relevant, value-driven products across 50+ categories.
                New deals surface daily — tuned to your business.
              </p>
              <ul className="bento__features">
                <li>Category-specific deal matching</li>
                <li>Daily new inventory from top-tier brands</li>
                <li>Up to 70% below retail pricing</li>
                <li>Dedicated account management</li>
              </ul>
              <Link href="/buy" className="btn btn--ghost">
                Explore deals <span className="arrow">→</span>
              </Link>
            </div>

            {/* Sellers */}
            <div className="bento__cell">
              <div className="bento__cell-label">For Sellers</div>
              <h3>Your inventory, instantly connected.</h3>
              <p>
                Connect your surplus into a network of thousands of active
                buyers. We evaluate fast, price fairly, and move product
                faster than anyone in the industry.
              </p>
              <ul className="bento__features">
                <li>Instant access to the buyer network</li>
                <li>48-hour quote turnaround</li>
                <li>Any category, any quantity</li>
                <li>Confidential brand partnerships</li>
              </ul>
              <Link href="/sell" className="btn btn--ghost">
                Start selling <span className="arrow">→</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="bento__cell">
              <div className="bento__cell-label">Buyer Network</div>
              <h3>50+</h3>
              <p>Active categories with daily new arrivals surfaced to match your buying profile.</p>
            </div>

            <div className="bento__cell">
              <div className="bento__cell-label">Seller Network</div>
              <h3>97%</h3>
              <p>Partner retention rate. Once you connect, you stay connected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features">
        <div className="container">
          <div className="features__header">
            <h2>Built on forty years of connections.</h2>
            <p>
              Our network isn&apos;t just data — it&apos;s relationships.
              Decades of trust, market knowledge, and operational excellence.
            </p>
          </div>

          <div className="features__grid">
            {[
              {
                icon: "🔗",
                title: "Deep Relationships",
                desc: "Direct connections with retailers, manufacturers, and distributors you won't find on any marketplace.",
              },
              {
                icon: "📊",
                title: "Market Intelligence",
                desc: "40 years of pricing data and trend analysis power smarter decisions for every transaction.",
              },
              {
                icon: "⚡",
                title: "Speed to Market",
                desc: "From quote to pickup in days, not weeks. Our 1M+ sq ft facility handles any volume.",
              },
              {
                icon: "🛡️",
                title: "Brand Protection",
                desc: "Confidential handling for brands that need controlled distribution and discretion.",
              },
              {
                icon: "🌐",
                title: "National Scale",
                desc: "Operations spanning coast to coast with logistics support for any size shipment.",
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                desc: "A named account manager for every partner. Real people, real answers, every time.",
              },
            ].map((feature) => (
              <div key={feature.title} className="features__item">
                <div className="features__item-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="steps">
        <div className="container">
          <div className="steps__header">
            <h2>How it works.</h2>
            <p>Three steps to connect with the right inventory — or the right buyer.</p>
          </div>

          <div className="steps__grid">
            {[
              {
                step: "1",
                title: "Connect",
                desc: "Reach out with what you need or what you want to move. We plug you into the network.",
              },
              {
                step: "2",
                title: "Match",
                desc: "Our team uses 40 years of market data to match you with the right deals or buyers.",
              },
              {
                step: "3",
                title: "Transact",
                desc: "Close deals with confidence. We handle logistics, paperwork, and everything in between.",
              },
            ].map((item) => (
              <div key={item.step} className="steps__item">
                <div className="steps__number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Ready to connect?</h2>
            <p>
              Whether you&apos;re buying or selling, KMS is your competitive
              advantage. Plug into the network.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--white btn--large">
                Get Started
              </Link>
              <Link href="/sell" className="btn btn--outline-white btn--large">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
