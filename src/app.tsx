import classNames from "classnames";
import styles from "./app.module.pcss";

export default function App() {
  return (
    <main
      className={classNames(
        styles.container,
        "dark text-foreground bg-background"
      )}
    >
      <p>a</p>
    </main>
  );
}
