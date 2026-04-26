// Deterministic pseudo-random so dots are stable across SSR + hydration
const rand = (i) => {
  const v = Math.sin(i * 12.9898 + 4.1414) * 43758.5453;
  return v - Math.floor(v);
};

function generateDots() {
  const dots = [];
  let i = 0;
  for (let y = 30; y < 580; y += 7) {
    for (let x = 30; x < 1170; x += 7) {
      i++;
      const dx = (x - 600) / 540;
      const dy = (y - 300) / 280;
      const r = Math.sqrt(dx * dx + dy * dy);
      if (r > 1) continue;
      if (rand(i) > 0.55) continue;

      const ox = (rand(i + 1000) - 0.5) * 4;
      const oy = (rand(i + 2000) - 0.5) * 4;
      const opacity = 0.18 + rand(i + 3000) * 0.4 * (1 - r * 0.5);
      const size = 1.1 + rand(i + 4000) * 0.6;

      dots.push({ x: x + ox, y: y + oy, opacity, size });
    }
  }
  return dots;
}

const DOTS = generateDots();

const ARCS = [
  { x1: 220, y1: 380, x2: 920, y2: 280, delay: 0 },
  { x1: 540, y1: 220, x2: 760, y2: 470, delay: 2.6 },
  { x1: 360, y1: 460, x2: 980, y2: 360, delay: 5.2 },
  { x1: 700, y1: 320, x2: 280, y2: 420, delay: 7.8 },
];

function arcPath(a) {
  const mx = (a.x1 + a.x2) / 2;
  const my = Math.min(a.y1, a.y2) - Math.abs(a.x2 - a.x1) * 0.28;
  return `M ${a.x1} ${a.y1} Q ${mx} ${my} ${a.x2} ${a.y2}`;
}

export default function ShipmentMap() {
  return (
    <svg
      className="shipment-map"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g>
        {DOTS.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.size}
            fill="#9CA3AF"
            opacity={d.opacity}
          />
        ))}
      </g>

      <g>
        {ARCS.map((a, i) => (
          <g key={i}>
            <path
              className="shipment-map__path"
              d={arcPath(a)}
              pathLength="100"
              style={{ animationDelay: `${a.delay}s` }}
            />
            <circle
              className="shipment-map__endpoint shipment-map__endpoint--start"
              cx={a.x1}
              cy={a.y1}
              r="3.5"
              style={{ animationDelay: `${a.delay}s` }}
            />
            <circle
              className="shipment-map__endpoint shipment-map__endpoint--end"
              cx={a.x2}
              cy={a.y2}
              r="3.5"
              style={{ animationDelay: `${a.delay + 1.6}s` }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
