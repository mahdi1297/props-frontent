import { ReactNode } from "react";
import "./style.scss";

export const Card = ({ children }: { children?: ReactNode }) => {
  return <section className="card">{children}</section>;
};
