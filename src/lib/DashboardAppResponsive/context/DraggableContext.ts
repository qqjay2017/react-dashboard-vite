import React, { Dispatch, createContext, useContext } from "react";

export interface DraggableContextValue {
  isDraggable?: boolean;
  isResizable?: boolean;
  handleId: string;
  setHandleId: Dispatch<React.SetStateAction<string>>;
}

export const DraggableContext = createContext<DraggableContextValue>({
  isDraggable: false,
  isResizable: false,
  handleId: "",
  setHandleId: () => {},
});

export const useDraggableContext = () => useContext(DraggableContext);
