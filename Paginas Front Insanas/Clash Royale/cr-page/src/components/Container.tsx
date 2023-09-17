import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Container({ children }: Props) {
  return (
    <div className="flex items- w-full max-w-[1520px] px-[15px] mx-auto">
      {children}
    </div>
  );
}
