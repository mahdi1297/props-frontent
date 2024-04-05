import { TICKETS_MESSAGE } from "consts/messages";
import { Button } from "UI/components/button";
import { Card } from "UI/components/card";
import { InputControl } from "UI/components/form/input-control";
import "./style.scss";
import { Input } from "UI/components/form/input";

export const TicketsHome = () => {
  return (
    <div className="container">
      <Card>
        <div className="w-100">
          <h3 className="font-lg text-dark">پشتیبانی</h3>

          <p className="tex-dark mt-24 font-light line-height-md">
            {TICKETS_MESSAGE}
          </p>

          <div className="mt-24 d-flex justify-end">
            <Button text="ثبت تیکت جدید" width="200px" varients="parimary" />
          </div>
        </div>
      </Card>
      <MessageBox />
    </div>
  );
};

const MessageBox = () => {
  return (
    <div className="w-100 mt-24">
      <Card>
        <div className="d-flex gap-16">
          <div className="w-100">
            <InputControl label="عنوان پیام" />
          </div>
          <div className="w-100">
            <InputControl label="دسته بندی" />
          </div>
        </div>
        <div className="ticket-box mt-24">
          <textarea placeholder="متن پیام"></textarea>
          <div className="pl-16 pr-16 gap-16 __sender-box d-flex align-center justify-between">
            <Button text="ارسال" varients="parimary" />
          </div>
        </div>
      </Card>
    </div>
  );
};
