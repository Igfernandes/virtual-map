import { ReactNode } from "react";

export type MapNavigationContextData = {
  handleToggleProfile: (id: number) => void;
  showProfile: number;
};

export type MapNavigationProps = {
  children: ReactNode;
};
