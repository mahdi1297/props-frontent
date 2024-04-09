import { useEffect, useState } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import "./style.scss";


export const DndList = ({
  ListItemComponent,
  data,
}: {
  ListItemComponent: any;
  data: any;
}) => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    setOrders(data);
  }, []);

  const handleRLDDChange = (reorderedItems: any) => {
    // console.log('Example.handleRLDDChange');
    setOrders(reorderedItems);
  };

  return (
    <div className="dnd__list">
      <RLDD
        items={orders}
        itemRenderer={ListItemComponent}
        onChange={handleRLDDChange}
      />
    </div>
  );
};
