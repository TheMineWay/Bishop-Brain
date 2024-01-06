import classNames from "classnames";
import GlobalLayout from "./layouts/global/global.layout";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
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
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              "a"
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {"defaultContent"}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {"defaultContent"}
            </AccordionItem>
          </Accordion>
        </>
      </GlobalLayout>
    </main>
  );
}
