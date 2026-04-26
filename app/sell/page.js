import Link from "next/link";

export const metadata = {
  title: "Sell to us — KMS Wholesale",
  description:
    "Connect your surplus inventory into the network. KMS gives you instant access to thousands of buyers — fast quotes, fair prices, same-week pickup.",
};

const categories = [
  "Apparel",
  "Footwear",
  "Electronics",
  "Home & garden",
  "Toys",
  "HBA & beauty",
  "Grocery",
  "Furniture",
  "Hardware",
  "Sporting goods",
  "Books & media",
  "And more",
];

export default function SellPage() {
  return (
    <>
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

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Instant access to the buyer network.</h2>
              <p>
                KMS has been connecting surplus inventory with the right
                buyers for over forty years. From a single pallet to a full
                warehouse — when you plug in, your inventory reaches
                thousands of qualified buyers immediately.
              </p>
              <ul>
                <li>Fast, no-obligation quotes — typically within 48 hours</li>
                <li>Any category: apparel, electronics, home goods, grocery, HBA, and more</li>
                <li>Any quantity from a single pallet to full truckloads</li>
                <li>Confidential handling for brand-sensitive inventory</li>
                <li>Same-week pickup capability from our logistics network</li>
              </ul>
              <Link href="/contact" className="btn btn--primary">
                Connect now <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="content-visual">
              <div className="content-visual__graphic">
                <span className="content-visual__graphic-text">Sell</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="categories__header">
            <h2>What we buy.</h2>
            <p>If it&apos;s retail, we&apos;re probably interested.</p>
          </div>

          <div className="categories__grid">
            {categories.map((name) => (
              <div key={name} className="categories__item">
                <span className="categories__item-icon" aria-hidden />
                <span className="categories__item-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                desc: "Send a manifest, photos, or just a description. Our team responds quickly.",
              },
              {
                step: "2",
                title: "Get a fair offer",
                desc: "We evaluate using forty years of market data to ensure a competitive price.",
              },
              {
                step: "3",
                title: "We pick up, you get paid",
                desc: "We arrange all logistics. Pickup can happen the same week. Payment is fast.",
              },
            ].map((item) => (
              <div key={item.step} className="steps__item">
                <div className="steps__number tabular">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Ready to connect your inventory?</h2>
            <p>
              Get a no-obligation quote and see what your surplus is worth
              on the network.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Get a quote
              </Link>
              <Link href="/buy" className="btn btn--secondary btn--large">
                Or, browse deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
