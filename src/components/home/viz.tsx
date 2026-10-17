// Seeded, illustrative SVG figures for the Projects pane. Not real results.
import { CAPTIONS, type Viz } from "@/data/home";

type Vec3 = [number, number, number];

function rng(seed: string) {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function project(p: Vec3): Vec3 {
  const a = 0.62, t = 0.32;
  const x = p[0] * Math.cos(a) + p[2] * Math.sin(a);
  const z = -p[0] * Math.sin(a) + p[2] * Math.cos(a);
  const y2 = p[1] * Math.cos(t) - z * Math.sin(t);
  const z2 = p[1] * Math.sin(t) + z * Math.cos(t);
  const f = 2.8 / (2.8 + z2);
  return [400 + x * 210 * f, 225 - y2 * 210 * f, z2];
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function tracts(id: string) {
  const rand = rng(id);
  const bundles: { a: Vec3; b: Vec3; c: Vec3; n: number; s: number }[] = [
    { a: [-1, 0.1, -0.3], b: [1, 0.1, -0.3], c: [0, 0.75, -0.1], n: 70, s: 0.1 },
    { a: [-0.45, -0.7, 0.2], b: [-0.5, 0.65, -0.1], c: [-0.6, 0, 0.1], n: 45, s: 0.07 },
    { a: [0.45, -0.7, 0.2], b: [0.5, 0.65, -0.1], c: [0.6, 0, 0.1], n: 45, s: 0.07 },
    { a: [-0.55, 0.05, -0.9], b: [-0.55, 0.1, 0.9], c: [-0.7, 0.25, 0], n: 40, s: 0.06 },
    { a: [0.55, 0.05, -0.9], b: [0.55, 0.1, 0.9], c: [0.7, 0.25, 0], n: 40, s: 0.06 },
  ];
  return bundles.map((b) => {
    let d = "";
    for (let k = 0; k < b.n; k++) {
      const o = [0, 1, 2].map(() => (rand() - 0.5) * 2 * b.s);
      for (let i = 0; i <= 24; i++) {
        const t = i / 24, u = 1 - t, w = 0.6 + 0.8 * Math.sin(Math.PI * t);
        const p = [0, 1, 2].map((j) => u * u * b.a[j] + 2 * u * t * b.c[j] + t * t * b.b[j] + o[j] * w) as Vec3;
        const q = project(p);
        d += (i ? "L" : "M") + r1(q[0]) + " " + r1(q[1]);
      }
    }
    return d;
  });
}

function points(id: string) {
  const rand = rng(id);
  const pts: Vec3[] = [];
  if (id === "sculpt3d") {
    const box = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, n: number) => {
      for (let i = 0; i < n; i++) pts.push([x0 + rand() * (x1 - x0), y0 + rand() * (y1 - y0), z0 + rand() * (z1 - z0)]);
    };
    box(-0.5, 0.5, -0.05, 0.05, -0.5, 0.5, 700);
    box(-0.5, 0.5, 0.05, 0.95, 0.42, 0.5, 600);
    for (const [cx, cz] of [[-0.45, -0.45], [0.45, -0.45], [-0.45, 0.45], [0.45, 0.45]]) {
      box(cx - 0.04, cx + 0.04, -0.85, -0.05, cz - 0.04, cz + 0.04, 120);
    }
  } else {
    for (let i = 0; i < 1800; i++) {
      const t = rand() * 2 - 1, a = rand() * Math.PI * 2, r = 0.16 * Math.sqrt(rand());
      pts.push([t, 0.45 * (1 - t * t) - 0.1 + r * Math.cos(a), r * Math.sin(a)]);
    }
  }
  const bands = ["", "", ""];
  for (const p of pts) {
    const q = project(p);
    const k = q[2] < -0.25 ? 0 : q[2] < 0.25 ? 1 : 2;
    bands[k] += "M" + r1(q[0]) + " " + r1(q[1]) + "h2v2h-2z";
  }
  return bands;
}

function boxes(id: string) {
  const rand = rng(id);
  let walls = "", glyphs = "", bx = "";
  for (let i = 0; i < 26; i++) {
    const x = rand() * 800, y = rand() * 450, len = 120 + rand() * 300;
    walls += rand() > 0.5
      ? "M" + r1(x) + " " + r1(y) + "H" + r1(Math.min(800, x + len))
      : "M" + r1(x) + " " + r1(y) + "V" + r1(Math.min(450, y + len * 0.6));
  }
  for (let k = 0; k < 18; k++) {
    const x = 30 + rand() * 660, y = 25 + rand() * 370, w = 40 + rand() * 72, h = 12 + rand() * 12;
    for (let g = 0; g < 3; g++) {
      glyphs += "M" + r1(x + 4 + (g * w) / 3.2) + " " + r1(y + h * 0.35) + "h" + r1(w / 4) + "v" + r1(Math.max(2, h * 0.3)) + "h-" + r1(w / 4) + "z";
    }
    bx += "M" + r1(x) + " " + r1(y) + "h" + r1(w) + "v" + r1(h) + "h-" + r1(w) + "z";
  }
  return { walls, glyphs, boxes: bx };
}

function wave() {
  const g = (p: number, m: number, v: number) => Math.exp(-Math.pow(p - m, 2) / v);
  const ecg = (t: number) => {
    const p = t % 1;
    return g(p, 0.2, 0.0012) * 0.15 - g(p, 0.285, 0.00008) * 0.25 + g(p, 0.3, 0.00012) - g(p, 0.315, 0.00008) * 0.3 + g(p, 0.55, 0.004) * 0.3;
  };
  const scg = (t: number) => {
    const p = t % 1;
    return Math.sin(p * 90) * g(p, 0.33, 0.0009) * 0.8 + Math.sin(p * 70) * g(p, 0.62, 0.0012) * 0.45;
  };
  let e = "", s = "", grid = "";
  for (let x = 0; x <= 800; x += 2) {
    const t = (x / 800) * 4;
    e += (x ? "L" : "M") + x + " " + r1(160 - ecg(t) * 100);
    s += (x ? "L" : "M") + x + " " + r1(340 - scg(t) * 70);
  }
  for (let x = 0; x <= 800; x += 50) grid += "M" + x + " 0V450";
  return { ecg: e, scg: s, grid };
}

const TRACT_COLORS = ["#c9d8f2", "#7d9ccf", "#7d9ccf", "#4f74b3", "#4f74b3"];

export function VizFigure({ id, viz }: { id: string; viz: Viz }) {
  const caption = CAPTIONS[viz];
  let body: React.ReactNode;
  if (viz === "tracts") {
    body = tracts(id).map((d, i) => (
      <path key={i} d={d} fill="none" stroke={TRACT_COLORS[i]} strokeWidth={1} strokeOpacity={0.75} />
    ));
  } else if (viz === "points") {
    const [p0, p1, p2] = points(id);
    body = (
      <>
        <path d={p2} fill="#7aa0e0" fillOpacity={0.45} />
        <path d={p1} fill="#a3c0ef" fillOpacity={0.7} />
        <path d={p0} fill="#d6e4fb" fillOpacity={0.95} />
      </>
    );
  } else if (viz === "boxes") {
    const b = boxes(id);
    body = (
      <>
        <path d={b.walls} fill="none" stroke="#aabee1" strokeOpacity={0.4} strokeWidth={1} />
        <path d={b.glyphs} fill="#7d9ccf" fillOpacity={0.6} />
        <path d={b.boxes} fill="none" stroke="#a9c1ea" strokeWidth={1.5} />
      </>
    );
  } else {
    const w = wave();
    body = (
      <>
        <path d={w.grid} fill="none" stroke="#aabee1" strokeOpacity={0.12} strokeWidth={1} />
        <path d={w.ecg} fill="none" stroke="#c9d8f2" strokeWidth={1.8} />
        <path d={w.scg} fill="none" stroke="#8fb0e6" strokeWidth={1.8} />
      </>
    );
  }
  return (
    <figure className="op-figure">
      <svg viewBox="0 0 800 450" width="100%" height="100%" role="img" aria-label={caption}>
        {body}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
