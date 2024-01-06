import classNames from "classnames";
import GlobalLayout from "./layouts/global/global.layout";
import { Button } from "@nextui-org/react";
import styles from "./app.module.pcss";

export default function App() {
  return (
    <main
      className={classNames(
        styles.container,
        "light text-foreground bg-background"
      )}
    >
      <GlobalLayout>
        <>
          <Button>CONTENT</Button>
        </>
      </GlobalLayout>
    </main>
  );
}
