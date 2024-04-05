import { Card } from "UI/components/card";
import "./style.scss";

export const TradeLimmitionsDataTable = () => {
  return (
    <div className="container mt-24">
      <Card>
        <h3 className="font-lg text-dark">
          تقویم ممنوعیت معاملاتی در هفته جاری به وقت ایران
        </h3>
        <div className="mt-24" />
        <MinimalDataTable />
      </Card>
    </div>
  );
};

const MinimalDataTable = () => {
  const heads = ["نماد", "روز", "تاریخ", "ساعت"];

  const body = [
    {
      id: 1,
      row: ["GBP", "دوشنبه", "۲۷ بهمن", "۲۲:۴۳"],
    },
    {
      id: 2,
      row: ["GBP", "دوشنبه", "۲۷ بهمن", "۲۲:۴۳"],
    },
    {
      id: 3,
      row: ["GBP", "دوشنبه", "۲۷ بهمن", "۲۲:۴۳"],
    },
    {
      id: 4,
      row: ["GBP", "دوشنبه", "۲۷ بهمن", "۲۲:۴۳"],
    },
    {
      id: 5,
      row: ["GBP", "دوشنبه", "۲۷ بهمن", "۲۲:۴۳"],
    },
  ];

  return (
    <div className="w-100">
      <table className="w-100 minimal-table">
        <thead className="w-100">
          <tr className="d-flex w-100 justify-around">
            {heads.map((item) => {
              return (
                <th key={item} className="font-sm font-bold text-muted">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="w-100 ">
          {body.map((body) => {
            return (
              <tr key={body.id} className="w-100 d-flex justify-around">
                {body.row.map((row) => {
                  return (
                    <th className="font-light font-sm text-dark" key={row}>
                      {row}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
