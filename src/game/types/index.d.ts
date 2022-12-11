/**
 * All the types that are used in the game instance adn related to the board.
 */

type CellValue = 0 | 1 | 2 | 3;

type Cell = {
	value: CellValue;
	flags: Set<CellValue>;
	isTurned: boolean;
};

type Board = Cell[][];

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type Player = {
	id: int;
	coins: int;
	currentLevel: Level;
};

type Game = {
	currentBoard: Board;
	player: Player;
	inMemo: boolean;
};

type GameAction = "turn" | "toggleFlag";

type MaxCoins = 50000;
