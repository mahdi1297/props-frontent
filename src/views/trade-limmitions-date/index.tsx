import "./style.scss";
import { TradeLimmitionsDataTable } from "features/trade-limmitions";

export const TradeLimmitionsDate = () => {
  return (
    <div className="trade-limmitions__wrapper">
      <div className="container">
        <TradeLimmitionsDataTable />

      </div>
    </div>
  );
};

