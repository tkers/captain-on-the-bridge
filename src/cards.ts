import { Attack } from "./attacks";

type Stat = "ATTACK" | "DEFENSE" | "SPEED" | "HEALTH";
type MoveEffect = {
  self: boolean;
  stat: Stat;
  diff: { amount?: number; stat?: Stat };
};

type Move = {
  name: string;
  flavor: string;
  effect: MoveEffect[];
};

type EncounterCard = {
  type: "ENCOUNTER";
  name: string;
  flavor: string;
  attack: number;
  defense: number;
  speed: number;
  health: number;
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

type Choice = {
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

export type Card = EncounterCard | ItemCard | EventCard;
export type Deck = Card[];

import { laser } from "./attacks";

export const niftyTechnician: EventCard = {
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
};

export const rustyLaser: ItemCard = {
  type: "ITEM",
  name: "Rusty Laser",
  flavor: "You find a rusty laser cannon, it still appears to be functional",
  item: laser,
};

export const spacePirate: EncounterCard = {
  type: "ENCOUNTER",
  name: "Space Pirates",
  flavor:
    "Out of nowhere, a small vessel approaches. It's clearly not friendly.",
  attack: 5,
  defense: 2,
  speed: 5,
  health: 3,
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
      effect: [{ self: false, stat: "HEALTH", diff: { amount: 2 } }],
    },
    {
      name: "Critical hit",
      flavor: "A laser hits your ship's warp drives",
      effect: [{ self: false, stat: "HEALTH", diff: { amount: 4 } }],
    },
  ],
};
