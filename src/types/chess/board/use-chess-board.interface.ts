import { MutableRefObject } from "react";
import { BoardPiece } from "./board-piece.type";
import { BoardState } from "./board-state.type";
import { BoardPiecesMovementsHistory } from "./board-pieces-movements-history.type";

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
  boardPiecesHistory: BoardPiecesMovementsHistory;

  // Raw
  boardState: BoardState;
  setBoardState: (boardState: BoardState) => void;
  boardCellsRef: MutableRefObject<Record<string, HTMLDivElement | null>>;
  indexCellsRef: MutableRefObject<
    Record<string | number, HTMLDivElement | null>
  >;
}
