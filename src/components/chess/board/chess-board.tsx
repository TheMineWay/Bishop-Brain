import { ChessBoardController } from "../../../services/chess/board/chess-board.controller";

import styles from "./chess-board.module.pcss";

type Props = {
  controller: ChessBoardController;
};

const WHITE = "white",
  BLACK = "black";

// eslint-disable-next-line no-empty-pattern
export default function ChessBoard({}: Props) {
  return (
    <div className={styles.board}>
      {[...new Array(8)].map((_, i) => (
        <div key={i} className={styles.row}>
          {[...new Array(8)].map((_, j) => (
            <div
              key={j}
              className={styles.cell}
              style={{ backgroundColor: (i + j) % 2 === 0 ? WHITE : BLACK }}
            >
              <div>{j}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
