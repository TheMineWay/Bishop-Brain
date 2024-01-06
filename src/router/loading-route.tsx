import { Suspense } from "react";

type Props = {
  children: JSX.Element;
};

export default function LoadingRoute({ children }: Props) {
  return <Suspense>{children}</Suspense>;
}
