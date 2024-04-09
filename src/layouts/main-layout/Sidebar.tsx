import { IconBlog, IconFAQ, IconMessage, IconProfile, IconTradeCenter, IconUsers } from "UI/icons";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar pos-fixed">
      <div className="__head"></div>
      <div className="__nav">
        <ul className="d-flex flex-col align-center justify-center mt-24">
          {menus.map((list) => {
            const isActiveRoute = list.path === pathname ? true : false;
            return (
              <li key={list.id} className={isActiveRoute ? "active" : ""}>
                <Link to={list.path}>{list.icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

const menus = [
  {
    id: 1,
    path: "/users",
    icon: IconUsers,
  },
  {
    id: 2,
    path: "/profile",
    icon: IconProfile,
  },
  {
    id: 3,
    path: "/tickets",
    icon: IconMessage,
  },
  {
    id: 4,
    path: "/trade-limmitions",
    icon: IconTradeCenter,
  },
  {
    id: 6,
    path: "/blogs",
    icon: IconBlog,
  },
  {
    id: 5,
    path: "/faq",
    icon: IconFAQ,
  },
];
