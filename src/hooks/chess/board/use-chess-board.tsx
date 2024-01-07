import { useState } from "react";
import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";
import { IUseChessBoard } from "../../../types/chess/board/use-chess-board.interface";
import { CHESS_BOARD_DEFAULT_DISPLAY } from "../../../constants/chess/board/chess-board-default-display.constant";

export type BoardPiece = {
  piece: ChessPiece;
  isWhite: boolean;
};

export type BoardState = Record<string, BoardPiece>;

export function useChessBoard(): IUseChessBoard {
  const [boardState, setBoardState] = useState<BoardState>(
    CHESS_BOARD_DEFAULT_DISPLAY
  );

  const findByPosition = (row: number, cell: string): BoardPiece | null => {
    const key = `${row}${cell}`;
    if (Object.keys(boardState).includes(key)) return boardState[key];
    return null;
  };

  const setPosition = (
    row: number,
    cell: string,
    boardPiece: BoardPiece,
    options?: { disableStateUpdate?: boolean }
  ) => {
    const newState = { ...boardState, [`${row}${cell}`]: boardPiece };
    if (!options?.disableStateUpdate) setBoardState(newState);
    return newState;
  };

  const deletePosition = (
    row: number,
    cell: string,
    options?: { disableStateUpdate?: boolean }
  ) => {
    const newState = { ...boardState };
    delete newState[`${row}${cell}`];
    if (!options?.disableStateUpdate) setBoardState(newState);
    return newState;
  };

  return {
    findByPosition,
    setPosition,
    deletePosition,

    // Raw
    boardState,
    setBoardState,
  };
}