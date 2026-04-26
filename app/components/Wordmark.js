export default function Wordmark({ className = "wordmark" }) {
  return (
    <span className={className} aria-label="kms.deals">
      <span aria-hidden>kms</span>
      <svg
        className="wordmark__dot"
        viewBox="0 0 8 8"
        width="8"
        height="8"
        aria-hidden
      >
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      <span aria-hidden>deals</span>
    </span>
  );
}
