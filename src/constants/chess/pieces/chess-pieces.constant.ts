import { ChessPieceSkin } from "../../../types/chess/piece/chess-piece-skin.enum";
import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";

// DEFAULT
// - White
import default_white_bishop from "@assets/chess/pieces/default/white_bishop.png";
import default_white_king from "@assets/chess/pieces/default/white_king.png";
import default_white_knight from "@assets/chess/pieces/default/white_knight.png";
import default_white_pawn from "@assets/chess/pieces/default/white_pawn.png";
import default_white_queen from "@assets/chess/pieces/default/white_queen.png";
import default_white_rook from "@assets/chess/pieces/default/white_rook.png";
// Black
import default_black_bishop from "@assets/chess/pieces/default/black_bishop.png";
import default_black_king from "@assets/chess/pieces/default/black_king.png";
import default_black_knight from "@assets/chess/pieces/default/black_knight.png";
import default_black_pawn from "@assets/chess/pieces/default/black_pawn.png";
import default_black_queen from "@assets/chess/pieces/default/black_queen.png";
import default_black_rook from "@assets/chess/pieces/default/black_rook.png";

export const CHESS_PIECES: Record<
  ChessPieceSkin,
  Record<"white" | "black", Record<ChessPiece, string>>
> = {
  [ChessPieceSkin.DEFAULT]: {
    white: {
      [ChessPiece.BISHOP]: default_white_bishop,
      [ChessPiece.KING]: default_white_king,
      [ChessPiece.KNIGHT]: default_white_knight,
      [ChessPiece.PAWN]: default_white_pawn,
      [ChessPiece.QUEEN]: default_white_queen,
      [ChessPiece.ROOK]: default_white_rook,
    },
    black: {
      [ChessPiece.BISHOP]: default_black_bishop,
      [ChessPiece.KING]: default_black_king,
      [ChessPiece.KNIGHT]: default_black_knight,
      [ChessPiece.PAWN]: default_black_pawn,
      [ChessPiece.QUEEN]: default_black_queen,
      [ChessPiece.ROOK]: default_black_rook,
    },
  },
};
