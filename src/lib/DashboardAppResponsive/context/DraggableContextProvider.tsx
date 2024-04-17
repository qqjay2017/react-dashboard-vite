import { PropsWithChildren } from "react";
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
  return (
    <DraggableContext.Provider
      value={{
        isDraggable,
        isResizable,
      }}
    >
      {children}
    </DraggableContext.Provider>
  );
};
