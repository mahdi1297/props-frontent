import { Card } from "UI/components/card";
import "./style.scss";
import { TRADE_LIMMITIONS_WARNINGS } from "consts/warnings-and-errors";

export const WraningBox = () => {
  return (
    <div className="container mt-24">
      <Card>
        <div className="warning-box__wrapper">
          <h3 className="font-lg text-dark">هشدار!</h3>
          <div className="warning-box mt-24 w-100 p-16">
            {TRADE_LIMMITIONS_WARNINGS.map((text: string, index: number) => {
              return (
                <p className="font-light font-sm text-dark mt-8" key={index}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
