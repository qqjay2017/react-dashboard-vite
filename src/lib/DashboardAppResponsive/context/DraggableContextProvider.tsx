import { PropsWithChildren, useState } from "react";
import { DraggableContext } from "./DraggableContext";

export interface DraggableContextProviderProps extends PropsWithChildren {
  /**
   * 是否允许容器拖拽
   *
   * @default false
   */
  isDraggable?: boolean;
  /**
   * 是否允许容器改变尺寸
   *
   * @default false
   */
  isResizable?: boolean;
}

export const DraggableContextProvider = ({
  isResizable = false,
  isDraggable = false,
  children,
}: DraggableContextProviderProps) => {
  const [handleId, setHandleId] = useState("");
  return (
    <DraggableContext.Provider
      value={{
        isDraggable,
        isResizable,
        handleId,
        setHandleId,
      }}
    >
      {children}
    </DraggableContext.Provider>
  );
};
