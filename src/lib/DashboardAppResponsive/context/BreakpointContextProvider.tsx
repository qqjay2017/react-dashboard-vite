import { PropsWithChildren } from "react";
import { BreakpointContext } from "./BreakpointContext";
import { useBreakpoints } from "../core/hooks/useBreakpoints";
import {
  Breakpoints,

} from "../core/type";


export interface BreakpointContextProviderProps extends PropsWithChildren {
  breakpoints?: Breakpoints;
  /**
   * 布局配置数组,单位为1栅格
   * 支持函数写法
   * w : 容器宽度
   * h : 容器高位
   * x : x轴位置,0为左上角
   * y : y轴位置,0为左上角
   * @example 
   * 
   *  <DashboardAppResponsive
        layout={[
          {
            i:"A1",
            w: 12,
            h: 5,
            x: 0,
            y: 0,
            zIndex:99,
            padding:[12,12,12,12],


          }
        ]}
        resource={{
          A1: TestChildA1,
         
        }}
        />
   * 
   */

}

export const BreakpointContextProvider = ({
  children,
  breakpoints,
}: BreakpointContextProviderProps) => {
  const { breakpoint, width } = useBreakpoints(breakpoints);
  if (width <= 0) {
    return null
  }

  return (<BreakpointContext.Provider
    value={{
      breakpoint: breakpoint,
    }}
  >
    {children}
  </BreakpointContext.Provider>);
};
