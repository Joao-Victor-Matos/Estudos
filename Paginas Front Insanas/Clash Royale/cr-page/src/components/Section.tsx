import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Section({ children }: Props) {
  return <section className="w-full flex  flex-col mt-20">{children}</section>;
}
