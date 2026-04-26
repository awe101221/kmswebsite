import ContactForm from "../components/ContactForm";
import Icon from "../components/Icon";

export const metadata = {
  title: "Contact — kms.deals",
  description:
    "Get in touch with kms.deals. Whether you're connecting to buy, sell, or need support — our team responds fast.",
};

export default function ContactPage() {
  const info = [
    {
      icon: "phone",
      title: "Call us",
      lines: [
        { href: "tel:+17347222000", text: "(734) 722-2000" },
        { text: "Monday – Friday, 8am – 5pm ET" },
      ],
    },
    {
      icon: "mail",
      title: "Email us",
      lines: [
        { href: "mailto:info@kmswholesale.com", text: "info@kmswholesale.com" },
        { text: "We typically reply within 24 hours." },
      ],
    },
    {
      icon: "mapPin",
      title: "Visit our facility",
      lines: [
        { text: "Westland, Michigan" },
        { text: "1,000,000+ sq ft warehouse" },
        { text: "Tours available by appointment." },
      ],
    },
    {
      icon: "clock",
      title: "Business hours",
      lines: [
        { text: "Monday – Friday: 8:00 AM – 5:00 PM ET" },
        { text: "Saturday – Sunday: closed" },
      ],
    },
  ];

  const faqs = [
    {
      q: "What's the minimum order?",
      a: "We're flexible. Whether you need one pallet or a hundred truckloads, we'll work with you.",
    },
    {
      q: "Do you ship nationwide?",
      a: "Yes. We ship across the U.S. and can arrange logistics for international orders as well.",
    },
    {
      q: "How quickly do you respond to quotes?",
      a: "Most quote requests receive a response within 48 business hours, often sooner.",
    },
    {
      q: "Can I visit the warehouse?",
      a: "Buyers are welcome to tour our 1M+ sq ft facility by appointment.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept wire transfers, company checks, and can discuss terms for established accounts.",
    },
    {
      q: "How do I get started?",
      a: "Fill out the form above or call us directly at (734) 722-2000. We'll take it from there.",
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Let&apos;s connect.</h1>
          <p>
            Whether you&apos;re looking to buy, sell, or plug into the
            network — our team is ready.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <div>
                <h2 style={{ marginBottom: "var(--space-3)" }}>Get in touch.</h2>
                <p>
                  We respond to most inquiries within one business day. Reach
                  out however works best for you.
                </p>
              </div>

              {info.map((item) => (
                <div key={item.title} className="contact__info-item">
                  <div className="contact__info-icon">
                    <Icon name={item.icon} size={14} />
                  </div>
                  <div className="contact__info-text">
                    <h3>{item.title}</h3>
                    <p>
                      {item.lines.map((line, i) => (
                        <span key={i}>
                          {line.href ? <a href={line.href}>{line.text}</a> : line.text}
                          {i < item.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="container">
          <div className="section-header">
            <h2>Frequently asked questions.</h2>
            <p>Quick answers to common questions about the network.</p>
          </div>

          <div className="faq__grid">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq__item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
