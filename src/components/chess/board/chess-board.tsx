import { ChessBoardController } from "../../../services/chess/board/chess-board.controller";

type Props = {
  controller: ChessBoardController;
};

// eslint-disable-next-line no-empty-pattern
export default function ChessBoard({}: Props) {
  return <div>BOARD</div>;
}
