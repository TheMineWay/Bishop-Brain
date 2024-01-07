import ChessBoard from "../../components/chess/board/chess-board";
import { useChessBoard } from "../../hooks/chess/board/use-chess-board";

export default function HomePage() {
  const chessBoardInstance = useChessBoard();

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChessBoard chessBoardInstance={chessBoardInstance} />
    </div>
  );
}
