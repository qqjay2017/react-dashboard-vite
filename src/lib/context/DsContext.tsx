import { createContext } from "react";
import { DashBoardTheme } from "..";

export type DsContextType = {
  globalStatus: Record<string, any>;
  setGlobalStatus: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  matchBreak?: string;
  forceFullScreen?: boolean;

  itemProps?: Record<string, any>;

  gridSize?: { w: number; h: number };
};

export const DsContext = createContext<DsContextType | null>(null);
