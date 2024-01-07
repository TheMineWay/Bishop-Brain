import { useEffect, useRef, useState } from "react";
import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";
import { IUseChessBoard } from "../../../types/chess/board/use-chess-board.interface";
import { CHESS_BOARD_DEFAULT_DISPLAY } from "../../../constants/chess/board/chess-board-default-display.constant";
import { generateChessBoardHoverEvents } from "../../../utils/chess/board/generate-chess-board-hover-events.util";
import styles from "@src/components/chess/board/chess-board.module.pcss";

export type BoardPiece = {
  piece: ChessPiece;
  isWhite: boolean;
};

export type BoardState = Record<string, BoardPiece>;

export function useChessBoard(): IUseChessBoard {
  const boardCellsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const indexCellsRef = useRef<Record<string | number, HTMLDivElement | null>>(
    {}
  );

  // Hover effect
  useEffect(() => {
    // Check if they are all ready
    if (
      Object.keys(boardCellsRef.current).length < 64 ||
      Object.keys(indexCellsRef.current).length < 16
    )
      return;

    const { destroyEvents } = generateChessBoardHoverEvents(
      boardCellsRef.current,
      indexCellsRef.current,
      {
        hoverClassName: styles["hover-index"],
      }
    );

    return destroyEvents;
  }, [boardCellsRef, indexCellsRef]);

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

  const movePosition = (
    fromRow: number,
    fromCell: string,
    toRow: number,
    toCell: string
  ) => {
    const piece = findByPosition(fromRow, fromCell);
    let state = deletePosition(fromRow, fromCell, { disableStateUpdate: true });

    if (piece !== null) {
      state = {
        ...state,
        ...setPosition(toRow, toCell, piece, { disableStateUpdate: true }),
      };
    }

    setBoardState(state);
  };

  return {
    findByPosition,
    setPosition,
    deletePosition,
    movePosition,

    // Raw
    boardState,
    setBoardState,
    boardCellsRef,
    indexCellsRef,
  };
}
