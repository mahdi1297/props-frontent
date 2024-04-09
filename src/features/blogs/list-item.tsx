import { Link } from "react-router-dom";
import "./style.scss";
import { Blog } from "./types";

export const ListItem = ({ item }: { item: Blog }) => {
  return (
    <div className="w-100 h-100 d-flex align-center justify-between blog__list-item">
      <div>
        <Link to={item.path} className="font-lg font-bold">{item.title}</Link>
        <p className="font-md">
          پلن های دریافت سرمایه پلن های دریافت سرمایهپلن های دریافت سرمایهپلن
          های دریافت سرمایهپلن های دریافت سرمایه
          رمایهپلن های دریافت سرمایهپلن
          های دریافت سرمایهپلن های دریافت سرمایه
          رمایهپلن های دریافت سرمایهپلن
          های دریافت سرمایهپلن های دریافت سرمایه
          , 
          رمایهپلن های دریافت سرمایهپلن
          های دریافت سرمایهپلن های دریافت سرمایه
          رمایهپلن های دریافت سرمایهپلن
          های دریافت سرمایهپلن های دریافت سرمایه
        </p>
      </div>
      <figure className="d-flex">
        <img src={item.thumbnail} height="100%" width="auto" alt="" />
      </figure>
    </div>
  );
};
