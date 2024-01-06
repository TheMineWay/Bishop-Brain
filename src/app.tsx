import classNames from "classnames";
import styles from "./app.module.pcss";
import Router from "./router/router";
import routes_definition from "./router/routes-definition";

export default function App() {
  return (
    <main
      className={classNames(
        styles.container,
        "light text-foreground bg-background"
      )}
    >
      <Router routes={routes_definition} />
    </main>
  );
}
