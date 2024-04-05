import { WraningBox } from "features/trade-limmitions/warning-box";
import { TradeLimmitionsDataTable } from "features/trade-limmitions/table";
import "./style.scss";

export const TradeLimmitionsDate = () => {
  return (
    <div className="trade-limmitions__wrapper">
      <WraningBox />
      <TradeLimmitionsDataTable />
    </div>
  );
};
