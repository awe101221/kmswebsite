const PATHS = {
  // navigation / generic
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12l5 5L20 6" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  chevronRight: <path d="M9 6l6 6-6 6" />,

  // features
  link: <><path d="M10 14a4 4 0 0 1 0-5.7l3-3a4 4 0 0 1 5.7 5.7l-1.5 1.5" /><path d="M14 10a4 4 0 0 1 0 5.7l-3 3a4 4 0 0 1-5.7-5.7l1.5-1.5" /></>,
  barChart: <><path d="M3 3v18h18" /><path d="M7 14v4M12 9v9M17 5v13" /></>,
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,

  // contact
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><path d="M3 7l9 6 9-6" /><rect x="3" y="5" width="18" height="14" rx="2" /></>,
  mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,

  // categories — kept generic and monochrome
  shirt: <path d="M16 3l-2 2-2 2-2-2-2-2-5 3 2 5h2v9h10v-9h2l2-5-5-3z" />,
  footprints: <><path d="M5 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /><path d="M19 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /><path d="M7 22h0c-1.7 0-3-1.3-3-3v-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1c0 1.7-1.3 3-3 3z" /><path d="M17 14h0c-1.7 0-3-1.3-3-3v-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1c0 1.7-1.3 3-3 3z" /></>,
  smartphone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  home: <><path d="M3 11l9-8 9 8" /><path d="M5 9v11h14V9" /></>,
  package: <><path d="M21 8L12 3 3 8v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  sparkles: <><path d="M12 3v4M12 17v4M5 12H1M23 12h-4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" /></>,
  shoppingBag: <><path d="M5 7h14l-1 14H6L5 7z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></>,
  armchair: <><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" /><path d="M3 14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v2H5v-2a2 2 0 0 1-2-2v-3z" /></>,
  wrench: <path d="M14 7l3-3 4 4-3 3-2-1-7 7-3-3 7-7-2-1 3-3z" />,
  trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M17 5h3a2 2 0 0 1 0 4h-3M7 5H4a2 2 0 0 0 0 4h3" /></>,
  bookOpen: <><path d="M3 5h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H3V5z" /><path d="M21 5h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V5z" /></>,
};

export default function Icon({ name, size = 16, strokeWidth = 1.75, className, ...rest }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  );
}
