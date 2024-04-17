import "./draggableBg.less";
export const DraggableBg = ({
  headerHeight = 0,
  cols = 12,
  rows = 12,
  rowHeight = 12,
  colWidth = 12,
}: {
  headerHeight: number;
  cols: number;
  rows: number;
  colWidth: number;
  rowHeight: number;
}) => {
  return (
    <div className="draggableBg">
      <div
        style={{
          height: headerHeight,
        }}
      ></div>
      <div
        className="grag-grid-container"
        style={{
          height: `calc( 100% - ${headerHeight}px )`,
          width: "100%",
        }}
      >
        <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: cols * rows }).map((_, index) => {
            const row = Math.floor(index / rows);
            const col = index % cols;
            const color =
              (row + col) % 2 === 0
                ? "rgba(34, 60, 113, 1)"
                : "rgba(36, 64, 122, 1)"; // 交错颜色
            const x = col * colWidth;
            const y = row * rowHeight;
            return (
              <rect
                key={index}
                x={x}
                y={y}
                width={colWidth + "px"}
                height={rowHeight + "px"}
                fill={color}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};
