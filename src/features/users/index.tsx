import { Card } from "UI/components/card";
import { IconProfileEdit, IconTrash } from "UI/icons";

export const UsersTable = () => {
  return (
    <div className="container">
      <div className="w-100 mb-24">
        <Card>
          <h3 className="font-lg text-dark">مدیریت کاربران</h3>
          <MinimalDataTable />
        </Card>
      </div>
    </div>
  );
};

const MinimalDataTable = () => {
  const heads = ["نام", "نام خانوادگی", "ایمیل", "شماره موبایل","عملیات"];

  const body = [
    {
      id: 1,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 2,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 3,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 4,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 5,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 6,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 7,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 8,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 9,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 10,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 11,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 12,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 13,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 14,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 15,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
    {
      id: 16,
      row: ["مهدی", "علی پور", "alipoor@gmail.com", "09199898913"],
    },
  ];

  return (
    <div className="w-100 mt-24">
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
                <th className="font-light font-sm text-dark">
                    <div className="h-100 d-flex gap-8 align-center">
                        <span>
                            {IconProfileEdit}
                        </span>
                        <span className="trah-icon">
                            {IconTrash}
                        </span>
                    </div>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
