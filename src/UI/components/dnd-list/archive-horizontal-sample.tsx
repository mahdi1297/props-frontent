// // import { useEffect, useState } from "react";
// // import RLDD from "react-list-drag-and-drop/lib/RLDD";
// // import './style.scss'

// // const items = [
// //   {
// //     id: 1,
// //   },
// //   {
// //     id: 2,
// //   },
// //   {
// //     id: 3,
// //   },
// //   {
// //     id: 4,
// //   },
// // ];

// // export const DndList = () => {
// //   const [orders, setOrders] = useState<any>([]);

// //   useEffect(() => {
// //     setOrders(items);
// //   }, []);

// //   const handleRLDDChange = (reorderedItems: any) => {
// //     // console.log('Example.handleRLDDChange');
// //     setOrders(reorderedItems);
// //   };

// //   return (
// //     <div className="dnd__list">
// //       <RLDD
// //         items={orders}
// //         itemRenderer={(item) => {
// //           return <div className="item">{item.id}</div>;
// //         }}
// //         onChange={handleRLDDChange}
// //       />
// //     </div>
// //   );
// // };


// import * as React from 'react';
// import RLDD from 'react-list-drag-and-drop/lib/RLDD';

// const fruits = require('./fruits.json');

// interface Item {
//   id: number;
//   title: string;
//   icon: string;
// }

// interface State {
//   items: Item[];
// }

// export class HorizontalExample extends React.PureComponent<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = { items: fruits.fruits };
//   }

//   render() {
//     // console.log('HorizontalExample.render');
//     const items = this.state.items;
//     return (
//       <div className="example horizontal">
//         <h2>Horizontal Example: Draggable List of Fruits</h2>
//         <p>Drag and drop items to re-order the list.</p>
//         <RLDD
//           cssClasses="example-list-container"
//           layout="horizontal"
//           items={items}
//           itemRenderer={this.itemRenderer}
//           onChange={this.handleRLDDChange}
//         />
//       </div>
//     );
//   }

//   private itemRenderer = (item: Item, index: number): JSX.Element => {
//     return (
//       <div className="item">
//         <div className="icon">{item.icon}</div>
//         <div className="title">{item.title}</div>
//         <div className="small">
//           item.id: {item.id} - index: {index}
//         </div>
//       </div>
//     );
//   };

//   private handleRLDDChange = (reorderedItems: Array<Item>) => {
//     // console.log('Example.handleRLDDChange');
//     this.setState({ items: reorderedItems });
//   };
// }


export {}