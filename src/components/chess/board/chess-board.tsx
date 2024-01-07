import classNames from "classnames";
import { ChessBoardController } from "../../../services/chess/board/chess-board.controller";

import styles from "./chess-board.module.pcss";

type Props = {
  controller: ChessBoardController;
};

const WHITE = "white",
  BLACK = "black";

// eslint-disable-next-line no-empty-pattern
export default function ChessBoard({}: Props) {
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

              return (
                <div
                  key={c}
                  className={styles.cell}
                  style={{
                    backgroundColor:
                      (NUMS.findIndex((v) => v === row) +
                        ABC.findIndex((v) => v === cell)) %
                        2 ===
                      0
                        ? WHITE
                        : BLACK,
                  }}
                >
                  <div className={styles["piece-place"]}></div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={styles.row}>
        <div className={classNames(styles.cell, styles.index)}>X</div>
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
