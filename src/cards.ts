import { Attack, laser } from "./attacks";

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

type Stat = "ATTACK" | "DEFENSE" | "SPEED" | "HEALTH";
export type MoveEffect = {
  self: boolean;
  stat: Stat;
  diff: { amount?: number; stat?: Stat };
};

export type Move = {
  name: string;
  flavor: string;
  effect: MoveEffect[];
};

export type EncounterCard = {
  type: "ENCOUNTER";
  name: string;
  flavor: string;
  attack: number;
  defense: number;
  speed: number;
  health: number;
  maxHealth: number;
  moves: [
    Move | null,
    Move | null,
    Move | null,
    Move | null,
    Move | null,
    Move | null
  ];
};

type ItemCard = {
  type: "ITEM";
  name: string;
  flavor: string;
  item: Attack;
};

export type Choice = {
  name: string;
  flavor: string;
  effect: MoveEffect[];
};

type EventCard = {
  type: "EVENT";
  name: string;
  flavor: string;
  options: [Choice, Choice];
};

type InfoCard = {
  type: "INFO";
  name: string;
  flavor: string;
};

export type Card = InfoCard | EncounterCard | ItemCard | EventCard;
export type Deck = Card[];

export const info = (name: string, flavor: string): InfoCard => ({
  type: "INFO",
  name,
  flavor,
});

export const niftyTechnician = (): EventCard => ({
  type: "EVENT",
  name: "Nifty Technician",
  flavor:
    "Your Head Technician offers to redirect some of the shield enery to your hyperdrive.",
  options: [
    {
      name: "Hell yes!",
      flavor: "The technician lowers the shields in favor of the hyperdrive",
      effect: [
        { self: true, stat: "SPEED", diff: { amount: 4 } },
        { self: true, stat: "DEFENSE", diff: { amount: -2 } },
      ],
    },
    { name: "Too risky", flavor: "You keep your shields intact.", effect: [] },
  ],
});

export const rustyLaser = (): ItemCard => ({
  type: "ITEM",
  name: "Rusty Laser",
  flavor: "You find a rusty laser cannon, it still appears to be functional",
  item: laser(),
});

export const spacePirate = (): EncounterCard => ({
  type: "ENCOUNTER",
  name: "Space Pirates",
  flavor:
    "Out of nowhere, a small vessel approaches. It's clearly not friendly.",
  attack: 5,
  defense: 2,
  speed: 5,
  health: 12,
  maxHealth: 12,
  moves: [
    undefined,
    undefined,
    {
      name: "Close call",
      flavor: "A laser shot just barely misses your ship",
      effect: [],
    },
    undefined,
    {
      name: "Laser",
      flavor: "Your ship is hit by a laser barrage",
      effect: [{ self: false, stat: "HEALTH", diff: { amount: -2 } }],
    },
    {
      name: "Critical hit",
      flavor: "A laser hits your ship's warp drives",
      effect: [{ self: false, stat: "HEALTH", diff: { amount: -4 } }],
    },
  ],
});

export const rustyTurret = (): EncounterCard => ({
  type: "ENCOUNTER",
  name: "Rusty Turret",
  flavor:
    "You approach a rusty turret. It does not look like much of a threat.",
  attack: 1,
  defense: 4,
  speed: 0,
  health: 5,
  maxHealth: 5,
  moves: [
    undefined,
    undefined,
    {
      name: "Whirr",
      flavor: "The turret whirrs, but does not manage to do anything else",
      effect: [],
    },
    undefined,
    {
      name: "Repair hull",
      flavor: "The turret manages to restore its hull",
      effect: [{ self: true, stat: "HEALTH", diff: { amount: 2 } }],
    },
    {
      name: "Laser",
      flavor: "Your ship is hit by light laser",
      effect: [{ self: false, stat: "HEALTH", diff: { amount: -1 } }],
    },
  ],
});
