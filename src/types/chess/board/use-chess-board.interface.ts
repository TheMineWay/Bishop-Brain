import { MutableRefObject } from "react";
import {
  BoardPiece,
  BoardState,
} from "../../../hooks/chess/board/use-chess-board";

export interface IUseChessBoard {
  findByPosition: (row: number, cell: string) => BoardPiece | null;
  setPosition: (
    row: number,
    cell: string,
    boardPiece: BoardPiece,
    options?: { disableStateUpdate?: boolean }
  ) => BoardState;
  deletePosition: (
    row: number,
    cell: string,
    options?: { disableStateUpdate?: boolean }
  ) => BoardState;

  // Raw
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
  boardCellsRef: MutableRefObject<Record<string, HTMLDivElement | null>>;
}
