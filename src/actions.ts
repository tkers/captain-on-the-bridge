import { Spacecraft } from "./ships";
import { Attack } from "./attacks";
import { DiceValue, Choice, EncounterCard, Move } from "./cards";

type SelectShipAction = { type: "SELECT_SHIP"; ship: Spacecraft };
type TurnCardAction = { type: "TURN_CARD" };
type InstallItemAction = { type: "INSTALL_ITEM"; item: Attack };
type MakeChoiceAction = { type: "MAKE_CHOICE"; choice: Choice };
type AttemptEscapeAction = { type: "ATTEMPT_ESCAPE"; enemy: EncounterCard };
type BattleStationsAction = { type: "BATTLE_STATIONS" };
type RollDiceAction = { type: "ROLL_DICE"; dice: DiceValue[] };
type SelectDiceAction = { type: "SELECT_DICE"; index: number };
type AssignDiceAction = {
  type: "ASSIGN_DICE";
  moduleIndex: number;
  diceIndex: number;
};
type UseWeaponAction = { type: "USE_WEAPON"; index: number };
type EndTurnAction = { type: "END_TURN" };
type EnemyMoveAction = { type: "ENEMY_MOVE"; move: Move };
type ReplayAction = { type: "REPLAY" };

export type Action =
  | SelectShipAction
  | TurnCardAction
  | InstallItemAction
  | MakeChoiceAction
  | AttemptEscapeAction
  | BattleStationsAction
  | RollDiceAction
  | SelectDiceAction
  | AssignDiceAction
  | UseWeaponAction
  | EndTurnAction
  | EnemyMoveAction
  | ReplayAction;

export type Dispatch = (action: Action) => void;
