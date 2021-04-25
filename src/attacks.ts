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
