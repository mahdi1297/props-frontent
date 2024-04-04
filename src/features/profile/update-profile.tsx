import { DEFAULT_PROFILE_IMAGE } from "consts/constaints";
import "./style.scss";
import { Button } from "UI/components/button";
import { InputControl } from "UI/components/form/input-control";

export const UpdateProfile = () => {
  return (
    <div className="update-profile">
      <UploadImage />
      <div className="mt-24">
        <div className="form-wrapper d-flex gap-16 justify-between align-start">
          <div>
            <div>
              <InputControl
                label="نام و نام خانوادگی"
                placeholder="مهدی علی پور"
              />
            </div>
            <div className="mt-16">
              <InputControl label="ایمیل" placeholder="sample@gmail.com" />
            </div>
            <div className="mt-16">
              <InputControl label="پروفایل کاربری" placeholder="@alipoor" />
            </div>
          </div>
          <div>
            <div>
              <InputControl label="شماره موبایل" placeholder="09199892100" />
            </div>
            <div className="mt-16">
              <InputControl label="کد ملی" placeholder="0398902325" />
            </div>
            <div className="mt-16">
              <InputControl label="تاریخ تولد" placeholder="15/12/1379" />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <Button width="250px" varients="parimary" text="بروزرسانی" />
        </div>
      </div>
    </div>
  );
};

const UploadImage = () => {
  return (
    <div className="upload-image__wrapper pb-24 w-100">
      <h3 className="font-lg text-dark font-bold">آپلود تصویر</h3>
      <div className="mt-24 upload-image-body d-flex gap-24 align-center justify-start">
        <figure>
          <img src={DEFAULT_PROFILE_IMAGE} width={78} height={78} alt="" />
        </figure>

        <div className="d-flex flex-col align-start justify-center">
          <div className="d-flex align-center justify-center gap-16">
            <Button
              width="150px"
              varients="outline-muted"
              text="آپلود عکس جدید"
            />
            <Button width="150px" varients="outline-danger" text="حذف" />
          </div>
          <p className="upload-hint font-xs mt-12 text-muted">
            فرمت قابل قبول: PNG و JPG و JPEG
          </p>
        </div>
      </div>
    </div>
  );
};
