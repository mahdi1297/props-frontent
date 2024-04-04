import { Link } from "react-router-dom";
import { headerMenuItems, MenuItem } from "./models";
import "./style.scss";
import SearchIcon from "assets/icons/search.svg";
import { Avatar } from "UI/components/avatar";

export const Header = () => {
  return (
    <header className="header w-100 pos-fixed">
      <div className="container w-100 h-100">
        <div className="w-100 h-100 d-flex justify-between align-center">
          <nav className="h-100 header-menu">
            <ul className="d-flex align-items-center h-100">
              {headerMenuItems.map((item: MenuItem) => {
                const isActiveRoute = item.id === 2 || false;
                return (
                  <li
                    key={item.id}
                    className={`ml-24 ${isActiveRoute ? "active_route" : ""}`}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {isActiveRoute ? (
                      <span className="active_line"></span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header-left h-100 d-flex align-center">
            <span className="search-icon-button ml-16">
              <img src={SearchIcon} width={24} alt="" />
            </span>

            <Avatar />
          </div>
        </div>
      </div>
    </header>
  );
};
