import { PropsWithChildren, useState } from "react";
import { DraggableContext } from "./DraggableContext";

export interface DraggableContextProviderProps extends PropsWithChildren {
  isDraggable?: boolean;
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
