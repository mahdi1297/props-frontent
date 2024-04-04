import { FC, ReactNode } from "react";
import "./style.scss";

type Props = {
  text?: string;
  childern?: ReactNode;
  varients?: "outline-muted" | "outline-danger" | "parimary";
  size?: "lg";
  width?: string;
};

export const Button: FC<Props> = ({
  text,
  childern,
  varients = "outline-muted",
  size = "lg",
  width,
}) => {
  return (
    <div className="__button">
      <button
        className={`${varients} ${size}`}
        style={{
          width,
        }}
      >
        {childern || text}
      </button>
    </div>
  );
};
