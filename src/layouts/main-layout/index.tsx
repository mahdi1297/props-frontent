import { FC, ReactNode } from "react";
import "./style.scss";
import { Sidebar } from "./Sidebar";
import { Header } from "./header";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="main_layout d-flex justify-end w-100">
      <Sidebar />
      <main>
        <Header />
        <div className="__body">{children}</div>
      </main>
    </div>
  );
};
