import Link from "next/link";

export const metadata = {
  title: "Our team — KMS Wholesale",
  description:
    "Meet the people behind the KMS network. Over 40 years of expertise in off-price wholesale, liquidation, and distribution.",
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
      bio: "Matt oversees day-to-day operations and key vendor relationships. His deep knowledge of the off-price market keeps KMS ahead of industry trends.",
    },
    {
      name: "Steve Schimmel",
      role: "Vice President, Purchasing",
      initials: "SS",
      bio: "Steve leads our purchasing division, evaluating thousands of inventory opportunities annually. His expertise in product valuation is backed by decades of hands-on experience.",
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
      name: "Logistics & warehouse",
      initials: "LW",
      desc: "From receiving to shipping, our warehouse team manages 1M+ sq ft of product flow with efficiency.",
    },
    {
      name: "Customer service",
      initials: "CS",
      desc: "Our service team ensures every transaction is smooth, from first inquiry to final delivery.",
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            The people behind
            <br />
            the network.
          </h1>
          <p>
            A family-owned company with forty years of experience. Meet the
            team that keeps KMS connected.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Built on family, driven by results.</h2>
              <p>
                KMS began over forty years ago as a small family operation.
                Today, we operate out of a 1,000,000+ square-foot facility
                in Westland, Michigan — one of the largest wholesale
                distribution centers in the Midwest.
              </p>
              <p>
                Our mission hasn&apos;t changed: connect surplus inventory
                with the buyers who need it, faster and smarter than anyone
                else. We combine old-school relationships with data-driven
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

      <section className="content-section content-section--bordered">
        <div className="container">
          <div className="section-header">
            <h2>Leadership.</h2>
            <p>The experience and vision guiding the network forward.</p>
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

      <section className="content-section content-section--alt">
        <div className="container">
          <div className="section-header">
            <h2>Our departments.</h2>
            <p>Every team at KMS is built to move fast and deliver value.</p>
          </div>

          <div className="team__grid">
            {departments.map((dept) => (
              <div key={dept.name} className="team__member">
                <div
                  className="team__member-initials"
                  style={{ background: gradientFor(dept.name) }}
                  aria-hidden
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

      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <h2>Join the network.</h2>
            <p>
              Want to work with a team that&apos;s been doing this for forty
              years? Let&apos;s connect.
            </p>
            <div className="cta__actions">
              <Link href="/contact" className="btn btn--primary btn--large">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
