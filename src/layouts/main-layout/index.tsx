import { Sidebar } from "./Sidebar";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import "./style.scss";

export const MainLayout = () => {
  return (
    <div className="main_layout d-flex justify-end w-100">
      <Sidebar />
      <main>
        <Header />
        <main>
          <Outlet />
        </main>
      </main>
    </div>
  );
};
