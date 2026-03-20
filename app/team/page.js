import Link from "next/link";

export const metadata = {
  title: "Our Team | KMS Wholesale",
  description:
    "Meet the people behind the KMS network. Over 40 years of expertise in off-price wholesale, liquidation, and distribution.",
};

export default function TeamPage() {
  const leadership = [
    {
      name: "Kevin Schimmel",
      role: "President & CEO",
      initials: "KS",
      bio: "Kevin has led KMS for over two decades, building it into one of the nation's most trusted wholesale distribution networks. His vision for connecting surplus with demand drives everything we do.",
    },
    {
      name: "Matt Schimmel",
      role: "Vice President",
      initials: "MS",
      bio: "Matt oversees day-to-day operations and key vendor relationships. His deep knowledge of the off-price market ensures KMS stays ahead of industry trends and delivers consistent value.",
    },
    {
      name: "Steve Schimmel",
      role: "Vice President, Purchasing",
      initials: "SS",
      bio: "Steve leads our purchasing division, evaluating thousands of inventory opportunities annually. His expertise in product valuation is backed by decades of hands-on market experience.",
    },
  ];

  const departments = [
    {
      name: "Purchasing",
      initials: "PR",
      desc: "Our buyers source inventory daily, evaluating opportunities across 50+ categories with precision and speed.",
    },
    {
      name: "Sales",
      initials: "SL",
      desc: "Our sales team matches buyers with the right deals, using data-driven insights to build lasting partnerships.",
    },
    {
      name: "Logistics & Warehouse",
      initials: "LW",
      desc: "From receiving to shipping, our warehouse team manages 1M+ sq ft of product flow with efficiency.",
    },
    {
      name: "Customer Service",
      initials: "CS",
      desc: "Our dedicated service team ensures every transaction is smooth, from first inquiry to final delivery.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>
            The people behind
            <br />
            the network.
          </h1>
          <p>
            A family-owned company with 40+ years of experience. Meet the
            team that keeps KMS connected.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Built on family, driven by results.</h2>
              <p>
                KMS began over 40 years ago as a small family operation. Today,
                we operate out of a 1,000,000+ square foot facility in Westland,
                Michigan — one of the largest wholesale distribution centers
                in the Midwest.
              </p>
              <p>
                Our mission hasn&apos;t changed: connect surplus inventory with
                the buyers who need it, faster and smarter than anyone else. We
                combine old-school relationships with data-driven
                intelligence to move product at scale.
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

      {/* Leadership */}
      <section className="content-section content-section--bordered">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
            <h2>Leadership</h2>
            <p>The experience and vision guiding the network forward.</p>
          </div>

          <div className="team__grid">
            {leadership.map((person) => (
              <div key={person.name} className="team__member">
                <div className="team__member-initials">{person.initials}</div>
                <h3>{person.name}</h3>
                <div className="team__member-role">{person.role}</div>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="content-section content-section--alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
            <h2>Our departments</h2>
            <p>Every team at KMS is built to move fast and deliver value.</p>
          </div>

          <div className="team__grid">
            {departments.map((dept) => (
              <div key={dept.name} className="team__member">
                <div
                  className="team__member-initials"
                  style={{ background: "var(--color-navy-light)" }}
                >
                  {dept.initials}
                </div>
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
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
              Want to work with a team that&apos;s been doing this for 40 years?
              Let&apos;s connect.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--white btn--large">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
