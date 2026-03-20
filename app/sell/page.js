import Link from "next/link";

export const metadata = {
  title: "Sell To Us | KMS Wholesale",
  description:
    "Connect your surplus inventory into the network. KMS gives you instant access to thousands of buyers — fast quotes, fair prices, same-week pickup.",
};

export default function SellPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>
            Connect your inventory
            <br />
            into the network.
          </h1>
          <p>
            Plug your surplus into a network of thousands of active buyers.
            We evaluate fast, price fairly, and move product at scale.
          </p>
        </div>
      </section>

      {/* Value Prop */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Instant access to the buyer network.</h2>
              <p>
                KMS has been connecting surplus inventory with the right buyers
                for over 40 years. From a single pallet to a full warehouse —
                when you plug in, your inventory reaches thousands of qualified
                buyers immediately.
              </p>
              <ul>
                <li>Fast, no-obligation quotes — typically within 48 hours</li>
                <li>Any category: apparel, electronics, home goods, grocery, HBA, and more</li>
                <li>Any quantity from a single pallet to full truckloads</li>
                <li>Confidential handling for brand-sensitive inventory</li>
                <li>Same-week pickup capability from our logistics network</li>
              </ul>
              <Link href="/contact" className="btn btn--primary">
                Connect Now →
              </Link>
            </div>
            <div className="content-visual">
              <div className="content-visual__graphic">
                <span className="content-visual__graphic-text">SELL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <div className="categories__header">
            <h2>What we buy.</h2>
            <p>If it&apos;s retail, we&apos;re probably interested.</p>
          </div>

          <div className="categories__grid">
            {[
              { icon: "👕", name: "Apparel" },
              { icon: "👟", name: "Footwear" },
              { icon: "📱", name: "Electronics" },
              { icon: "🏠", name: "Home & Garden" },
              { icon: "🧸", name: "Toys" },
              { icon: "🧴", name: "HBA & Beauty" },
              { icon: "🛒", name: "Grocery" },
              { icon: "🛋️", name: "Furniture" },
              { icon: "🔧", name: "Hardware" },
              { icon: "⚽", name: "Sporting Goods" },
              { icon: "📚", name: "Books & Media" },
              { icon: "✨", name: "And More" },
            ].map((cat) => (
              <div key={cat.name} className="categories__item">
                <div className="categories__item-icon">{cat.icon}</div>
                <div className="categories__item-name">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps">
        <div className="container">
          <div className="steps__header">
            <h2>How selling works.</h2>
            <p>From first call to final pickup — three steps.</p>
          </div>

          <div className="steps__grid">
            {[
              {
                step: "1",
                title: "Tell us what you have",
                desc: "Send us a manifest, photos, or just a description. Our team responds quickly.",
              },
              {
                step: "2",
                title: "Get a fair offer",
                desc: "We evaluate using 40 years of market data to ensure a competitive price.",
              },
              {
                step: "3",
                title: "We pick up, you get paid",
                desc: "We arrange all logistics. Pickup can happen the same week. Payment is fast.",
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

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Ready to connect your inventory?</h2>
            <p>
              Get a no-obligation quote and see what your surplus is worth on the network.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--white btn--large">
                Get a Quote
              </Link>
              <Link href="/buy" className="btn btn--outline-white btn--large">
                Or, Browse Deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
