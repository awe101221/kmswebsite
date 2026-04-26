import Link from "next/link";

export const metadata = {
  title: "Company — kms.deals",
  description:
    "kms.deals is a relationship-native distribution network. Forty years of connecting surplus inventory with the buyers who need it.",
};

const avatarGradients = [
  ["#6366F1", "#8B5CF6"],
  ["#06B6D4", "#3B82F6"],
  ["#10B981", "#059669"],
  ["#F59E0B", "#EF4444"],
  ["#EC4899", "#8B5CF6"],
  ["#14B8A6", "#06B6D4"],
  ["#F97316", "#EAB308"],
  ["#64748B", "#334155"],
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function gradientFor(seed) {
  const [from, to] = avatarGradients[hash(seed) % avatarGradients.length];
  return `linear-gradient(135deg, ${from}, ${to})`;
}

export default function CompanyPage() {
  const principles = [
    {
      title: "Relationships first",
      desc: "Every transaction is a handshake. Forty years of trust isn't a tagline — it's how we operate.",
    },
    {
      title: "Discretion always",
      desc: "Brand-sensitive inventory deserves a brand-sensitive partner. We protect what we move.",
    },
    {
      title: "Speed at scale",
      desc: "Quote in 48 hours, pickup the same week. The off-price market doesn't wait, and neither do we.",
    },
    {
      title: "Data-backed decisions",
      desc: "Forty years of pricing intelligence behind every offer, every match, every load.",
    },
  ];

  const leadership = [
    {
      name: "Kevin Schimmel",
      role: "President & CEO",
      initials: "KS",
      bio: "Kevin has led kms.deals for over two decades, building it into one of the nation's most trusted wholesale distribution networks.",
    },
    {
      name: "Matt Schimmel",
      role: "Vice President",
      initials: "MS",
      bio: "Matt oversees day-to-day operations and key vendor relationships, keeping kms.deals ahead of industry trends.",
    },
    {
      name: "Steve Schimmel",
      role: "Vice President, Purchasing",
      initials: "SS",
      bio: "Steve leads our purchasing division, evaluating thousands of inventory opportunities annually with decades of hands-on expertise.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="eyebrow-hero">
        <div className="container">
          <div className="eyebrow-hero__inner">
            <span className="eyebrow-hero__label">Company</span>
            <h1>The relationships behind the network.</h1>
            <p>
              A family-owned company with forty years of experience —
              connecting surplus inventory with the buyers who need it,
              faster and smarter than anyone else.
            </p>
            <div className="eyebrow-hero__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="content-section content-section--bordered">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <span className="eyebrow">Our mission</span>
              <h2 style={{ marginTop: 12 }}>Built on family. Driven by data.</h2>
              <p>
                The company behind kms.deals began over forty years ago as a small family operation.
                Today, we operate out of a 1,000,000+ square-foot facility
                in Westland, Michigan — one of the largest wholesale
                distribution centers in the Midwest.
              </p>
              <p>
                Our mission hasn&apos;t changed: connect surplus inventory
                with the buyers who need it, faster and smarter than anyone
                else. Old-school relationships, modern intelligence, every
                transaction.
              </p>
            </div>
            <div className="content-visual">
              <div className="content-visual__graphic">
                <span className="content-visual__graphic-text">40+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pillars" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div className="pillars__header">
            <span className="eyebrow">What we believe</span>
            <h2 style={{ marginTop: 12 }}>How we run the network.</h2>
            <p>Four principles that have guided kms.deals since day one.</p>
          </div>

          <div className="pillars__grid">
            {principles.map((p, i) => (
              <div key={p.title} className="pillars__cell">
                <div className="pillars__index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pillars__title">{p.title}</div>
                <p className="pillars__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="content-section content-section--alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership</span>
            <h2 style={{ marginTop: 12 }}>The people guiding the network.</h2>
            <p>Three generations of off-price wholesale expertise.</p>
          </div>

          <div className="team__grid">
            {leadership.map((person) => (
              <div key={person.name} className="team__member">
                <div
                  className="team__member-initials"
                  style={{ background: gradientFor(person.name) }}
                  aria-hidden
                >
                  {person.initials}
                </div>
                <h3>{person.name}</h3>
                <div className="team__member-role">{person.role}</div>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Join the network.</h2>
            <p>
              Want to work with a team that&apos;s been doing this for forty
              years? Let&apos;s connect.
            </p>
            <div className="cta__actions cta__actions--multi">
              <Link href="/contact" className="btn btn--primary btn--large">
                Get in touch
              </Link>
              <Link href="/buy" className="btn btn--secondary btn--large">
                For buyers
              </Link>
              <Link href="/sell" className="btn btn--secondary btn--large">
                For sellers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
