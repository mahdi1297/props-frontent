import { Card } from "UI/components/card";
import "./style.scss";
import { InputControl } from "UI/components/form/input-control";
import { CkEditor } from "UI/components/ckEditor";
import { Button } from "UI/components/button";

const sampleImage = "https://axha.com/wp-content/uploads/2021/06/summerrbanner01.jpg"


export const BlogDetailWrapper = () => {
  return (
    <div className="w-100 blog__detail-wrapper">
      <div className="container mb-24 d-flex gap-24">
        <div className="content">
          <Card>
            <h3 className="font-lg text-dark">عناون یک نوشته</h3>

            <div className="mt-24 d-flex align-start gap-16">
              <InputControl label="عنوان" />
              <InputControl label="توضیحات" />
            </div>
            <div className="mt-16 d-flex align-start gap-16">
              <InputControl label="کلمات کلیدی" />
              <InputControl label="دسته بندی" />
            </div>
            <div className="mt-24">
              <CkEditor />
            </div>
            <div className="mt-24">
              <Button text="ذخیره" varients="parimary" width="200px" />
            </div>
          </Card>
        </div>
        <div className="___sidebar">
          <Card>
            <div className="thumbnail__wrapper w-100">
                <img src={sampleImage} width='100%' height='auto' alt=""/>
            </div>
            <div className="d-flex flex-col align-start justify-center mt-16">
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
          </Card>
        </div>
      </div>
    </div>
  );
};
