import { FC } from "react";
import "./style.scss";

type Props = {
  placeholder?: string
}

export const Input:FC<Props> = ({placeholder}) => {
  return <input className="form-control__input" placeholder={placeholder}/>;
};
