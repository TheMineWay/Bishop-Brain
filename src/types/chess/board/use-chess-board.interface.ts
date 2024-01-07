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
  movePosition: (
    fromRow: number,
    fromCell: string,
    toRow: number,
    toCell: string
  ) => void;

  // Raw
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
  boardCellsRef: MutableRefObject<Record<string, HTMLDivElement | null>>;
  indexCellsRef: MutableRefObject<
    Record<string | number, HTMLDivElement | null>
  >;
}
