import { createContext } from "react";
import { ResourceOptions } from "../core";

export interface LayoutContextValue {
    rows: number;
    cols: number;
    rowHeight: number;
    colWidth: number;
    layout: ResourceOptions[];
}

export const LayoutContext = createContext<LayoutContextValue>({
    layout: [],
    rows: 12,
    cols: 12,

    rowHeight: 78,
    colWidth: 0,
})