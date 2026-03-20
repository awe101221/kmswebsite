import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact & Customer Service | KMS Wholesale",
  description:
    "Get in touch with KMS Wholesale. Whether you're connecting to buy, sell, or need support — our team responds fast.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>
            Let&apos;s connect.
          </h1>
          <p>
            Whether you&apos;re looking to buy, sell, or plug into the
            network — our team is ready.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="content-section">
        <div className="container">
          <div className="contact__grid">
            {/* Info Column */}
            <div className="contact__info">
              <div>
                <h2 style={{ marginBottom: "var(--space-md)" }}>Get in touch.</h2>
                <p>
                  We respond to most inquiries within one business day. Reach out
                  however works best for you.
                </p>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">📞</div>
                <div className="contact__info-text">
                  <h3>Call Us</h3>
                  <p>
                    <a href="tel:+17347222000" style={{ color: "var(--color-text)" }}>
                      (734) 722-2000
                    </a>
                    <br />
                    Monday – Friday, 8am – 5pm ET
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">✉️</div>
                <div className="contact__info-text">
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:info@kmswholesale.com" style={{ color: "var(--color-text)" }}>
                      info@kmswholesale.com
                    </a>
                    <br />
                    We typically reply within 24 hours.
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div className="contact__info-text">
                  <h3>Visit Our Facility</h3>
                  <p>
                    Westland, Michigan
                    <br />
                    1,000,000+ sq ft warehouse
                    <br />
                    Tours available by appointment.
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">⏱️</div>
                <div className="contact__info-text">
                  <h3>Business Hours</h3>
                  <p>
                    Monday – Friday: 8:00 AM – 5:00 PM ET
                    <br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section content-section--alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
            <h2>Frequently asked questions</h2>
            <p>Quick answers to common questions about the network.</p>
          </div>

          <div className="team__grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
            {[
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
                a: "Absolutely. Buyers are welcome to tour our 1M+ sq ft facility by appointment.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept wire transfers, company checks, and can discuss terms for established accounts.",
              },
              {
                q: "How do I get started?",
                a: "Fill out the form above or call us directly at (734) 722-2000. We'll take it from there.",
              },
            ].map((faq) => (
              <div key={faq.q} className="team__member">
                <h3 style={{ fontSize: "1rem", marginBottom: "var(--space-sm)" }}>
                  {faq.q}
                </h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
