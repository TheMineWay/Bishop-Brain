import { CHESS_PIECES } from "@constants/chess/pieces/chess-pieces.constant";
import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";
import { ChessPieceSkin } from "../../../types/chess/piece/chess-piece-skin.enum";

type Options = {
  isWhite: boolean;
  chessPiece: ChessPiece;
  skin?: ChessPieceSkin;
};

export const findChessPieceImage = ({
  isWhite,
  chessPiece,
  skin = ChessPieceSkin.DEFAULT,
}: Options) => {
  return CHESS_PIECES[skin][isWhite ? "white" : "black"][chessPiece];
};
