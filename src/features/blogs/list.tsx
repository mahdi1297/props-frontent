import { Card } from "UI/components/card";
import { blogsMockData } from "./models";
import { Blog } from "./types";
import { ListItem } from "./list-item";

export const BlogsList = () => {
  return (
    <div className="container mb-24">
      <Card>
        <h3 className="font-lg text-dark">نوشته ها</h3>
        <div className="mt-24">
          <ul className="w-100 d-flex flex-col gap-24">
            {blogsMockData.map((item: Blog) => {
              return <ListItem item={item} />;
            })}
          </ul>
        </div>
      </Card>
    </div>
  );
};
