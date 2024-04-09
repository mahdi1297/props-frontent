import { Card } from "UI/components/card";
import { ListItem } from "./list-item";
import { FAQItem } from "./types";
import { faqMockData } from "./models";

export const FAQPage = () => {
  return (
    <div className="container mb-24">
      <Card>
        <h3 className="font-lg text-dark">سوالات متداول</h3>
        <div className="mt-24 d-flex flex-col">
          {faqMockData.map((item: FAQItem) => {
            return <ListItem key={item.id} item={item} />;
          })}
          {/* <DndList
            data={faqMockData}
            ListItemComponent={(item: FAQItem) => {
              return <ListItem item={item} />;
            }}
          /> */}
        </div>
      </Card>
    </div>
  );
};
