import React, { createContext, useContext } from "react";

export interface DraggableContextValue {
  isDraggable?: boolean;
  isResizable?: boolean;
}

export const DraggableContext = createContext({
  isDraggable: false,
  isResizable: false,
});

export const useDraggableContext = () => useContext(DraggableContext);
