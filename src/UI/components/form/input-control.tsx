import "./style.scss";
import { FC } from "react";

type Props = {
  name?: string;
  placeholder?: string;
  label?: string;
  type?: any;
};

export const InputControl: FC<Props> = ({
  label,
  placeholder,
  name,
  type = "text",
}) => {
  return (
    <div className="w-100 __input-control w-100 d-flex flex-col">
      <label htmlFor={name} className="font-sm text-dark">{label}</label>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
