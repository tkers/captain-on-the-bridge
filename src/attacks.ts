type DiceValue =
  | { kind: "ALL" }
  | { kind: "ODD" }
  | { kind: "EVEN" }
  | { kind: "MIN"; amount: number }
  | { kind: "MAX"; amount: number }
  | { kind: "EQL"; amount: number };

type AttackCost =
  | { kind: "TOTAL"; amount: number }
  | { kind: "SHAPE"; values: DiceValue[] };

type AttackDamage =
  | { kind: "FIXED"; amount: number; bonus?: number }
  | { kind: "SUM" };

export type Attack = {
  name: string;
  flavor: string;
  cost: AttackCost;
  damage: AttackDamage;
};

export const laser: Attack = {
  name: "Standard Laser",
  flavor: "A simple but trustworthy laser cannon",
  cost: { kind: "SHAPE", values: [{ kind: "ALL" }] },
  damage: { kind: "FIXED", amount: 3 },
};

export const ion: Attack = {
  name: "Ion cannon",
  flavor: "Nothing special, but gets the job done",
  cost: { kind: "SHAPE", values: [{ kind: "ODD" }] },
  damage: { kind: "SUM" },
};

export const chargedLaser: Attack = {
  name: "Charged Laser",
  flavor: "Heavy duty laser. Needs time to charge, but does a lot of damage.",
  cost: { kind: "TOTAL", amount: 24 },
  damage: { kind: "FIXED", amount: 9 },
};

export const missle: Attack = {
  name: "Medium-range missles",
  flavor: "Good 'ol missles to deal a good amount of damage",
  cost: {
    kind: "SHAPE",
    values: [
      { kind: "MIN", amount: 4 },
      { kind: "MIN", amount: 4 },
    ],
  },
  damage: { kind: "FIXED", amount: 6 },
};
