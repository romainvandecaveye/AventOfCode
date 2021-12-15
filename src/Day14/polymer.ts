const incMapKey = (m: Map<string, number>, k: string, v = 1) =>
  m.set(k, (m.get(k) ?? 0) + v);

export function calculatePolymerScore(
  polymer: string,
  insertionInput: string,
  steps: number
): number {
  const rules = new Map();
  insertionInput
    .split('\n')
    .map((r) => r.split(' -> '))
    .forEach(([l, r]) => rules.set(l, r));

  let pairs = new Map();
  for (let i = 0; i < polymer.length - 1; i++) {
    incMapKey(pairs, polymer[i] + polymer[i + 1]);
  }

  for (let step = 0; step < steps; step++) {
    const newPairs = new Map();

    pairs.forEach((v, k) => {
      const c1 = k[0];
      const c2 = k[1];

      if (rules.has(k)) {
        const x = rules.get(k);
        incMapKey(newPairs, `${c1}${x}`, v);
        incMapKey(newPairs, `${x}${c2}`, v);
      } else {
        incMapKey(newPairs, `${c1}${c2}`, v);
      }
    });

    pairs = newPairs;
  }

  const cnt = new Map();
  pairs.forEach((v, k) => [0, 1].forEach((j) => incMapKey(cnt, k[j], v)));

  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  cnt.forEach((v) => {
    if (v < min) {
      min = v;
    }
    if (v > max) {
      max = v;
    }
  });

  return Math.ceil(max / 2) - Math.ceil(min / 2);
}
