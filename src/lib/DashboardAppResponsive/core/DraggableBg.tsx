// import { useBreakpointContext } from "../context";
// import "./draggableBg.less";
// function create2DArray(rows: number = 0, cols: number = 0): null[][] {
//   const array = new Array(rows); // 创建外层数组，长度为rows
//   for (let i = 0; i < rows; i++) {
//     array[i] = new Array(cols); // 创建内层数组，长度为cols
//     for (let j = 0; j < cols; j++) {
//       array[i][j] = null; // 初始化所有元素为null
//     }
//   }
//   return array;
// }

export const DraggableBg = () => {
  return null
  // const { headerHeight, cols, rows, colWidth, rowHeight } =
  //   useBreakpointContext();
  // return (
  //   <div className="draggableBg">
  //     <div
  //       style={{
  //         height: headerHeight,
  //       }}
  //     ></div>
  //     <div
  //       className="grag-grid-container"
  //       style={{
  //         height: `calc( 100% - ${headerHeight}px )`,
  //         width: "100%",
  //       }}
  //     >
  //       <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
  //         {create2DArray(Math.floor(rows || 0), Math.floor(cols || 0)).map(
  //           (row, rowIndex) => {
  //             return row.map((col, colIndex) => {
  //               const color =
  //                 (rowIndex + colIndex) % 2 === 0
  //                   ? "rgba(34, 60, 113, 1)"
  //                   : "rgba(36, 64, 122, 1)"; // 交错颜色
  //               const x = colIndex * colWidth;
  //               const y = rowIndex * rowHeight;
  //               return (
  //                 <rect
  //                   key={`${rowIndex}-${colIndex}`}
  //                   x={x}
  //                   y={y}
  //                   width={colWidth >= 0 ? colWidth + "px" : 0}
  //                   height={rowHeight >= 0 ? rowHeight + "px" : 0}
  //                   fill={color}
  //                 />
  //               );
  //             });
  //           }
  //         )}
  //       </svg>
  //     </div>
  //   </div>
  // );
};
