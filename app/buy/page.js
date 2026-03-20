import Link from "next/link";

export const metadata = {
  title: "Buy From Us | KMS Wholesale",
  description:
    "Plug into the KMS network and get data-driven deal matching for your categories. New deals daily across 50+ product categories.",
};

export default function BuyPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>
            Deals matched
            <br />
            to your business.
          </h1>
          <p>
            Plug into the network and let us surface the deals that match
            your categories, price points, and volume needs. Data-driven.
            Continuous. Effortless.
          </p>
        </div>
      </section>

      {/* Value Prop */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Stop searching. Start matching.</h2>
              <p>
                For 40 years, retailers and distributors have plugged into
                KMS for reliable access to off-price merchandise. Tell us
                your categories and we&apos;ll continuously surface deals
                tuned to your business — margins that keep you growing.
              </p>
              <ul>
                <li>Overstock, closeout, and shelf-pull merchandise</li>
                <li>Top-tier brands at up to 70% below retail</li>
                <li>By-the-pallet or by-the-truckload flexibility</li>
                <li>Inspection and manifesting available</li>
                <li>Dedicated account reps who know your business</li>
              </ul>
              <Link href="/contact" className="btn btn--primary">
                Connect Now →
              </Link>
            </div>
            <div className="content-visual">
              <div className="content-visual__graphic">
                <span className="content-visual__graphic-text">BUY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <div className="categories__header">
            <h2>Categories we match.</h2>
            <p>
              From apparel to electronics — new inventory surfaces daily,
              matched to your profile.
            </p>
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

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {[
              { number: "50+", label: "Product categories" },
              { number: "Daily", label: "New arrivals" },
              { number: "70%", label: "Below retail pricing" },
              { number: "1M+", label: "Sq ft warehouse" },
            ].map((stat) => (
              <div key={stat.label} className="stats__item">
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="steps">
        <div className="container">
          <div className="steps__header">
            <h2>How it works.</h2>
            <p>Plug in once, get matched continuously.</p>
          </div>

          <div className="steps__grid">
            {[
              {
                step: "1",
                title: "Tell us your categories",
                desc: "Share the categories, quantities, and price points your business needs.",
              },
              {
                step: "2",
                title: "We match you with deals",
                desc: "Our platform curates inventory options tailored to your business profile.",
              },
              {
                step: "3",
                title: "Inspect, buy, and ship",
                desc: "Visit our facility or buy remotely. We handle palletization and logistics.",
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
            <h2>Ready to plug in?</h2>
            <p>
              Our inventory moves fast. Connect with a deal specialist and
              start getting matched today.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--white btn--large">
                Get Started
              </Link>
              <Link href="/sell" className="btn btn--outline-white btn--large">
                Or, Sell To Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
