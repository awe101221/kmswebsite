'use client';

export default function ContactForm() {
  return (
    <form
      className="contact__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="contact__form-row">
        <div className="contact__form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="John" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Doe" />
        </div>
      </div>

      <div className="contact__form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="john@company.com" />
      </div>

      <div className="contact__form-group">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" placeholder="Your Company" />
      </div>

      <div className="contact__form-group">
        <label htmlFor="interest">I&apos;m interested in...</label>
        <select id="interest" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="buying">Buying — match me with deals</option>
          <option value="selling">Selling — connect my inventory</option>
          <option value="both">Both buying and selling</option>
          <option value="other">General inquiry</option>
        </select>
      </div>

      <div className="contact__form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Tell us about your needs..."
          rows={5}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--large"
        style={{ alignSelf: "flex-start" }}
      >
        Send Message
      </button>
    </form>
  );
}
