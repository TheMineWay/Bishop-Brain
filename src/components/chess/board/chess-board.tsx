import classNames from "classnames";

import styles from "./chess-board.module.pcss";
import Piece from "../piece/piece";
import { IUseChessBoard } from "../../../types/chess/board/use-chess-board.interface";

type Props = {
  chessBoardInstance: IUseChessBoard;
};

const WHITE = "bg-white",
  BLACK = "bg-primary-300";

// eslint-disable-next-line no-empty-pattern
export default function ChessBoard({
  chessBoardInstance: { findByPosition, boardCellsRef },
}: Props) {
  const facingWhite = true;

  const ABC = "abcdefgh".split("")[facingWhite ? "slice" : "reverse"]();
  const NUMS = [1, 2, 3, 4, 5, 6, 7, 8][facingWhite ? "reverse" : "slice"]();

  return (
    <div className={styles.board}>
      {[...new Array(8)].map((_, r) => {
        const row = NUMS[r];

        return (
          <div key={r} className={styles.row}>
            <div className={classNames(styles.cell, styles.index)}>{row}</div>
            {[...new Array(8)].map((_, c) => {
              const cell = ABC[c];

              const piece = findByPosition(row, cell);

              return (
                <div
                  key={c}
                  className={classNames(
                    styles.cell,
                    (NUMS.findIndex((v) => v === row) +
                      ABC.findIndex((v) => v === cell)) %
                      2 ===
                      0
                      ? WHITE
                      : BLACK
                  )}
                  ref={(el) => (boardCellsRef.current[`${row}${cell}`] = el)}
                >
                  <div className={styles["piece-place"]}>
                    {piece && (
                      <Piece isWhite={piece.isWhite} chessPiece={piece.piece} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={styles.row}>
        <div className={classNames(styles.cell, styles.index)}></div>
        {[...new Array(8)].map((_, c) => {
          return (
            <div key={c} className={classNames(styles.cell, styles.index)}>
              {ABC[c]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
