type DiceValue =
  | { kind: "ALL" }
  | { kind: "ODD" }
  | { kind: "EVEN" }
  | { kind: "MIN"; amount: number }
  | { kind: "MAX"; amount: number }
  | { kind: "EQL"; amount: number };

type AttackCost =
  | { kind: "TOTAL"; amount: number; assigned: number }
  | { kind: "SHAPE"; values: DiceValue[]; assigned: number[] };

type EffectAmount = { kind: "FIXED"; amount: number } | { kind: "SUM" };

export type Attack = {
  name: string;
  flavor: string;
  cost: AttackCost;
  damage?: EffectAmount;
  repair?: EffectAmount;
};

export const clearAssigned = (m: Attack): Attack => {
  if (m.cost.kind === "TOTAL") {
    return {
      ...m,
      cost: {
        ...m.cost,
        assigned: 0,
      },
    };
  } else {
    return {
      ...m,
      cost: {
        ...m.cost,
        assigned: [],
      },
    };
  }
};

export const laser = (): Attack => ({
  name: "Standard Laser",
  flavor: "A simple but trustworthy laser cannon",
  cost: { kind: "SHAPE", values: [{ kind: "ALL" }], assigned: [] },
  damage: { kind: "FIXED", amount: 2 },
});

export const droid = (): Attack => ({
  name: "Repair Droid",
  flavor: "A friendly droid to repair your hull during battles",
  cost: { kind: "SHAPE", values: [{ kind: "MAX", amount: 2 }], assigned: [] },
  repair: { kind: "SUM" },
});

export const ion = (): Attack => ({
  name: "Ion cannon",
  flavor: "Nothing special, but gets the job done",
  cost: { kind: "SHAPE", values: [{ kind: "ODD" }], assigned: [] },
  damage: { kind: "SUM" },
});

export const chargedLaser = (): Attack => ({
  name: "Charged Laser",
  flavor: "Heavy duty laser. Needs time to charge, but does a lot of damage.",
  cost: { kind: "TOTAL", amount: 12, assigned: 0 },
  damage: { kind: "FIXED", amount: 6 },
});

export const missle = (): Attack => ({
  name: "Medium-range missles",
  flavor: "Good 'ol missles to deal a good amount of damage",
  cost: {
    kind: "SHAPE",
    values: [
      { kind: "EQL", amount: 6 },
      { kind: "EQL", amount: 6 },
    ],
    assigned: [],
  },
  damage: { kind: "FIXED", amount: 8 },
});
