import { ChessPiece } from "../../../types/chess/piece/chess-piece.enum";
import { findChessPieceImage } from "../../../utils/chess/pieces/find-chess-piece-image.util";
import styles from "./piece.module.pcss";

type Props = {
  chessPiece: ChessPiece;
};

export default function Piece({ chessPiece }: Props) {
  return (
    <img
      className={styles.piece}
      src={findChessPieceImage({ isWhite: true, chessPiece })}
      alt={chessPiece}
    />
  );
}
