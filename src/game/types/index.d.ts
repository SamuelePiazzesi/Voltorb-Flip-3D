/**
 * All the types that are used in the game instance adn related to the board.
 */

export type CellValue = 0 | 1 | 2 | 3;

export type Cell = {
  value: CellValue;
  flags: Set<CellValue>;
  isTurned: boolean;
};

type CellPosition = {
  row: number;
  column: number;
};
export interface IBoard {
  sendAction: (action: GameAction) => void;
}

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Player = {
  id: number;
  coins: number;
  streak: number;
  currentLevel: Level;
};

export type Game = {
  currentBoard: IBoard;
  player: Player;
  inMemo: boolean;
};

interface baseAction<T extends string> {
  type: T;
  pos: CellPosition;
}

interface TurnAction extends baseAction<"turn"> {}

interface ToggleFlagAction extends baseAction<"toggleFlag"> {
  flag: CellValue;
}

export type GameAction = TurnAction | ToggleFlagAction;
