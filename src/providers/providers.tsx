import { Button, NextUIProvider } from "@nextui-org/react";

type Props = {
  children: JSX.Element;
};

export default function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <Button>a</Button>
      {children}
    </NextUIProvider>
  );
}
