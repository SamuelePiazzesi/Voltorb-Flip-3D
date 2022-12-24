import {
  IBoard,
  Cell,
  CellPosition,
  CellValue,
  GameAction,
  Player,
} from "../types";

//TODO: make board a class
export const initGame = (player: Player) => {
  const board = new Board([[{ value: 0, flags: new Set(), isTurned: false }]]);
  //TODO: make board randomized on currentLevel
  return {
    currentBoard: board,
    player,
    inMemo: false,
  };
};

class Board implements IBoard {
  constructor(cells: Cell[][]) {
    this.cells = cells;
  }

  private toggleFlag = (pos: CellPosition, flag: CellValue) => {
    if (this.cells[pos.row][pos.column].flags.has(flag)) {
      this.cells[pos.row][pos.column].flags.delete(flag);
    } else {
      this.cells[pos.row][pos.column].flags.add(flag);
    }
  };

  private turnCell = (pos: CellPosition) => {
    this.cells[pos.row][pos.column].isTurned = true;
  };

  public sendAction = (action: GameAction) => {
    switch (action.type) {
      case "turn":
        this.turnCell(action.pos);
        break;
      case "toggleFlag":
        this.toggleFlag(action.pos, action.flag);
        break;
      default:
        throw new Error("Action not implemented");
    }
  };

  set cells(cells: Cell[][]) {
    this.cells = cells;
  }

  get cells() {
    return this.cells;
  }
}
