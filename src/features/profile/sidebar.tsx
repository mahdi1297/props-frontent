import { Card } from "UI/components/card";
import "./style.scss";
import { IconProfileEdit } from "UI/icons";

export const ProfileSidebar = () => {
  return (
    <Card>
      <div className="profile__sidebar p-16">
        <Title />
        <Menu />
      </div>
    </Card>
  );
};

const Menu = () => {
  return (
    <ul className="menu mt-16 d-flex flex-col gap-8">
      {menuItems?.map((item) => {
        return (
          <li
            className={`${item.id === 1 ? "active" : ""} d-flex font-,d align-center `}
            key={item.id}
          >
            {item.icon}
            <span className="pr-16">{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Title = () => {
  return (
    <div className="aside-title">
      <h3 className="font-lg text-dark font-bold pb-16">پروفایل</h3>
    </div>
  );
};

const menuItems = [
  {
    id: 1,
    title: "ویرایش اطلاعات",
    icon: IconProfileEdit,
  },
  {
    id: 2,
    title: "رمز عبور جدید",
    icon: IconProfileEdit,
  },
];
