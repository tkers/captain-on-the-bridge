import { Attack, laser, droid, ion, missle, chargedLaser } from "./attacks";

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

export type Module = Attack; // | Defend | Utility;

export type Spacecraft = {
  name: string;
  flavor: string;
  attack: number;
  defense: number;
  speed: number;
  moduleLimit: number;
  health: number;
  maxHealth: number;
  modules: Module[];
};

export const fighter = (): Spacecraft => ({
  name: "Fighter",
  flavor:
    "A light and versatile ship. Good for taking out cruiser class vessels.",
  attack: 5,
  defense: 3,
  speed: 4,
  moduleLimit: 3,
  health: 6,
  maxHealth: 6,
  modules: [laser(), droid()],
});

export const intercepter = (): Spacecraft => ({
  name: "Intercepter",
  flavor:
    "A fast but weak ship. Good for intercepting fighters and fleeing battles you can not win.",
  attack: 3,
  defense: 3,
  speed: 6,
  moduleLimit: 3,
  health: 5,
  maxHealth: 5,
  modules: [laser(), ion()],
});

export const cruiser = (): Spacecraft => ({
  name: "Cruiser",
  flavor: "A simple but trustworthy star cruiser.",
  attack: 4,
  defense: 6,
  speed: 2,
  moduleLimit: 4,
  health: 8,
  maxHealth: 8,
  modules: [laser(), chargedLaser(), missle()],
});
