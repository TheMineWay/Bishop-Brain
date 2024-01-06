import classNames from "classnames";
import GlobalLayout from "./layouts/global/global.layout";
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
      <GlobalLayout>
        <Router routes={routes_definition} />
      </GlobalLayout>
    </main>
  );
}
