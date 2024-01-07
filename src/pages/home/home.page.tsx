import ChessBoard from "../../components/chess/board/chess-board";
import { ChessBoardController } from "../../services/chess/board/chess-board.controller";

export default function HomePage() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChessBoard controller={new ChessBoardController()} />
    </div>
  );
}
