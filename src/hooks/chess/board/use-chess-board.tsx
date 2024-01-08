import { useEffect, useRef, useState, useTransition } from "react";
import { IUseChessBoard } from "../../../types/chess/board/use-chess-board.interface";
import { generateChessBoardHoverEvents } from "../../../utils/chess/board/generate-chess-board-hover-events.util";
import { BoardState } from "../../../types/chess/board/board-state.type";
import { BoardPiece } from "../../../types/chess/board/board-piece.type";
import { BoardPiecesMovementsHistory } from "../../../types/chess/board/board-pieces-movements-history.type";
import { CHESS_BOARD_DEFAULT_DISPLAY } from "../../../constants/chess/board/chess-board-default-display.constant";
import styles from "@src/components/chess/board/chess-board.module.pcss";

type Options = {
  initialDisplay?: BoardState;
};

export function useChessBoard({
  initialDisplay = CHESS_BOARD_DEFAULT_DISPLAY,
}: Options = {}): IUseChessBoard {
  const [, startTransition] = useTransition();

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

  const [boardState, setBoardState] = useState<BoardState>(initialDisplay);

  const [boardPiecesHistory, setBoardPiecesHistory] =
    useState<BoardPiecesMovementsHistory>([]);

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

    // Update board state and add movement
    startTransition(() => {
      setBoardState(state);
      addMovementToHistory(fromRow, fromCell, toRow, toCell);
    });
  };

  const addMovementToHistory = (
    fromRow: number,
    fromCell: string,
    toRow: number,
    toCell: string
  ) => {
    setBoardPiecesHistory([
      ...boardPiecesHistory,
      {
        from: `${fromRow}${fromCell}`,
        to: `${toRow}${toCell}`,
        at: new Date(Date.now()),
      },
    ]);
  };

  return {
    findByPosition,
    setPosition,
    deletePosition,
    movePosition,
    boardPiecesHistory,
    initialDisplay,

    // Raw
    boardState,
    setBoardState,
    boardCellsRef,
    indexCellsRef,
  };
}
