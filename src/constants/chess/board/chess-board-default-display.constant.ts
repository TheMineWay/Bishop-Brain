import { BoardState } from "../../../hooks/chess/board/use-chess-board";
import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";

export const CHESS_BOARD_DEFAULT_DISPLAY: BoardState = {
  "8a": {
    isWhite: false,
    piece: ChessPiece.ROOK,
  },
  "8b": {
    isWhite: false,
    piece: ChessPiece.KNIGHT,
  },
  "8c": {
    isWhite: false,
    piece: ChessPiece.BISHOP,
  },
  "8d": {
    isWhite: false,
    piece: ChessPiece.QUEEN,
  },
  "8e": {
    isWhite: false,
    piece: ChessPiece.KING,
  },
  "8f": {
    isWhite: false,
    piece: ChessPiece.BISHOP,
  },
  "8g": {
    isWhite: false,
    piece: ChessPiece.KNIGHT,
  },
  "8h": {
    isWhite: false,
    piece: ChessPiece.ROOK,
  },
  "7a": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7b": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7c": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7d": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7e": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7f": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7g": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },
  "7h": {
    isWhite: false,
    piece: ChessPiece.PAWN,
  },

  // WHITE
  "1a": {
    isWhite: true,
    piece: ChessPiece.ROOK,
  },
  "1b": {
    isWhite: true,
    piece: ChessPiece.KNIGHT,
  },
  "1c": {
    isWhite: true,
    piece: ChessPiece.BISHOP,
  },
  "1d": {
    isWhite: true,
    piece: ChessPiece.QUEEN,
  },
  "1e": {
    isWhite: true,
    piece: ChessPiece.KING,
  },
  "1f": {
    isWhite: true,
    piece: ChessPiece.BISHOP,
  },
  "1g": {
    isWhite: true,
    piece: ChessPiece.KNIGHT,
  },
  "1h": {
    isWhite: true,
    piece: ChessPiece.ROOK,
  },
  "2a": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2b": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2c": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2d": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2e": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2f": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2g": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
  "2h": {
    isWhite: true,
    piece: ChessPiece.PAWN,
  },
};
