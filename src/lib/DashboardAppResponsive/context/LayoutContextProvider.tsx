import { PropsWithChildren } from 'react'
import { LayoutContext } from './LayoutContext'
import { useBreakpointContext } from './useBreakpointContext'
import { cn } from '@/lib/utils';
import { ResourceChildren, ResourceOptions, ValueOrFunValue } from '../core';
import { useThemeMode } from './useThemeMode';
import { computedMaxRow } from '../core/utils/appUtil';
import { sizeFormat } from '@/lib/utils/sizeFormat';
import useResizeObserver from 'use-resize-observer';
type Component<P> =
    | React.ComponentType<P>
    | React.ForwardRefExoticComponent<P>
    | React.FC<P>
    | keyof React.ReactHTML;

export type CustomizeComponent = Component<any>;

export type LayoutContextComponents = {
    layout?: CustomizeComponent;
    content?: CustomizeComponent;
    headerWrapper?: CustomizeComponent;
    headerInner?: CustomizeComponent;
    containerWrapper?: CustomizeComponent;
}

export interface LayoutContextProviderProps extends PropsWithChildren {
    components?: LayoutContextComponents;
    themeName?: string;
    layout?: ValueOrFunValue<ResourceOptions[]>;
    /**
     * 列数量
     * 支持函数或者数字
     * 
     * @example
     * 
     *   <DashboardAppResponsive
          
          cols={12}
          />
  
          <DashboardAppResponsive
          
          cols={(params)=>{
              return 12
          }}
          />
  
  
     */
    cols?: ValueOrFunValue<number>;
    /**
     * 格子组件资源
     *  key是对应layout的i
     *
     * @example 
     * 
     * <DashboardAppResponsive
          layout={[
            {
              i:"A1"
            }
          ]}
          resource={{
            A1: TestChildA1,
           
          }}
          />
     */
    resource?: Record<string, ResourceChildren>;
    headerHeight?: ValueOrFunValue<number>;
    forceFullScreen?: ValueOrFunValue<boolean>;
    rowHeight?: ValueOrFunValue<number>;
    wrapperStyle?: React.CSSProperties;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;

    minHeight?: number;
}

const DefaultComponent = ({ children }: { children?: any }) => <>{children}</>

export const LayoutContextProvider = ({ children, components, themeName, minHeight = 861,
    layout: layoutParam,

    cols: colsParam = 12,

    rowHeight: rowHeightParam = 78,
    resource = {},
    wrapperStyle,
    wrapperProps


}: LayoutContextProviderProps) => {
    const { breakpoint } = useBreakpointContext();
    const { themeMode } = useThemeMode();
    const HeaderWrapper = components?.headerWrapper || DefaultComponent;
    const HeaderInner = components?.headerInner || DefaultComponent;
    const Content = components?.content || DefaultComponent;
    const componentProps = {
        breakpoint,
        themeName
    }

    const layout = (
        typeof layoutParam === "function"
            ? layoutParam({ breakpoint, themeMode })
            : layoutParam || []
    ).filter((l) => resource[l.i]);


    const cols =
        typeof colsParam === "function" ? colsParam({ breakpoint }) : colsParam;
    const rows = computedMaxRow(layout);

    const { ref: contentRef, height: contentHeight = 0, width: contentWidth = 0 } = useResizeObserver()
    const rowHeight = breakpoint === 'desktop' || breakpoint === 'showroom'
        ? sizeFormat((contentHeight) / rows)
        : typeof rowHeightParam === "function"
            ? rowHeightParam({ breakpoint, themeMode })
            : rowHeightParam;
    const colWidth = cols ? sizeFormat(contentWidth / cols) : 0;


    return (
        <LayoutContext.Provider value={{
            layout,
            cols,
            rows,
            colWidth,
            rowHeight
        }}>
            <div
                {...wrapperProps}
                className={cn("dashboardAppResponsive",
                    themeName,
                    wrapperProps?.className,
                    breakpoint)}
                style={{
                    width: '100%',
                    height: "100%",
                    position: 'relative',
                    minHeight,
                    ...wrapperStyle
                }}>
                <HeaderWrapper {...componentProps}>
                    <HeaderInner {...componentProps} />
                </HeaderWrapper>
                <Content  {...componentProps} contentRef={contentRef}>
                    {children}
                </Content>

            </div>

        </LayoutContext.Provider>
    )
}
