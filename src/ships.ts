import { Attack, laser } from "./attacks";

// type ShipClass = {
//   atk: number;
//   def: number;
//   spd: number;
//   moduleLimit: number;
// };
//
// type Starship = {
//   class: ShipClass;
//   designation: string;
//   flavor: string;
//   modules: Attack[];
// };

type Module = Attack; // | Defend | Utility;

export type Spacecraft = {
  name: string;
  flavor: string;
  attack: number;
  defense: number;
  speed: number;
  moduleLimit: number;
  health: number;
  modules: Module[];
};

export const fighter: Spacecraft = {
  name: "Fighter",
  flavor:
    "A light and versatile ship. Good for taking out cruiser class vessels.",
  attack: 5,
  defense: 3,
  speed: 4,
  moduleLimit: 3,
  health: 10,
  modules: [laser, laser],
};

export const intercepter: Spacecraft = {
  name: "Intercepter",
  flavor:
    "A fast but weak ship. Good for intercepting fighters and fleeing battles you can not win.",
  attack: 3,
  defense: 3,
  speed: 6,
  moduleLimit: 3,
  health: 10,
  modules: [laser, laser],
};

export const cruiser: Spacecraft = {
  name: "Cruiser",
  flavor: "A simple but trustworthy star cruiser.",
  attack: 4,
  defense: 6,
  speed: 2,
  moduleLimit: 4,
  health: 10,
  modules: [laser, laser, laser],
};
