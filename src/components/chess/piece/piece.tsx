import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";
import { findChessPieceImage } from "../../../utils/chess/pieces/find-chess-piece-image.util";
import styles from "./piece.module.pcss";

type Props = {
  chessPiece: ChessPiece;
  isWhite: boolean;
};

export default function Piece({ chessPiece, isWhite }: Props) {
  return (
    <img
      className={styles.piece}
      src={findChessPieceImage({ isWhite, chessPiece })}
      alt={chessPiece}
    />
  );
}
