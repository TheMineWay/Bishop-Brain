import { ChessPiece } from "../piece/chess-piece.enum";

export type BoardPiece = {
  piece: ChessPiece;
  isWhite: boolean;
};
